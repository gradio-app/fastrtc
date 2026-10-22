import fractions

import numpy as np
import pytest
from av import AudioFrame
from fastrtc.tracks import StreamHandlerBase


@pytest.mark.parametrize("layout", ["mono", "stereo"])
@pytest.mark.parametrize(
    "source_rate,target_rate",
    [(48000, 16000), (48000, 24000), (16000, 48000), (44100, 16000), (48000, 48000)],
)
def test_input_resampling_preserves_frame_duration(source_rate, target_rate, layout):
    handler = StreamHandlerBase(input_sample_rate=target_rate, expected_layout=layout)
    source_samples = source_rate // 50
    target_samples = target_rate // 50
    channels = 1 if layout == "mono" else 2
    output = []

    for i in range(10):
        frame = AudioFrame.from_ndarray(
            np.zeros((1, source_samples * channels), dtype=np.int16),
            format="s16",
            layout=layout,
        )
        frame.sample_rate = source_rate
        frame.time_base = fractions.Fraction(1, source_rate)
        frame.pts = i * source_samples
        output.extend(handler.resample(frame))

    # Flush the resampler's filter delay and final buffered samples.
    output.extend(handler._resampler.resample(None))

    assert output
    assert all(frame.samples == target_samples for frame in output)
    assert sum(frame.samples for frame in output) == 10 * target_samples
    for i, frame in enumerate(output):
        assert frame.sample_rate == target_rate
        assert frame.layout.name == layout
        assert frame.format.name == "s16"
        assert frame.time_base == fractions.Fraction(1, target_rate)
        assert frame.pts == i * target_samples
