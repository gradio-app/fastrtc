import sys
from types import SimpleNamespace

import fastrtc.text_to_speech.tts as tts_module
import numpy as np
import pytest
from fastrtc.text_to_speech.tts import (
    CartesiaTTSModel,
    CartesiaTTSOptions,
    get_tts_model,
)


@pytest.mark.parametrize("model", ["kokoro"])
def test_tts_long_prompt(model):
    model = get_tts_model(model=model)
    prompt = "It may be that this communication will be considered as a madman's freak but at any rate it must be admitted that in its clearness and frankness it left nothing to be desired The serious part of it was that the Federal Government had undertaken to treat a sale by auction as a valid concession of these undiscovered territories Opinions on the matter were many Some readers saw in it only one of those prodigious outbursts of American humbug which would exceed the limits of puffism if the depths of human credulity were not unfathomable"

    for i, chunk in enumerate(model.stream_tts_sync(prompt)):
        print(f"Chunk {i}: {chunk[1].shape}")


@pytest.mark.asyncio
async def test_cartesia_uses_current_async_sdk(monkeypatch):
    class FakeResponse:
        async def iter_bytes(self):
            yield b"\x01\x00\x02\x00"

    class FakeTTS:
        def __init__(self):
            self.request = None

        async def generate(self, **kwargs):
            self.request = kwargs
            return FakeResponse()

    class FakeCartesia:
        def __init__(self, api_key):
            self.api_key = api_key
            self.tts = FakeTTS()

    monkeypatch.setattr(tts_module.importlib.util, "find_spec", lambda _: object())
    monkeypatch.setitem(
        sys.modules, "cartesia", SimpleNamespace(AsyncCartesia=FakeCartesia)
    )

    model = CartesiaTTSModel(api_key="test-key")
    options = CartesiaTTSOptions(model="sonic-3.5", language="fr", sample_rate=24_000)
    chunks = [chunk async for chunk in model.stream_tts("Bonjour.", options)]

    assert model.client.api_key == "test-key"
    assert model.client.tts.request == {
        "model_id": "sonic-3.5",
        "transcript": "Bonjour.",
        "voice": {"id": options.voice},
        "language": "fr",
        "output_format": {
            "container": "raw",
            "sample_rate": 24_000,
            "encoding": "pcm_s16le",
        },
    }
    assert len(chunks) == 1
    assert chunks[0][0] == 24_000
    np.testing.assert_array_equal(chunks[0][1], np.array([1, 2], dtype=np.int16))


def test_cartesia_default_model_is_supported():
    assert CartesiaTTSOptions().model == "sonic-3.6"
