import numpy as np
from fastrtc import AlgoOptions, ReplyOnPause


class FakeVad:
    def vad(self, audio, options):
        return 0.0, []

    def warmup(self):
        pass


def echo(audio):
    yield audio


class EndsOnAnyPause(ReplyOnPause):
    def determine_pause(self, audio: np.ndarray, sampling_rate: int, state) -> bool:
        return True


def test_copy_keeps_the_subclass_and_its_configuration():
    options = AlgoOptions(audio_chunk_duration=0.5)
    model = FakeVad()
    handler = EndsOnAnyPause(
        echo,
        algo_options=options,
        can_interrupt=False,
        input_sample_rate=16000,
        model=model,
    )

    copy = handler.copy()

    assert type(copy) is EndsOnAnyPause
    assert copy is not handler
    assert copy.state is not handler.state
    assert copy.fn is echo
    assert copy.algo_options is options
    assert copy.can_interrupt is False
    assert copy.input_sample_rate == 16000
    assert copy.model is model


def test_copy_of_plain_reply_on_pause_is_unchanged():
    handler = ReplyOnPause(echo, model=FakeVad())

    assert type(handler.copy()) is ReplyOnPause
