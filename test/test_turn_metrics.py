import asyncio
from concurrent.futures import ThreadPoolExecutor
from dataclasses import FrozenInstanceError
from threading import Barrier
from unittest.mock import Mock

import numpy as np
import pytest
from fastrtc import (
    AdditionalOutputs,
    ReplyOnPause,
    ReplyOnStopWords,
    TurnMetrics,
    get_current_turn_id,
)
from fastrtc.turn_metrics import _TurnRecorder

AUDIO = (24000, np.zeros((1, 240), dtype=np.int16))


def make_handler(fn, events, **kwargs):
    model = Mock()
    model.vad.side_effect = [(0.5, []), (0.0, [])] * 5
    handler = ReplyOnPause(fn, model=model, on_turn_event=events.append, **kwargs)
    handler.send_message_sync = Mock()
    handler._clear_queue = Mock()
    return handler


def detect_turn(handler):
    frame = (24000, np.zeros(14400, dtype=np.int16))
    handler.receive(frame)
    handler.receive(frame)


def test_lifecycle_and_context(monkeypatch):
    clock = iter(range(100))
    monkeypatch.setattr("fastrtc.turn_metrics.monotonic", lambda: next(clock))
    events = []
    ids = []

    def reply(audio):
        ids.append(get_current_turn_id())
        yield None
        yield AdditionalOutputs("text")
        yield AUDIO
        yield AUDIO

    handler = make_handler(reply, events)
    detect_turn(handler)
    for _ in range(5):
        handler.emit()
        assert get_current_turn_id() is None
    assert [event.type for event in events] == [
        "speech_started",
        "turn_detected",
        "handler_started",
        "first_output_generated",
        "first_audio_generated",
        "handler_completed",
    ]
    final = events[-1].metrics
    assert ids == [final.turn_id]
    assert {event.metrics.turn_id for event in events} == {final.turn_id}
    assert final.outcome == "completed"
    assert (
        final.handler_ttfo_ms
        == (final.first_output_generated - final.handler_started) * 1000
    )
    assert (
        final.time_to_first_audio_ms
        == (final.first_audio_generated - final.turn_detected) * 1000
    )
    assert final.handler_scheduling_ms > 0
    assert final.handler_duration_ms > 0
    assert final.total_turn_ms > 0
    assert events[0].metrics.ended is None
    with pytest.raises(FrozenInstanceError):
        final.turn_id = "changed"


@pytest.mark.parametrize("during_creation", [False, True])
def test_failure_is_terminal_and_context_is_restored(during_creation):
    events = []

    def broken_generator(audio):
        raise ValueError("broken")
        yield

    def broken_factory(audio):
        raise ValueError("broken")

    handler = make_handler(
        broken_factory if during_creation else broken_generator, events
    )
    handler.trigger_response()
    with pytest.raises(ValueError, match="broken"):
        handler.emit()
    handler.reset()
    handler.shutdown()
    assert [event.type for event in events] == [
        "turn_detected",
        "handler_started",
        "failed",
    ]
    assert events[-1].metrics.outcome == "failed"
    assert get_current_turn_id() is None


def test_interruption_and_new_turn_have_distinct_ids():
    events = []

    def reply(audio):
        yield AUDIO
        yield AUDIO

    handler = make_handler(reply, events)
    detect_turn(handler)
    handler.emit()
    first_id = events[-1].metrics.turn_id
    detect_turn(handler)
    handler.emit()
    handler.emit()
    handler.emit()
    terminal = [event for event in events if event.metrics.ended is not None]
    assert [event.type for event in terminal] == ["interrupted", "handler_completed"]
    assert terminal[0].metrics.turn_id == first_id
    assert terminal[1].metrics.turn_id != first_id


def test_non_interruptible_turn_ignores_incoming_audio():
    events = []

    def reply(audio):
        yield AUDIO

    handler = make_handler(reply, events, can_interrupt=False)
    detect_turn(handler)
    handler.emit()
    detect_turn(handler)
    handler.emit()
    assert len({event.metrics.turn_id for event in events}) == 1
    assert events[-1].type == "handler_completed"


@pytest.mark.parametrize("action", ["reset", "shutdown"])
@pytest.mark.parametrize("active", [False, True])
def test_cancellation(action, active):
    events = []

    def reply(audio):
        yield AUDIO

    handler = make_handler(reply, events)
    handler.trigger_response()
    if active:
        handler.emit()
    getattr(handler, action)()
    getattr(handler, action)()
    assert [event.type for event in events].count("cancelled") == 1
    assert events[-1].metrics.outcome == "cancelled"


def test_empty_output_and_repeated_manual_turns():
    events = []

    def reply(audio):
        yield None
        yield (24000, np.array([], dtype=np.int16))

    handler = make_handler(reply, events)
    for _ in range(2):
        handler.trigger_response()
        handler.trigger_response()
        for _ in range(3):
            handler.emit()
    finals = [e.metrics for e in events if e.type == "handler_completed"]
    assert len(finals) == 2
    assert finals[0].turn_id != finals[1].turn_id
    assert all(m.speech_started is None for m in finals)
    assert all(m.first_audio_generated is None for m in finals)


