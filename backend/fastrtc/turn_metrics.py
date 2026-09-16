"""Provider-independent observations of reply-handler turns."""

import logging
from collections.abc import Callable
from contextvars import ContextVar
from dataclasses import dataclass, replace
from threading import RLock
from time import monotonic
from typing import Literal
from uuid import uuid4

logger = logging.getLogger(__name__)

TurnEventType = Literal[
    "speech_started",
    "turn_detected",
    "handler_started",
    "first_output_generated",
    "first_audio_generated",
    "handler_completed",
    "interrupted",
    "failed",
    "cancelled",
]

_current_turn_id: ContextVar[str | None] = ContextVar("fastrtc_turn_id", default=None)


def get_current_turn_id() -> str | None:
    """Return the instrumented turn ID inside a reply function, or None."""
    return _current_turn_id.get()


@dataclass(frozen=True)
class TurnMetrics:
    """Immutable snapshot. Timestamps are process-local monotonic seconds.

    Missing observations and durations are None. Audio timing measures generation,
    not transport delivery or playback. Durations are in milliseconds.
    """

    turn_id: str
    speech_started: float | None = None
    turn_detected: float | None = None
    handler_started: float | None = None
    first_output_generated: float | None = None
    first_audio_generated: float | None = None
    ended: float | None = None
    outcome: Literal["completed", "interrupted", "failed", "cancelled"] | None = None

    @staticmethod
    def _elapsed(start: float | None, end: float | None) -> float | None:
        return None if start is None or end is None else (end - start) * 1000

    @property
    def handler_scheduling_ms(self) -> float | None:
        return self._elapsed(self.turn_detected, self.handler_started)

    @property
    def handler_ttfo_ms(self) -> float | None:
        return self._elapsed(self.handler_started, self.first_output_generated)

    @property
    def handler_duration_ms(self) -> float | None:
        return self._elapsed(self.handler_started, self.ended)

    @property
    def time_to_first_audio_ms(self) -> float | None:
        return self._elapsed(self.turn_detected, self.first_audio_generated)

    @property
    def total_turn_ms(self) -> float | None:
        return self._elapsed(self.turn_detected, self.ended)


@dataclass(frozen=True)
class TurnEvent:
    """One observed lifecycle transition and its metrics snapshot."""

    type: TurnEventType
    timestamp: float
    metrics: TurnMetrics


class _TurnRecorder:
    def __init__(self, callback: Callable[[TurnEvent], None]):
        self.callback = callback
        self.metrics = TurnMetrics(turn_id=uuid4().hex)
        self._lock = RLock()

    def record(self, event: TurnEventType) -> None:
        # Receive and emit may run on different threads. Terminal events win over
        # late output from a generator that was running when interrupted.
        with self._lock:
            if self.metrics.ended is not None:
                return
            outcomes: dict[
                str, Literal["completed", "interrupted", "failed", "cancelled"]
            ] = {
                "handler_completed": "completed",
                "interrupted": "interrupted",
                "failed": "failed",
                "cancelled": "cancelled",
            }
            now = monotonic()
            if event in outcomes:
                self.metrics = replace(self.metrics, ended=now, outcome=outcomes[event])
            else:
                if getattr(self.metrics, event) is not None:
                    return
                self.metrics = replace(self.metrics, **{event: now})
            try:
                self.callback(TurnEvent(event, now, self.metrics))
            except Exception:
                logger.exception("Turn event callback failed")
