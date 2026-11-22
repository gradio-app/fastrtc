"""Optional Orukeet demo: model integrity and FastRTC audio layout."""

import hashlib
from pathlib import Path
from types import SimpleNamespace
from unittest.mock import Mock

import numpy as np
import pytest

pytest.importorskip("onnx_asr")
from demo.orukeet import model as _model
from demo.orukeet.adapter import OrukeetSTT


@pytest.fixture
def model_cache(tmp_path: Path, monkeypatch: pytest.MonkeyPatch) -> Path:
    """Small pinned files exercise the downloader without fetching real weights."""
    folder = tmp_path / _model.SUBFOLDER
    folder.mkdir(parents=True)
    payload = b"verified fixture"
    hashes = {name: hashlib.sha256(payload).hexdigest() for name in _model.FILE_HASHES}
    for name in (*hashes, *_model.LICENSE_FILES):
        (folder / name).write_bytes(payload)
    monkeypatch.setattr(_model, "FILE_HASHES", hashes)
    return folder


def test_complete_cache_does_not_request_http(
    model_cache: Path, monkeypatch: pytest.MonkeyPatch
):
    monkeypatch.setattr(
        _model,
        "try_to_load_from_cache",
        lambda repo, name, **kwargs: str(model_cache / Path(name).name),
    )
    download = Mock(side_effect=AssertionError("complete cache must not request HTTP"))
    monkeypatch.setattr(_model, "snapshot_download", download)
    assert _model.download_model(local_files_only=True) == model_cache
    download.assert_not_called()


def test_missing_cache_downloads_pinned_required_files(model_cache: Path, monkeypatch):
    monkeypatch.setattr(_model, "try_to_load_from_cache", lambda *args, **kwargs: None)
    download = Mock(return_value=str(model_cache.parents[1]))
    monkeypatch.setattr(_model, "snapshot_download", download)
    assert _model.download_model(cache_dir="chosen-cache") == model_cache
    assert download.call_args.kwargs == {
        "repo_id": "oruk/orukeet",
        "revision": _model.REVISION,
        "cache_dir": "chosen-cache",
        "local_files_only": False,
        "allow_patterns": [
            f"{_model.SUBFOLDER}/{name}"
            for name in (*_model.FILE_HASHES, *_model.LICENSE_FILES)
        ],
    }


@pytest.mark.parametrize("filename", tuple(_model.FILE_HASHES))
def test_corruption_is_rejected_without_deleting_other_files(
    model_cache, monkeypatch, filename
):
    monkeypatch.setattr(
        _model,
        "try_to_load_from_cache",
        lambda repo, name, **kwargs: str(model_cache / Path(name).name),
    )
    (model_cache / filename).write_bytes(b"corrupt")
    with pytest.raises(ValueError, match="checksum mismatch"):
        _model.download_model(local_files_only=True)
    assert all((model_cache / name).exists() for name in _model.FILE_HASHES)
    (model_cache / filename).write_bytes(b"verified fixture")
    assert _model.download_model(local_files_only=True) == model_cache


def test_offline_miss_is_not_retried_online(monkeypatch):
    monkeypatch.setattr(_model, "try_to_load_from_cache", lambda *args, **kwargs: None)
    download = Mock(side_effect=FileNotFoundError("missing cached weights"))
    monkeypatch.setattr(_model, "snapshot_download", download)
    with pytest.raises(FileNotFoundError):
        _model.download_model(local_files_only=True)
    download.assert_called_once()
    assert download.call_args.kwargs["local_files_only"] is True


@pytest.mark.parametrize("dtype", [np.int16, np.float32])
def test_channel_first_stereo_downmix(dtype):
    adapter = OrukeetSTT(local_files_only=True)
    call = Mock(return_value="bonjour")
    adapter._runtime = SimpleNamespace(recognize=call)
    samples = np.array([[16384, -16384], [0, 0]], dtype=np.int16)
    if dtype == np.float32:
        samples = samples.astype(np.float32) / 32768.0
    assert adapter.stt((48000, samples)) == "bonjour"
    np.testing.assert_array_equal(call.call_args.args[0], np.array([0.25, -0.25]))
    assert call.call_args.args[1] == 48000


@pytest.mark.parametrize(
    "samples",
    [
        np.zeros((100, 2), dtype=np.int16),
        np.zeros(10, dtype=np.int32),
        np.array([np.nan], dtype=np.float32),
    ],
)
def test_invalid_audio_never_reaches_native_model(samples):
    adapter = OrukeetSTT(local_files_only=True)
    call = Mock(side_effect=AssertionError("invalid audio must not reach model"))
    adapter._runtime = SimpleNamespace(recognize=call)
    with pytest.raises(ValueError):
        adapter.stt((16000, samples))
    call.assert_not_called()


def test_empty_input_does_not_load_weights(monkeypatch):
    load = Mock(side_effect=AssertionError("empty audio must not load weights"))
    monkeypatch.setattr(_model.Model, "_load", load)
    adapter = OrukeetSTT(local_files_only=True)
    assert adapter.stt((16000, np.zeros(0, dtype=np.float32))) == ""
    adapter.close()
    with pytest.raises(RuntimeError, match="closed"):
        adapter.stt((16000, np.ones(10, dtype=np.float32)))


@pytest.mark.parametrize("rate", [12000, 96000])
def test_uncommon_rates_are_resampled_before_recognition(rate):
    adapter = OrukeetSTT(local_files_only=True)
    recognize = Mock(return_value="hello")
    adapter._runtime = SimpleNamespace(recognize=recognize)
    assert adapter.stt((rate, np.zeros(rate, dtype=np.float32))) == "hello"
    assert recognize.call_args.args[1] == 16000
    assert len(recognize.call_args.args[0]) == 16000
