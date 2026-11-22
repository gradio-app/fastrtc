"""A local Orukeet implementation of FastRTC's STTModel protocol."""

import librosa
import numpy as np
from numpy.typing import NDArray

from .model import Model


class OrukeetSTT:
    """Final-text CPU recognition with automatic language detection.

    FastRTC audio is mono (samples,) or channel-first (channels, samples).
    Input is PCM16 or float32 in [-1, 1]. A complete cached model works offline.
    """

    def __init__(self, *, cache_dir: str | None = None, local_files_only: bool = False):
        self._runtime = Model(cache_dir=cache_dir, local_files_only=local_files_only)

    def stt(self, audio: tuple[int, NDArray[np.int16 | np.float32]]) -> str:
        rate, samples = audio
        if not isinstance(rate, int) or rate <= 0:
            raise ValueError("sample_rate must be a positive integer")
        if samples.dtype == np.int16:
            samples = samples.astype(np.float32) / 32768.0
        elif samples.dtype != np.float32:
            raise ValueError("Expected PCM16 or float32 samples")
        if samples.ndim == 2 and 1 <= samples.shape[0] <= 2:
            samples = samples.mean(axis=0, dtype=np.float32)
        elif samples.ndim != 1:
            raise ValueError("Expected mono or channel-first stereo audio")
        if not np.isfinite(samples).all():
            raise ValueError("Audio samples must be finite")
        samples = samples.astype(np.float32, copy=False)
        if samples.size and rate not in {
            8000,
            16000,
            22050,
            24000,
            32000,
            44100,
            48000,
        }:
            samples = librosa.resample(samples, orig_sr=rate, target_sr=16000)
            rate = 16000
        return self._runtime.recognize(samples, rate)

    def close(self) -> None:
        """Wait for active inference before releasing model memory."""
        self._runtime.close()
