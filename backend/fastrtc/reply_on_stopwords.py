import asyncio
import logging
import re
from collections.abc import Callable
from typing import Literal

import numpy as np

from .reply_on_pause import (
    AlgoOptions,
    AppState,
    ModelOptions,
    PauseDetectionModel,
    ReplyFnGenerator,
    ReplyOnPause,
)
from .speech_to_text import get_stt_model, stt_for_chunks
from .utils import audio_to_float32, create_message

logger = logging.getLogger(__name__)


class ReplyOnStopWordsState(AppState):
    """Extends AppState to include state specific to stop word detection."""

    stop_word_detected: bool = False
    post_stop_word_buffer: np.ndarray | None = None
    started_talking_pre_stop_word: bool = False

    def new(self):
        """Creates a new instance of ReplyOnStopWordsState."""
        return ReplyOnStopWordsState()


class ReplyOnStopWords(ReplyOnPause):
    """
    A stream handler that extends ReplyOnPause to trigger based on stop words
    followed by a pause.

    This handler listens to the incoming audio stream, performs Speech-to-Text (STT)
    to detect predefined stop words. Once a stop word is detected, it waits for a
    subsequent pause in speech (using the VAD model) before triggering the reply
    function (`fn`) with the audio recorded *after* the stop word.

    Attributes:
        stop_words (list[str]): A list of words or phrases that trigger the pause detection.
        state (ReplyOnStopWordsState): The current state of the stop word and pause detection logic.
        stt_model: The Speech-to-Text model instance used for detecting stop words.
    """

    def __init__(
        self,
        fn: ReplyFnGenerator,
        stop_words: list[str],
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
        Initializes the ReplyOnStopWords handler.

        Args:
            fn: The generator function to execute upon stop word and pause detection.
                It receives `(sample_rate, audio_array)` and optionally `*args`.
            stop_words: A list of strings (words or phrases) to listen for.
                Detection is case-insensitive and ignores punctuation.
            startup_fn: An optional function to run once at the beginning.
            algo_options: Options for the pause detection algorithm (used after stop word).
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
            fn,
            algo_options=algo_options,
            startup_fn=startup_fn,
            model_options=model_options,
            can_interrupt=can_interrupt,
            expected_layout=expected_layout,
            output_sample_rate=output_sample_rate,
            output_frame_size=output_frame_size,
            input_sample_rate=input_sample_rate,
            model=model,
            needs_args=needs_args,
        )
        self.stop_words = stop_words
        self.state = ReplyOnStopWordsState()
        self.stt_model = get_stt_model("moonshine/base")

    def stop_word_detected(self, text: str) -> bool:
        """
        Checks if any of the configured stop words are present in the text.

        Performs a case-insensitive search, treating multi-word stop phrases
        correctly and ignoring basic punctuation.

        Args:
            text: The text transcribed from the audio.

        Returns:
            True if a stop word is found, False otherwise.
        """
        for stop_word in self.stop_words:
            stop_word = stop_word.lower().strip().split(" ")
            if bool(
                re.search(
                    r"\b" + r"\s+".join(map(re.escape, stop_word)) + r"[.,!?]*\b",
                    text.lower(),
                )
            ):
                logger.debug("Stop word detected: %s", stop_word)
                return True
        return False

    async def _send_stopword(
        self,
    ):
        """Internal async method to send a 'stopword' message via the channel."""
        if self.channel:
            self.channel.send(create_message("stopword", ""))
            logger.debug("Sent stopword")

    def send_stopword(self):
        """Sends a 'stopword' message asynchronously via the communication channel."""
        asyncio.run_coroutine_threadsafe(self._send_stopword(), self.loop)

    def determine_pause(  # type: ignore
        self, audio: np.ndarray, sampling_rate: int, state: ReplyOnStopWordsState
    ) -> bool:
        """
        Analyzes an audio chunk to detect stop words and subsequent pauses.

        Overrides the `ReplyOnPause.determine_pause` method.
        First, it performs STT on the audio buffer to detect stop words.
        Once a stop word is detected (`state.stop_word_detected` is True), it then
        uses the VAD model (similar to `ReplyOnPause`) to detect a pause in the
        audio *following* the stop word.

        Args:
            audio: The numpy array containing the audio chunk.
            sampling_rate: The sample rate of the audio chunk.
            state: The current application state (ReplyOnStopWordsState).

        Returns:
            True if a stop word has been detected and a subsequent pause
            satisfying the configured thresholds is detected, False otherwise.
        """
        import librosa

        duration = len(audio) / sampling_rate

        if duration >= self.algo_options.audio_chunk_duration:
            if not state.stop_word_detected:
                audio_f32 = audio_to_float32(audio)
                audio_rs = librosa.resample(
                    audio_f32, orig_sr=sampling_rate, target_sr=16000
                )
                if state.post_stop_word_buffer is None:
                    state.post_stop_word_buffer = audio_rs
                else:
                    state.post_stop_word_buffer = np.concatenate(
                        (state.post_stop_word_buffer, audio_rs)
                    )
                if len(state.post_stop_word_buffer) / 16000 > 2:
                    state.post_stop_word_buffer = state.post_stop_word_buffer[-32000:]
                dur_vad, chunks = self.model.vad(
                    (16000, state.post_stop_word_buffer),
                    self.model_options,
                )
                text = stt_for_chunks(
                    self.stt_model, (16000, state.post_stop_word_buffer), chunks
                )
                logger.debug(f"STT: {text}")
                state.stop_word_detected = self.stop_word_detected(text)
                if state.stop_word_detected:
                    logger.debug("Stop word detected")
                    self.send_stopword()
                state.buffer = None
            else:
                dur_vad, _ = self.model.vad((sampling_rate, audio), self.model_options)
                logger.debug("VAD duration: %s", dur_vad)
                if (
                    dur_vad > self.algo_options.started_talking_threshold
                    and not state.started_talking
                    and state.stop_word_detected
                ):
                    state.started_talking = True
                    logger.debug("Started talking")
                if state.started_talking:
                    if state.stream is None:
                        state.stream = audio
                    else:
                        state.stream = np.concatenate((state.stream, audio))
                state.buffer = None
                if (
                    dur_vad < self.algo_options.speech_threshold
                    and state.started_talking
                    and state.stop_word_detected
                ):
                    return True
        return False

    def reset(self):
        """
        Resets the handler state to its initial condition.

        Clears accumulated audio, resets state flags (including stop word state),
        closes any active generator, and clears the event flag.
        """
        super().reset()
        self.generator = None
        self.event.clear()
        self.state = ReplyOnStopWordsState()

    def copy(self):
        """Creates a new instance of ReplyOnStopWords with the same configuration."""
        return ReplyOnStopWords(
            self.fn,
            self.stop_words,
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
