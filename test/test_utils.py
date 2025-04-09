import numpy as np
import pytest
from fastrtc.utils import audio_to_float32, audio_to_int16


def test_audio_to_float32_valid_int16():
    audio = np.array([-32768, 0, 32767], dtype=np.int16)
    expected = np.array([-1.0, 0.0, 32767 / 32768.0], dtype=np.float32)
    result = audio_to_float32(audio)
    np.testing.assert_array_almost_equal(result, expected)


def test_audio_to_float32_valid_float32():
    audio = np.array([-1.0, 0.0, 1.0], dtype=np.float32)
    result = audio_to_float32(audio)
    np.testing.assert_array_equal(result, audio)


def test_audio_to_float32_empty_array():
    audio = np.array([], dtype=np.int16)
    result = audio_to_float32(audio)
    np.testing.assert_array_equal(result, np.array([], dtype=np.float32))


def test_audio_to_float32_invalid_dtype():
    audio = np.array([1, 2, 3], dtype=np.int32)
    with pytest.raises(TypeError, match="Unsupported audio data type"):
        audio_to_float32(audio)  # type: ignore


def test_audio_to_int16_valid_float32():
    audio = np.array([-1.0, 0.0, 1.0], dtype=np.float32)
    expected = np.array([-32767, 0, 32767], dtype=np.int16)
    result = audio_to_int16(audio)
    np.testing.assert_array_equal(result, expected)


def test_audio_to_int16_valid_int16():
    audio = np.array([-32768, 0, 32767], dtype=np.int16)
    result = audio_to_int16(audio)
    np.testing.assert_array_equal(result, audio)


def test_audio_to_int16_empty_array():
    audio = np.array([], dtype=np.float32)
    result = audio_to_int16(audio)
    np.testing.assert_array_equal(result, np.array([], dtype=np.int16))


def test_audio_to_int16_invalid_dtype():
    audio = np.array([1, 2, 3], dtype=np.int32)
    with pytest.raises(TypeError, match="Unsupported audio data type"):
        audio_to_int16(audio)  # type: ignore


def test_legacy_arguments():
    result = audio_to_float32((16000, np.zeros(10, dtype=np.int16)))
    np.testing.assert_array_equal(result, np.zeros(10, dtype=np.float32))

    result = audio_to_int16((16000, np.zeros(10, dtype=np.float32)))
    np.testing.assert_array_equal(result, np.zeros(10, dtype=np.int16))
