import asyncio
import audioop
import base64
import logging
from collections.abc import Awaitable, Callable
from typing import Any, cast

import librosa
import numpy as np
from anyio.to_thread import run_sync
from fastapi import WebSocket
from fastapi.websockets import WebSocketDisconnect, WebSocketState

from .tracks import AsyncStreamHandler, StreamHandlerImpl
from .utils import (
    AdditionalOutputs,
    CloseStream,
    Context,
    DataChannel,
    audio_to_float32,
    audio_to_int16,
    current_context,
    split_output,
)


class WebSocketDataChannel(DataChannel):
    def __init__(self, websocket: WebSocket, loop: asyncio.AbstractEventLoop):
        self.websocket = websocket
        self.loop = loop

    def send(self, message: str) -> None:
        asyncio.run_coroutine_threadsafe(self.websocket.send_text(message), self.loop)


logger = logging.getLogger(__file__)


def convert_to_mulaw(
    audio_data: np.ndarray, original_rate: int, target_rate: int
) -> bytes:
    """Convert audio data to 8kHz mu-law format"""
    audio_data = audio_to_float32(audio_data)

    if original_rate != target_rate:
        audio_data = librosa.resample(
            audio_data, orig_sr=original_rate, target_sr=target_rate
        )

    audio_data = audio_to_int16(audio_data)

    return audioop.lin2ulaw(audio_data, 2)  # type: ignore


