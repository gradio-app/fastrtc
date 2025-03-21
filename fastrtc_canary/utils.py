import numpy as np
import torch
from typing import Tuple


def detect_device() -> str:
    """Detect the best available device for inference."""
    if torch.cuda.is_available():
        return "cuda"
    elif hasattr(torch.backends, "mps") and torch.backends.mps.is_available():
        return "mps"
    else:
        return "cpu"


def load_audio(
    file_path: str, 
    target_sr: int = 16000
) -> Tuple[int, np.ndarray]:
    """
    Load an audio file and return it in the format expected by the STT model.
    
    Args:
        file_path: Path to the audio file
        target_sr: Target sample rate
        
    Returns:
        Tuple of (sample_rate, audio_data)
    """
    try:
        import librosa
        audio, sr = librosa.load(file_path, sr=target_sr)
        return (sr, audio)
    except ImportError:
        raise ImportError(
            "librosa is required for loading audio files. "
            "Install it with `pip install librosa`."
        )