import asyncio
import inspect
from collections.abc import AsyncGenerator, Callable, Generator
from dataclasses import dataclass, field
from logging import getLogger
from threading import Event
from typing import Any, Literal, cast

import numpy as np
from numpy.typing import NDArray

from .pause_detection import ModelOptions, PauseDetectionModel, get_silero_model
from .tracks import EmitType, StreamHandler
from .utils import AdditionalOutputs, WebRTCData, create_message, split_output

logger = getLogger(__name__)


@dataclass
class AlgoOptions:
    """
    Algorithm options.

    Attributes:
    - audio_chunk_duration: Duration in seconds of audio chunks passed to the VAD model.
    - started_talking_threshold: If the chunk has more than started_talking_threshold seconds of speech, the user started talking.
    - speech_threshold: If, after the user started speaking, there is a chunk with less than speech_threshold seconds of speech, the user stopped speaking.
    - max_continuous_speech_s: Max duration of speech chunks before the handler is triggered, even if a pause is not detected by the VAD model.
    """

    audio_chunk_duration: float = 0.6
    started_talking_threshold: float = 0.2
    speech_threshold: float = 0.1
    max_continuous_speech_s: float = float("inf")


@dataclass
class AppState:
    stream: np.ndarray | None = None
    sampling_rate: int = 0
    pause_detected: bool = False
    started_talking: bool = False
    responding: bool = False
    stopped: bool = False
    buffer: np.ndarray | None = None
    responded_audio: bool = False
    interrupted: asyncio.Event = field(default_factory=asyncio.Event)

    def new(self):
        return AppState()


ReplyFnGenerator = (
    Callable[
        [tuple[int, NDArray[np.int16]], Any],
        Generator[EmitType, None, None],
    ]
    | Callable[
        [tuple[int, NDArray[np.int16]]],
        Generator[EmitType, None, None],
    ]
    | Callable[
        [tuple[int, NDArray[np.int16]]],
        AsyncGenerator[EmitType, None],
    ]
    | Callable[
        [tuple[int, NDArray[np.int16]], Any],
        AsyncGenerator[EmitType, None],
    ]
    | Callable[
        [WebRTCData],
        Generator[EmitType, None, None],
    ]
    | Callable[
        [WebRTCData, Any],
        AsyncGenerator[EmitType, None],
    ]
)


async def iterate(generator: Generator) -> Any:
    return next(generator)