class WebSocketHandler:
    def __init__(
        self,
        stream_handler: StreamHandlerImpl,
        set_handler: Callable[[str, "WebSocketHandler"], Awaitable[None]],
        clean_up: Callable[[str], None],
        additional_outputs_factory: Callable[
            [str], Callable[[AdditionalOutputs], None]
        ],
    ):
        self.stream_handler = stream_handler
        self.stream_handler._clear_queue = self._clear_queue
        self.websocket: WebSocket | None = None
        self._emit_task: asyncio.Task | None = None
        self.stream_id: str | None = None
        self.set_additional_outputs_factory = additional_outputs_factory
        self.set_additional_outputs: Callable[[AdditionalOutputs], None]
        self.set_handler = set_handler
        self.quit = asyncio.Event()
        self.clean_up = clean_up
        self.queue = asyncio.Queue()
        self.playing_durations = []  # Track durations of frames being played
        self._frame_cleanup_task: asyncio.Task | None = None
        self._graceful_shutdown_task: asyncio.Task | None = None

    def _clear_queue(self):
        i = 0
        while not self.queue.empty():
            self.queue.get_nowait()
            i += 1
        logger.debug("websocket: popped %d items from queue", i)

    def set_args(self, args: list[Any]):
        self.stream_handler.set_args(args)

    async def handle_websocket(self, websocket: WebSocket):
        await websocket.accept()
        loop = asyncio.get_running_loop()
        self.loop = loop
        self.data_channel = WebSocketDataChannel(websocket, loop)
        self.stream_handler._loop = loop
        self.stream_handler.set_channel(self.data_channel)
        self._emit_task = asyncio.create_task(self._emit_loop())
        self._emit_to_queue_task = asyncio.create_task(self._emit_to_queue())
        self._frame_cleanup_task = asyncio.create_task(self._cleanup_frames_loop())
        was_disconnected = False

        try:
            while not self.quit.is_set():
                if websocket.application_state != WebSocketState.CONNECTED:
                    was_disconnected = True
                    break

                message = await websocket.receive_json()

                if message["event"] == "media":
                    audio_payload = base64.b64decode(message["media"]["payload"])

                    audio_array = np.frombuffer(
                        audioop.ulaw2lin(audio_payload, 2), dtype=np.int16
                    )

                    if (
                        self.stream_handler.phone_mode
                        and self.stream_handler.input_sample_rate != 8000
                    ):
                        audio_array = audio_to_float32(audio_array)
                        audio_array = librosa.resample(
                            audio_array,
                            orig_sr=8000,
                            target_sr=self.stream_handler.input_sample_rate,
                        )
                        audio_array = audio_to_int16(audio_array)
                    try:
                        if isinstance(self.stream_handler, AsyncStreamHandler):
                            await self.stream_handler.receive(
                                (self.stream_handler.input_sample_rate, audio_array)
                            )
                        else:
                            await run_sync(
                                self.receive_with_context,
                                (self.stream_handler.input_sample_rate, audio_array),
                            )
                    except Exception as e:
                        print(e)
                        import traceback

                        traceback.print_exc()
                        logger.debug("Error in websocket handler %s", e)

                elif message["event"] == "start":
                    if self.stream_handler.phone_mode:
                        self.stream_id = cast(str, message["streamSid"])
                    else:
                        self.stream_id = cast(str, message["websocket_id"])
                    self.websocket = websocket
                    current_context.set(
                        Context(webrtc_id=self.stream_id, websocket=websocket)
                    )
                    if isinstance(self.stream_handler, AsyncStreamHandler):
                        start_up = self.stream_handler.start_up()
                    else:
                        start_up = run_sync(self.stream_handler.start_up)  # type: ignore

                    self.start_up_task = asyncio.create_task(start_up)

                    self.set_additional_outputs = self.set_additional_outputs_factory(
                        self.stream_id
                    )
                    await self.set_handler(self.stream_id, self)
                elif message["event"] == "stop":
                    self.quit.set()
                    return  # Still runs the `finally` block
                elif message["event"] == "ping":
                    await websocket.send_json({"event": "pong"})
        except WebSocketDisconnect:
            # Surprisingly, this leaves `websocket.application_state` as CONNECTED
            # in the `finally` block, so we use this variable
            was_disconnected = True
        finally:
            if self._emit_task:
                self._emit_task.cancel()
            if self._emit_to_queue_task:
                self._emit_to_queue_task.cancel()
            if self._frame_cleanup_task:
                self._frame_cleanup_task.cancel()
            if self._graceful_shutdown_task:
                self._graceful_shutdown_task.cancel()
            if self.start_up_task:
                self.start_up_task.cancel()

            if not was_disconnected:
                await websocket.close()

            self.clean_up(cast(str, self.stream_id))

    def emit_with_context(self):
        current_context.set(
            Context(webrtc_id=cast(str, self.stream_id), websocket=self.websocket)
        )
        return self.stream_handler.emit()

    def receive_with_context(self, frame: tuple[int, np.ndarray]):
        current_context.set(
            Context(webrtc_id=cast(str, self.stream_id), websocket=self.websocket)
        )
        return self.stream_handler.receive(frame)

    async def _emit_to_queue(self):
        try:
            while not self.quit.is_set():
                if isinstance(self.stream_handler, AsyncStreamHandler):
                    output = await self.stream_handler.emit()
                else:
                    output = await run_sync(self.emit_with_context)
                self.queue.put_nowait(output)
        except asyncio.CancelledError:
            logger.debug("Emit loop cancelled")
        except Exception as e:
            import traceback

            traceback.print_exc()
            logger.debug("Error in emit loop: %s", e)

    async def _cleanup_frames_loop(self):
        """Background task that removes frames from playing_durations after they've finished playing."""
        try:
            while not self.quit.is_set():
                if self.playing_durations:
                    duration = self.playing_durations[0]
                    await asyncio.sleep(duration)
                    if self.playing_durations:
                        self.playing_durations.pop(0)
                else:
                    await asyncio.sleep(0.1)
        except asyncio.CancelledError:
            logger.debug("Frame cleanup loop cancelled")
        except Exception as e:
            logger.debug(f"Error in frame cleanup loop: {e}")

    async def _wait_for_audio_completion(self):
        """Wait for all queued audio to finish playing before shutting down."""
        try:
            if not self.playing_durations:
                self.quit.set()
                return

            # Calculate total remaining playback time
            total_wait = sum(self.playing_durations)

            if total_wait > 0:
                logger.debug(
                    f"Waiting {total_wait:.2f}s for audio to complete before closing"
                )
                await asyncio.sleep(total_wait)

            self.quit.set()
        except asyncio.CancelledError:
            logger.debug("Graceful shutdown cancelled")
        except Exception as e:
            logger.debug(f"Error in graceful shutdown: {e}")
            self.quit.set()

    async def _emit_loop(self):
        try:
            while not self.quit.is_set():
                wait_duration = 0.02
                output = await self.queue.get()
                if output is not None:
                    frame, output = split_output(output)
                    if isinstance(output, AdditionalOutputs):
                        self.set_additional_outputs(output)
                    elif isinstance(output, CloseStream):
                        self._graceful_shutdown_task = asyncio.create_task(
                            self._wait_for_audio_completion()
                        )
                        continue

                    if not isinstance(frame, tuple):
                        continue
                    target_rate = (
                        8_000
                        if self.stream_handler.phone_mode
                        else self.stream_handler.output_sample_rate
                    )
                    duration = np.atleast_2d(frame[1]).shape[1] / frame[0]
                    mulaw_audio = convert_to_mulaw(
                        frame[1],
                        frame[0],
                        target_rate=target_rate,
                    )
                    audio_payload = base64.b64encode(mulaw_audio).decode("utf-8")

                    if self.websocket and self.stream_id:
                        self.playing_durations.append(duration)

                        payload = {
                            "event": "media",
                            "media": {"payload": audio_payload},
                        }
                        if self.stream_handler.phone_mode:
                            payload["streamSid"] = self.stream_id
                            # yield audio slightly faster than real-time
                            wait_duration = 0.75 * duration
                        await self.websocket.send_json(payload)
                await asyncio.sleep(wait_duration)

        except asyncio.CancelledError:
            logger.debug("Emit loop cancelled")
        except Exception as e:
            import traceback

            traceback.print_exc()
            logger.debug("Error in emit loop: %s", e)
