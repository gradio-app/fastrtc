from typing import Any, Protocol, TypeAlias

import numpy as np
from numpy.typing import NDArray

from ..utils import AudioChunk

ModelOptions: TypeAlias = Any


class PauseDetectionModel(Protocol):
    def vad(
        self,
        audio: tuple[int, NDArray[np.int16] | NDArray[np.float32]],
        options: ModelOptions,
    ) -> tuple[float, list[AudioChunk]]: ...

    def warmup(
        self,
    ) -> None: ...