class ReplyOnPause(StreamHandler):
    """
    A stream handler that processes incoming audio, detects pauses,
    and triggers a reply function (`fn`) when a pause is detected.

    This handler accumulates audio chunks, uses a Voice Activity Detection (VAD)
    model to determine speech segments, and identifies pauses based on configurable
    thresholds. Once a pause is detected after speech has started, it calls the
    provided generator function `fn` with the accumulated audio.

    It can optionally run a `startup_fn` at the beginning and supports interruption
    of the reply function if new audio arrives.

    Attributes:
        fn (ReplyFnGenerator): The generator function to call when a pause is detected.
        startup_fn (Callable | None): An optional function to run at startup.
        algo_options (AlgoOptions): Configuration for the pause detection algorithm.
        model_options (ModelOptions | None): Configuration for the VAD model.
        can_interrupt (bool): Whether incoming audio can interrupt the `fn` execution.
        expected_layout (Literal["mono", "stereo"]): Expected audio channel layout.
        output_sample_rate (int): Sample rate for the output audio from `fn`.
        input_sample_rate (int): Expected sample rate of the input audio.
        model (PauseDetectionModel): The VAD model instance.
        state (AppState): The current state of the pause detection logic.
        generator (Generator | AsyncGenerator | None): The active generator instance from `fn`.
        event (Event): Threading event used to signal pause detection.
        loop (asyncio.AbstractEventLoop): The asyncio event loop.
    """

    def __init__(
        self,
        fn: ReplyFnGenerator,
        startup_fn: Callable | None = None,
        algo_options: AlgoOptions | None = None,
        model_options: ModelOptions | None = None,
        can_interrupt: bool = True,
        expected_layout: Literal["mono", "stereo"] = "mono",
        output_sample_rate: int = 24000,
        output_frame_size: int | None = None,  # Deprecated
        input_sample_rate: int = 48000,
        model: PauseDetectionModel | None = None,
        needs_args: bool = False,
    ):
        """
        Initializes the ReplyOnPause handler.

        Args:
            fn: The generator function to execute upon pause detection.
                It receives `(sample_rate, audio_array)` and optionally `*args`.
            startup_fn: An optional function to run once at the beginning.
            algo_options: Options for the pause detection algorithm.
            model_options: Options for the VAD model.
            can_interrupt: If True, incoming audio during `fn` execution
                will stop the generator and process the new audio.
            expected_layout: Expected input audio layout ('mono' or 'stereo').
            output_sample_rate: The sample rate expected for audio yielded by `fn`.
            output_frame_size: Deprecated.
            input_sample_rate: The expected sample rate of incoming audio.
            model: An optional pre-initialized VAD model instance.
            needs_args: Whether the reply function expects additional arguments.
        """
        super().__init__(
            expected_layout,
            output_sample_rate,
            output_frame_size,
            input_sample_rate=input_sample_rate,
        )
        self.can_interrupt = can_interrupt
        self.expected_layout: Literal["mono", "stereo"] = expected_layout
        self.model = model or get_silero_model()
        self.fn = fn
        self.is_async = inspect.isasyncgenfunction(fn)
        self.event = Event()
        self.state = AppState()
        self.generator: (
            Generator[EmitType, None, None] | AsyncGenerator[EmitType, None] | None
        ) = None
        self.model_options = model_options
        self.algo_options = algo_options or AlgoOptions()
        self.startup_fn = startup_fn
        self.needs_args = needs_args

    @property
    def _needs_additional_inputs(self) -> bool:
        """Checks if the reply function `fn` expects additional arguments."""
        return len(inspect.signature(self.fn).parameters) > 1 or self.needs_args

    def start_up(self):
        """
        Executes the startup function `startup_fn` if provided.

        Waits for additional arguments if `_needs_additional_inputs` is True
        before calling `startup_fn`. Sets the `event` after completion.
        """
        if self.startup_fn:
            if self._needs_additional_inputs:
                self.wait_for_args_sync()
                args = self.latest_args[1:]
            else:
                args = ()
            self.generator = self.startup_fn(*args)
            self.event.set()

    def copy(self):
        """Creates a new instance of ReplyOnPause with the same configuration."""
        return ReplyOnPause(
            self.fn,
            self.startup_fn,
            self.algo_options,
            self.model_options,
            self.can_interrupt,
            self.expected_layout,
            self.output_sample_rate,
            self.output_frame_size,
            self.input_sample_rate,
            self.model,
            self.needs_args,
        )

    def determine_pause(
        self, audio: np.ndarray, sampling_rate: int, state: AppState
    ) -> bool:
        """
        Analyzes an audio chunk to detect if a significant pause occurred after speech.

        Uses the VAD model to measure speech duration within the chunk. Updates the
        application state (`state`) regarding whether talking has started and
        accumulates speech segments.

        Args:
            audio: The numpy array containing the audio chunk.
            sampling_rate: The sample rate of the audio chunk.
            state: The current application state.

        Returns:
            True if a pause satisfying the configured thresholds is detected
            after speech has started, False otherwise.
        """
        duration = len(audio) / sampling_rate

        if duration >= self.algo_options.audio_chunk_duration:
            dur_vad, _ = self.model.vad((sampling_rate, audio), self.model_options)
            logger.debug("VAD duration: %s", dur_vad)
            if (
                dur_vad > self.algo_options.started_talking_threshold
                and not state.started_talking
            ):
                state.started_talking = True
                logger.debug("Started talking")
                self.send_message_sync(create_message("log", "started_talking"))
            if state.started_talking:
                if state.stream is None:
                    state.stream = audio
                else:
                    state.stream = np.concatenate((state.stream, audio))

                # Check if continuous speech limit has been reached
                current_duration = len(state.stream) / sampling_rate
                if current_duration >= self.algo_options.max_continuous_speech_s:
                    return True
            state.buffer = None

            # Check if a pause has been detected by the VAD model
            if dur_vad < self.algo_options.speech_threshold and state.started_talking:
                return True
        return False

    def process_audio(self, audio: tuple[int, np.ndarray], state: AppState) -> None:
        """
        Processes an incoming audio frame.

        Appends the frame to the buffer, runs pause detection on the buffer,
        and updates the application state.

        Args:
            audio: A tuple containing the sample rate and the audio frame data.
            state: The current application state to update.
        """
        frame_rate, array = audio
        array = np.squeeze(array)
        if not state.sampling_rate:
            state.sampling_rate = frame_rate
        if state.buffer is None:
            state.buffer = array
        else:
            state.buffer = np.concatenate((state.buffer, array))

        pause_detected = self.determine_pause(
            state.buffer, state.sampling_rate, self.state
        )
        state.pause_detected = pause_detected

    def receive(self, frame: tuple[int, np.ndarray]) -> None:
        """
        Receives an audio frame from the stream.

        Processes the audio frame using `process_audio`. If a pause is detected,
        it sets the `event`. If interruption is enabled and a reply is ongoing,
        it closes the current generator and clears the processing queue.

        Args:
            frame: A tuple containing the sample rate and the audio frame data.
        """
        if self.state.responding and not self.can_interrupt:
            return
        self.process_audio(frame, self.state)
        if self.state.pause_detected:
            self.event.set()
            if self.can_interrupt and self.state.responding:
                self._close_generator()
                self.generator = None
            if self.can_interrupt:
                self.clear_queue()

    def _close_generator(self):
        """
        Safely closes the active reply generator (`self.generator`).

        Handles both synchronous and asynchronous generators, ensuring proper
        resource cleanup (e.g., calling `aclose()` or `close()`).
        Logs any errors during closure.
        """
        if self.generator is None:
            return

        try:
            if self.is_async:
                # For async generators, we need to call aclose()
                if hasattr(self.generator, "aclose"):
                    asyncio.run_coroutine_threadsafe(
                        cast(AsyncGenerator[EmitType, None], self.generator).aclose(),
                        self.loop,
                    ).result(timeout=1.0)  # Add timeout to prevent blocking
            else:
                # For sync generators, we can just exhaust it or close it
                if hasattr(self.generator, "close"):
                    cast(Generator[EmitType, None, None], self.generator).close()
        except Exception as e:
            logger.debug(f"Error closing generator: {e}")

    def reset(self):
        """
        Resets the handler state to its initial condition.

        Clears accumulated audio, resets state flags, closes any active generator,
        and clears the event flag. Also handles resetting argument state for phone mode.
        """
        super().reset()
        if self.phone_mode:
            self.args_set.set()
        self.generator = None
        self.event.clear()
        self.state = AppState()

    def trigger_response(self):
        """
        Manually triggers the response generation process.

        Sets the event flag, effectively simulating a pause detection.
        Initializes the stream buffer if it's empty.
        """
        self.event.set()
        if self.state.stream is None:
            self.state.stream = np.array([], dtype=np.int16)

    async def async_iterate(self, generator) -> EmitType:
        """Helper function to get the next item from an async generator."""
        return await anext(generator)

    def emit(self):
        """
        Produces the next output chunk from the reply generator (`fn`).

        This method is called repeatedly after a pause is detected (event is set).
        If the generator is not already running, it initializes it by calling `fn`
        with the accumulated audio and any required additional arguments.
        It then yields the next item from the generator. Handles both sync and
        async generators. Resets the state upon generator completion or error.

        Returns:
            The next output item from the generator, or None if no pause event
            has occurred or the generator is exhausted.

        Raises:
            Exception: Re-raises exceptions occurring within the `fn` generator.
        """
        if not self.event.is_set():
            return None
        else:
            if not self.generator:
                self.send_message_sync(create_message("log", "pause_detected"))
                if self._needs_additional_inputs and not self.phone_mode:
                    self.wait_for_args_sync()
                else:
                    self.latest_args = [None]
                    self.args_set.set()
                logger.debug("Creating generator")
                if self.state.stream is not None and self.state.stream.size > 0:
                    audio = cast(np.ndarray, self.state.stream).reshape(1, -1)
                else:
                    audio = np.array([[]], dtype=np.int16)
                if isinstance(self.latest_args[0], WebRTCData):
                    self.latest_args[0].audio = (self.state.sampling_rate, audio)
                else:
                    self.latest_args[0] = (self.state.sampling_rate, audio)
                self.generator = self.fn(*self.latest_args)  # type: ignore
                logger.debug("Latest args: %s", self.latest_args)
                self.state = self.state.new()
            self.state.responding = True
            try:
                if self.is_async:
                    output = asyncio.run_coroutine_threadsafe(
                        self.async_iterate(self.generator), self.loop
                    ).result()
                else:
                    output = next(self.generator)  # type: ignore
                audio, additional_outputs = split_output(output)
                if audio is not None:
                    self.send_message_sync(create_message("log", "response_starting"))
                    self.state.responded_audio = True
                if self.phone_mode:
                    if isinstance(additional_outputs, AdditionalOutputs):
                        self.latest_args = [None] + list(additional_outputs.args)
                return output
            except (StopIteration, StopAsyncIteration):
                if not self.state.responded_audio:
                    self.send_message_sync(create_message("log", "response_starting"))
                self.reset()
            except Exception as e:
                import traceback

                traceback.print_exc()
                logger.debug("Error in ReplyOnPause: %s", e)
                self.reset()
                raise e
