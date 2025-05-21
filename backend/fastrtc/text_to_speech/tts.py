import asyncio
import importlib.util
import re
from collections.abc import AsyncGenerator, Generator
from dataclasses import dataclass, field
from functools import lru_cache
from typing import Literal, Protocol, TypeVar

import numpy as np
from huggingface_hub import hf_hub_download
from numpy.typing import NDArray

from fastrtc.utils import async_aggregate_bytes_to_16bit


class TTSOptions:
    pass


T = TypeVar("T", bound=TTSOptions, contravariant=True)


class TTSModel(Protocol[T]):
    def tts(
        self, text: str, options: T | None = None
    ) -> tuple[int, NDArray[np.float32] | NDArray[np.int16]]: ...

    def stream_tts(
        self, text: str, options: T | None = None
    ) -> AsyncGenerator[tuple[int, NDArray[np.float32] | NDArray[np.int16]], None]: ...

    def stream_tts_sync(
        self, text: str, options: T | None = None
    ) -> Generator[tuple[int, NDArray[np.float32] | NDArray[np.int16]], None, None]: ...


@dataclass
class KokoroTTSOptions(TTSOptions):
    voice: str = "af_heart"
    speed: float = 1.0
    lang: str = "en-us"


@lru_cache
def get_tts_model(
    model: Literal["kokoro", "cartesia"] = "kokoro", **kwargs
) -> TTSModel:
    if model == "kokoro":
        m = KokoroTTSModel()
        m.tts("Hello, world!")
        return m
    elif model == "cartesia":
        m = CartesiaTTSModel(api_key=kwargs.get("cartesia_api_key", ""))
        return m
    else:
        raise ValueError(f"Invalid model: {model}")


class KokoroFixedBatchSize:
    # Source: https://github.com/thewh1teagle/kokoro-onnx/issues/115#issuecomment-2676625392
    def _split_phonemes(self, phonemes: str) -> list[str]:
        MAX_PHONEME_LENGTH = 510
        max_length = MAX_PHONEME_LENGTH - 1
        batched_phonemes = []
        while len(phonemes) > max_length:
            # Find best split point within limit
            split_idx = max_length

            # Try to find the last period before max_length
            period_idx = phonemes.rfind(".", 0, max_length)
            if period_idx != -1:
                split_idx = period_idx + 1  # Include period

            else:
                # Try other punctuation
                match = re.search(
                    r"[!?;,]", phonemes[:max_length][::-1]
                )  # Search backwards
                if match:
                    split_idx = max_length - match.start()

                else:
                    # Try last space
                    space_idx = phonemes.rfind(" ", 0, max_length)
                    if space_idx != -1:
                        split_idx = space_idx

            # If no good split point is found, force split at max_length
            chunk = phonemes[:split_idx].strip()
            batched_phonemes.append(chunk)

            # Move to the next part
            phonemes = phonemes[split_idx:].strip()

        # Add remaining phonemes
        if phonemes:
            batched_phonemes.append(phonemes)
        return batched_phonemes


class KokoroTTSModel(TTSModel):
    def __init__(self):
        from kokoro_onnx import Kokoro

        self.model = Kokoro(
            model_path=hf_hub_download("fastrtc/kokoro-onnx", "kokoro-v1.0.onnx"),
            voices_path=hf_hub_download("fastrtc/kokoro-onnx", "voices-v1.0.bin"),
        )

        self.model._split_phonemes = KokoroFixedBatchSize()._split_phonemes

    def tts(
        self, text: str, options: KokoroTTSOptions | None = None
    ) -> tuple[int, NDArray[np.float32]]:
        options = options or KokoroTTSOptions()
        a, b = self.model.create(
            text, voice=options.voice, speed=options.speed, lang=options.lang
        )
        return b, a

    async def stream_tts(
        self, text: str, options: KokoroTTSOptions | None = None
    ) -> AsyncGenerator[tuple[int, NDArray[np.float32]], None]:
        options = options or KokoroTTSOptions()

        sentences = re.split(r"(?<=[.!?])\s+", text.strip())

        for s_idx, sentence in enumerate(sentences):
            if not sentence.strip():
                continue

            chunk_idx = 0
            async for chunk in self.model.create_stream(
                sentence, voice=options.voice, speed=options.speed, lang=options.lang
            ):
                if s_idx != 0 and chunk_idx == 0:
                    yield chunk[1], np.zeros(chunk[1] // 7, dtype=np.float32)
                chunk_idx += 1
                yield chunk[1], chunk[0]

    def stream_tts_sync(
        self, text: str, options: KokoroTTSOptions | None = None
    ) -> Generator[tuple[int, NDArray[np.float32]], None, None]:
        loop = asyncio.new_event_loop()

        # Use the new loop to run the async generator
        iterator = self.stream_tts(text, options).__aiter__()
        while True:
            try:
                yield loop.run_until_complete(iterator.__anext__())
            except StopAsyncIteration:
                break


@dataclass
class CartesiaTTSOptions(TTSOptions):
    voice: str = "71a7ad14-091c-4e8e-a314-022ece01c121"
    language: str = "en"
    emotion: list[str] = field(default_factory=list)
    cartesia_version: str = "2024-06-10"
    model: str = "sonic-2"
    sample_rate: int = 22_050


class CartesiaTTSModel(TTSModel):
    def __init__(self, api_key: str):
        if importlib.util.find_spec("cartesia") is None:
            raise RuntimeError(
                "cartesia is not installed. Please install it using 'pip install cartesia'."
            )
        from cartesia import AsyncCartesia

        self.client = AsyncCartesia(api_key=api_key)

    async def stream_tts(
        self, text: str, options: CartesiaTTSOptions | None = None
    ) -> AsyncGenerator[tuple[int, NDArray[np.int16]], None]:
        options = options or CartesiaTTSOptions()

        sentences = re.split(r"(?<=[.!?])\s+", text.strip())

        for sentence in sentences:
            if not sentence.strip():
                continue
            async for output in async_aggregate_bytes_to_16bit(
                self.client.tts.bytes(
                    model_id="sonic-2",
                    transcript=sentence,
                    voice={"id": options.voice},  # type: ignore
                    language="en",
                    output_format={
                        "container": "raw",
                        "sample_rate": options.sample_rate,
                        "encoding": "pcm_s16le",
                    },
                )
            ):
                yield options.sample_rate, np.frombuffer(output, dtype=np.int16)

    def stream_tts_sync(
        self, text: str, options: CartesiaTTSOptions | None = None
    ) -> Generator[tuple[int, NDArray[np.int16]], None, None]:
        loop = asyncio.new_event_loop()

        iterator = self.stream_tts(text, options).__aiter__()
        while True:
            try:
                yield loop.run_until_complete(iterator.__anext__())
            except StopAsyncIteration:
                break

    def tts(
        self, text: str, options: CartesiaTTSOptions | None = None
    ) -> tuple[int, NDArray[np.int16]]:
        loop = asyncio.new_event_loop()
        buffer = np.array([], dtype=np.int16)

        options = options or CartesiaTTSOptions()

        iterator = self.stream_tts(text, options).__aiter__()
        while True:
            try:
                _, chunk = loop.run_until_complete(iterator.__anext__())
                buffer = np.concatenate([buffer, chunk])
            except StopAsyncIteration:
                break
        return options.sample_rate, buffer