def test_callback_failure_does_not_break_audio(caplog):
    def reply(audio):
        yield AUDIO

    def callback(event):
        raise RuntimeError("telemetry offline")

    handler = make_handler(reply, [])
    handler.on_turn_event = callback
    handler.trigger_response()
    assert handler.emit() is AUDIO
    assert handler.emit() is None
    assert "Turn event callback failed" in caplog.text


def test_disabled_observability(monkeypatch):
    def reply(audio):
        assert get_current_turn_id() is None
        yield AUDIO

    handler = make_handler(reply, [])
    handler.on_turn_event = None
    recorder = Mock(side_effect=AssertionError("unexpected allocation"))
    monkeypatch.setattr("fastrtc.reply_on_pause._TurnRecorder", recorder)
    detect_turn(handler)
    assert handler.emit() is AUDIO
    handler.emit()
    recorder.assert_not_called()


@pytest.mark.parametrize("stopwords", [False, True])
def test_copy_preserves_callback_without_sharing_turns(monkeypatch, stopwords):
    events = []
    handler = make_handler(lambda audio: iter([AUDIO]), events)
    if stopwords:
        monkeypatch.setattr("fastrtc.reply_on_stopwords.get_stt_model", Mock())
        handler = ReplyOnStopWords(
            handler.fn, ["hello"], model=handler.model, on_turn_event=events.append
        )
    handler.trigger_response()
    copied = handler.copy()
    assert copied.on_turn_event == handler.on_turn_event
    assert copied.state.turn is None
    assert copied._active_turn is None
    copied.trigger_response()
    assert copied.state.turn.metrics.turn_id != handler.state.turn.metrics.turn_id


async def test_async_generator_context_and_lifecycle():
    events = []
    ids = []

    async def reply(audio):
        ids.append(get_current_turn_id())
        await asyncio.sleep(0)
        yield AUDIO
        ids.append(get_current_turn_id())

    handler = make_handler(reply, events)
    handler._loop = asyncio.get_running_loop()
    handler.trigger_response()
    assert await asyncio.to_thread(handler.emit) is AUDIO
    await asyncio.to_thread(handler.emit)
    assert ids == [events[0].metrics.turn_id] * 2
    assert events[-1].type == "handler_completed"
    assert get_current_turn_id() is None


def test_async_callback_rejected():
    async def callback(event):
        pass

    with pytest.raises(TypeError, match="synchronous"):
        ReplyOnPause(lambda audio: iter([]), model=Mock(), on_turn_event=callback)


def test_late_output_cannot_reopen_terminal_turn():
    events = []
    recorder = _TurnRecorder(events.append)
    recorder.record("turn_detected")
    recorder.record("interrupted")
    recorder.record("first_audio_generated")
    recorder.record("handler_completed")
    assert [e.type for e in events] == ["turn_detected", "interrupted"]


def test_missing_measurements_are_none():
    metrics = TurnMetrics("test")
    assert metrics.handler_scheduling_ms is None
    assert metrics.handler_ttfo_ms is None
    assert metrics.handler_duration_ms is None
    assert metrics.time_to_first_audio_ms is None
    assert metrics.total_turn_ms is None


def test_metric_intervals():
    metrics = TurnMetrics(
        "test",
        speech_started=1.0,
        turn_detected=2.0,
        handler_started=2.25,
        first_output_generated=2.5,
        first_audio_generated=3.0,
        ended=4.0,
        outcome="completed",
    )
    assert metrics.handler_scheduling_ms == 250
    assert metrics.handler_ttfo_ms == 250
    assert metrics.handler_duration_ms == 1750
    assert metrics.time_to_first_audio_ms == 1000
    assert metrics.total_turn_ms == 2000


def test_additional_input_wait_precedes_handler_start():
    events = []

    def reply(audio, text):
        assert text == "ready"
        yield AUDIO

    handler = make_handler(reply, events)

    def provide_args():
        assert [e.type for e in events] == ["turn_detected"]
        handler.latest_args = [None, "ready"]

    handler.wait_for_args_sync = provide_args
    handler.trigger_response()
    assert handler.emit() is AUDIO
    handler.emit()
    assert events[-1].type == "handler_completed"


def test_startup_is_not_a_reply_turn():
    events = []
    handler = make_handler(
        lambda audio: iter([AUDIO]), events, startup_fn=lambda: iter([AUDIO])
    )
    handler.start_up()
    assert handler.emit() is AUDIO
    handler.emit()
    assert events == []


def test_concurrent_handlers_have_isolated_context():
    barrier = Barrier(2)

    def reply(audio):
        turn_id = get_current_turn_id()
        barrier.wait(timeout=5)
        assert get_current_turn_id() == turn_id
        yield AdditionalOutputs(turn_id)

    handlers = [make_handler(reply, []) for _ in range(2)]
    for handler in handlers:
        handler.trigger_response()
    with ThreadPoolExecutor(max_workers=2) as executor:
        results = list(executor.map(lambda handler: handler.emit(), handlers))
    assert results[0].args[0] != results[1].args[0]
    assert all(result.args[0] is not None for result in results)
    assert get_current_turn_id() is None


def test_concurrent_terminal_events_are_delivered_once():
    events = []
    recorder = _TurnRecorder(events.append)
    with ThreadPoolExecutor(max_workers=2) as executor:
        list(executor.map(recorder.record, ["handler_completed", "interrupted"]))
    assert len(events) == 1
    assert events[0].metrics.ended is not None
