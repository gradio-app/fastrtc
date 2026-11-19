"""
CAMB TTS Integration Tests

Run directly: .venv/bin/python test/test_camb_tts.py
"""

import asyncio
import os
import subprocess
import sys
import tempfile
import wave

import numpy as np
from dotenv import load_dotenv

# Load API key from demo env
load_dotenv(
    os.path.join(os.path.dirname(__file__), "..", "demo", "camb_voice_agent", ".env")
)

from fastrtc.text_to_speech.tts import CambTTSModel, CambTTSOptions, get_tts_model

VOICE_ID = 156549
SAMPLE_RATE = 24000
results: list[tuple[str, bool, str]] = []


def play_audio(audio: np.ndarray, sample_rate: int = SAMPLE_RATE):
    """Write int16 PCM to a temp WAV and play with afplay."""
    with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as f:
        path = f.name
        with wave.open(f, "wb") as wf:
            wf.setnchannels(1)
            wf.setsampwidth(2)
            wf.setframerate(sample_rate)
            wf.writeframes(audio.tobytes())
    print(f"  Playing audio ({len(audio)} samples, {len(audio)/sample_rate:.2f}s)...")
    subprocess.run(["afplay", path], check=True)
    os.unlink(path)


def run_test(name: str, fn):
    print(f"\n{'='*60}")
    print(f"TEST: {name}")
    print("=" * 60)
    try:
        fn()
        results.append((name, True, ""))
        print(f"  PASS")
    except Exception as e:
        results.append((name, False, str(e)))
        print(f"  FAIL: {e}")


def make_model() -> CambTTSModel:
    api_key = os.environ.get("CAMB_API_KEY", "")
    assert api_key, "CAMB_API_KEY not set"
    return CambTTSModel(api_key=api_key)


# ---------------------------------------------------------------------------
# Synthesis tests
# ---------------------------------------------------------------------------


def test_tts_basic():
    """tts() — basic synthesis: short text, verify returns (24000, int16 ndarray)."""
    model = make_model()
    options = CambTTSOptions(voice_id=VOICE_ID)
    sr, audio = model.tts("Hello, this is a test of CAMB text to speech.", options)
    assert sr == SAMPLE_RATE, f"Expected sample rate {SAMPLE_RATE}, got {sr}"
    assert isinstance(audio, np.ndarray), f"Expected ndarray, got {type(audio)}"
    assert audio.dtype == np.int16, f"Expected int16, got {audio.dtype}"
    assert len(audio) > 0, "Audio is empty"
    print(f"  Sample rate: {sr}, shape: {audio.shape}, dtype: {audio.dtype}")
    play_audio(audio, sr)


def test_tts_multi_sentence():
    """tts() — multi-sentence: verify correct concatenation."""
    model = make_model()
    options = CambTTSOptions(voice_id=VOICE_ID)
    text = (
        "This is the first sentence. Here comes the second one! "
        "And finally, the third sentence?"
    )
    sr, audio = model.tts(text, options)
    assert sr == SAMPLE_RATE
    assert audio.dtype == np.int16
    assert len(audio) > 0
    print(f"  Multi-sentence audio: {audio.shape}, {len(audio)/sr:.2f}s")
    play_audio(audio, sr)


def test_stream_tts_sync():
    """stream_tts_sync() — streaming: collect chunks, verify, play."""
    model = make_model()
    options = CambTTSOptions(voice_id=VOICE_ID)
    chunks = []
    for i, (sr, chunk) in enumerate(
        model.stream_tts_sync("Streaming is working correctly.", options)
    ):
        assert sr == SAMPLE_RATE
        assert chunk.dtype == np.int16
        chunks.append(chunk)
        print(f"  Chunk {i}: shape={chunk.shape}")
    assert len(chunks) > 0, "No chunks received"
    combined = np.concatenate(chunks)
    print(f"  Total: {len(combined)} samples, {len(combined)/SAMPLE_RATE:.2f}s")
    play_audio(combined)


def test_stream_tts_sync_long():
    """stream_tts_sync() — long prompt to stress-test streaming."""
    model = make_model()
    options = CambTTSOptions(voice_id=VOICE_ID)
    text = (
        "It may be that this communication will be considered as something unusual, "
        "but at any rate it must be admitted that in its clearness and frankness it "
        "left nothing to be desired. The serious part of it was that the government "
        "had undertaken to treat the situation with the utmost care. Opinions on the "
        "matter were many and varied."
    )
    chunks = []
    for i, (sr, chunk) in enumerate(model.stream_tts_sync(text, options)):
        chunks.append(chunk)
        print(f"  Chunk {i}: shape={chunk.shape}")
    combined = np.concatenate(chunks)
    assert len(combined) > 0
    print(f"  Total: {len(combined)} samples, {len(combined)/SAMPLE_RATE:.2f}s")
    play_audio(combined)


def test_stream_tts_async():
    """stream_tts (async) — verify async generator works via asyncio.run()."""
    model = make_model()
    options = CambTTSOptions(voice_id=VOICE_ID)

    async def collect():
        chunks = []
        i = 0
        async for sr, chunk in model.stream_tts("Async streaming test.", options):
            assert sr == SAMPLE_RATE
            assert chunk.dtype == np.int16
            chunks.append(chunk)
            print(f"  Async chunk {i}: shape={chunk.shape}")
            i += 1
        return chunks

    chunks = asyncio.run(collect())
    assert len(chunks) > 0, "No async chunks received"
    combined = np.concatenate(chunks)
    print(f"  Total: {len(combined)} samples, {len(combined)/SAMPLE_RATE:.2f}s")
    play_audio(combined)


