import asyncio
import functools
import threading
import time
from unittest.mock import Mock

from fastrtc import ReplyOnPause
from fastrtc.utils import player_worker_decode


class DummyVad:
    def vad(self, *args, **kwargs):
        return 0.0, []

    def warmup(self):
        pass


class RecordingEvent:
    def __init__(self):
        self._set = False
        self.wait_timeouts: list[float] = []

    def is_set(self) -> bool:
        return self._set

    def set(self) -> None:
        self._set = True

    def clear(self) -> None:
        self._set = False

    def wait(self, timeout: float | None = None) -> bool:
        assert timeout is not None
        self.wait_timeouts.append(timeout)
        return False


class PauseOnWaitEvent(threading.Event):
    def __init__(self, delay: float = 0.01):
        super().__init__()
        self.delay = delay
        self.wait_elapsed: float | None = None

    def wait(self, timeout: float | None = None) -> bool:
        start = time.perf_counter()
        threading.Timer(self.delay, self.set).start()
        try:
            return super().wait(timeout)
        finally:
            self.wait_elapsed = time.perf_counter() - start


def reply(audio):
    yield audio


def make_handler(**kwargs) -> ReplyOnPause:
    handler = ReplyOnPause(reply, model=DummyVad(), **kwargs)
    handler.send_message_sync = Mock()
    return handler


def test_idle_emit_waits_instead_of_spinning():
    handler = make_handler()
    event = RecordingEvent()
    handler.event = event

    for _ in range(5):
        assert handler.emit() is None

    expected_timeout = handler.output_frame_size / handler.output_sample_rate
    assert event.wait_timeouts == [expected_timeout] * 5


def test_idle_wait_timeout_derives_from_sample_rate():
    handler = make_handler(output_sample_rate=16000)
    event = RecordingEvent()
    handler.event = event

    assert handler.output_frame_size == 320
    assert handler.emit() is None

    expected_timeout = handler.output_frame_size / handler.output_sample_rate
    assert expected_timeout == 0.02
    assert event.wait_timeouts == [expected_timeout]


def test_emit_does_not_wait_when_pause_is_already_set():
    handler = make_handler()
    event = RecordingEvent()
    event.set()
    handler.event = event

    output = handler.emit()

    assert output is not None
    assert event.wait_timeouts == []


def test_pause_during_idle_wait_is_not_dropped():
    handler = make_handler()
    # stretch the idle window so the 10 ms timer cannot race the 20 ms timeout
    handler.output_frame_size = 2 * handler.output_sample_rate
    event = PauseOnWaitEvent()
    handler.event = event

    output = handler.emit()

    assert output is not None
    assert event.wait_elapsed is not None
    assert event.wait_elapsed < 0.5


def test_player_worker_decode_does_not_spin_when_idle():
    handler = make_handler()
    calls = 0
    original_emit = handler.emit

    def counting_emit():
        nonlocal calls
        calls += 1
        return original_emit()

    handler.emit = counting_emit
    quit_ = threading.Event()
    timer = threading.Timer(0.1, quit_.set)
    timer.start()
    start = time.perf_counter()

    async def run_worker():
        loop = asyncio.get_running_loop()
        next_frame = functools.partial(loop.run_in_executor, None, handler.emit)
        await player_worker_decode(
            next_frame,
            asyncio.Queue(),
            quit_,
            lambda: None,
            None,
            False,
            24000,
            480,
        )

    try:
        asyncio.run(run_worker())
    finally:
        timer.join()
    elapsed = time.perf_counter() - start

    assert calls > 0
    assert calls / elapsed < 200