# ---------------------------------------------------------------------------
# Unit tests
# ---------------------------------------------------------------------------


def test_build_tts_kwargs_defaults():
    """_build_tts_kwargs() — default options produce correct kwargs."""
    model = make_model()
    options = CambTTSOptions()
    kwargs = model._build_tts_kwargs("test text", options)
    assert kwargs["text"] == "test text"
    assert kwargs["language"] == "en-us"
    assert kwargs["voice_id"] == 2681
    assert kwargs["speech_model"] == "mars-flash"
    assert kwargs["output_configuration"] == {"format": "pcm_s16le"}
    assert kwargs["voice_settings"] == {"speed": 1.0}
    assert "user_instructions" not in kwargs
    print(f"  kwargs: {kwargs}")


def test_build_tts_kwargs_custom():
    """_build_tts_kwargs() — custom options."""
    model = make_model()
    options = CambTTSOptions(voice_id=VOICE_ID, language="en-gb", speed=1.5)
    kwargs = model._build_tts_kwargs("hello", options)
    assert kwargs["voice_id"] == VOICE_ID
    assert kwargs["language"] == "en-gb"
    assert kwargs["voice_settings"] == {"speed": 1.5}
    print(f"  kwargs: {kwargs}")


def test_build_tts_kwargs_custom_format():
    """_build_tts_kwargs() — custom output format."""
    model = make_model()
    options = CambTTSOptions(output_format="wav")
    kwargs = model._build_tts_kwargs("hello", options)
    assert kwargs["output_configuration"] == {"format": "wav"}
    print(f"  kwargs: {kwargs}")


def test_build_tts_kwargs_mars_instruct():
    """_build_tts_kwargs() — mars-instruct with user_instructions."""
    model = make_model()
    options = CambTTSOptions(
        model="mars-instruct", user_instructions="Speak slowly and clearly."
    )
    kwargs = model._build_tts_kwargs("hello", options)
    assert kwargs["speech_model"] == "mars-instruct"
    assert kwargs["user_instructions"] == "Speak slowly and clearly."
    print(f"  kwargs: {kwargs}")

    # Also verify user_instructions is NOT included for non-instruct models
    options_flash = CambTTSOptions(
        model="mars-flash", user_instructions="Should be ignored."
    )
    kwargs_flash = model._build_tts_kwargs("hello", options_flash)
    assert "user_instructions" not in kwargs_flash
    print(f"  mars-flash kwargs (no user_instructions): {kwargs_flash}")


def test_camb_tts_options_defaults():
    """CambTTSOptions — verify default values."""
    opts = CambTTSOptions()
    assert opts.voice_id == 2681
    assert opts.language == "en-us"
    assert opts.model == "mars-flash"
    assert opts.speed == 1.0
    assert opts.output_format == "pcm_s16le"
    assert opts.user_instructions is None
    print(f"  Defaults: voice_id={opts.voice_id}, language={opts.language}, "
          f"model={opts.model}, speed={opts.speed}, "
          f"output_format={opts.output_format}, "
          f"user_instructions={opts.user_instructions}")


def test_custom_options():
    """Custom options — non-default voice_id, language, speed, format."""
    opts = CambTTSOptions(
        voice_id=VOICE_ID, language="en-gb", speed=0.8, output_format="wav"
    )
    assert opts.voice_id == VOICE_ID
    assert opts.language == "en-gb"
    assert opts.speed == 0.8
    assert opts.output_format == "wav"
    print(f"  Custom: voice_id={opts.voice_id}, language={opts.language}, "
          f"speed={opts.speed}, output_format={opts.output_format}")


def test_get_tts_model_camb():
    """get_tts_model('camb') — verify factory function works."""
    api_key = os.environ.get("CAMB_API_KEY", "")
    model = get_tts_model("camb", camb_api_key=api_key)
    assert isinstance(model, CambTTSModel)
    print(f"  Factory returned: {type(model).__name__}")


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

if __name__ == "__main__":
    tests = [
        ("tts() basic synthesis", test_tts_basic),
        ("tts() multi-sentence", test_tts_multi_sentence),
        ("stream_tts_sync() streaming", test_stream_tts_sync),
        ("stream_tts_sync() long prompt", test_stream_tts_sync_long),
        ("stream_tts async", test_stream_tts_async),
        ("_build_tts_kwargs() defaults", test_build_tts_kwargs_defaults),
        ("_build_tts_kwargs() custom", test_build_tts_kwargs_custom),
        ("_build_tts_kwargs() custom format", test_build_tts_kwargs_custom_format),
        ("_build_tts_kwargs() mars-instruct", test_build_tts_kwargs_mars_instruct),
        ("CambTTSOptions defaults", test_camb_tts_options_defaults),
        ("Custom options", test_custom_options),
        ("get_tts_model('camb') factory", test_get_tts_model_camb),
    ]

    for name, fn in tests:
        run_test(name, fn)

    # Summary
    print(f"\n{'='*60}")
    print("SUMMARY")
    print("=" * 60)
    passed = sum(1 for _, ok, _ in results if ok)
    failed = sum(1 for _, ok, _ in results if not ok)
    for name, ok, err in results:
        print(f"  {'[PASS]' if ok else '[FAIL]'} {name}")
    print(f"\n  {passed} passed, {failed} failed, {len(results)} total")
    sys.exit(1 if failed else 0)
