from functools import lru_cache
from pathlib import Path
from typing import Literal, Protocol

import click
import librosa
import numpy as np
from numpy.typing import NDArray

curr_dir = Path(__file__).parent

STT_MODELS = Literal["nvidia/canary-1b", "nvidia/canary-1b-flash"]


class STTModel(Protocol):
    def stt(self, audio: tuple[int, NDArray[np.int16 | np.float32]]) -> str: ...


class CanarySTT(STTModel):
    """
    A Speech-to-Text model using Nvidia's Canary model.
    Implements the FastRTC STTModel protocol.

    Attributes:
        model_id: The Hugging Face model ID
        device: The device to run inference on ('cpu', 'cuda', 'mps')
        dtype: Data type for model weights (float16, float32)
    """
    MODEL_OPTIONS = Literal[
        "nvidia/canary-1b",
        "nvidia/canary-1b-flash",
    ]
    LANG_OPTIONS = Literal[
        "en",
        "es",
        "fr",
        "de"
    ]
    def __init__(
        self, 
        model: MODEL_OPTIONS = "nvidia/canary-1b",
        lang: LANG_OPTIONS = "en",
        beam_size: int = 1
    ):
        """
        Initialize the Canary STT model.

        Args:
            model: The model name or path to the Canary model. Defaults to "nvidia/canary-1b".
                    - Options: "nvidia/canary-1b", "nvidia/canary-1b-flash"
            lang: The language to transcribe. Defaults to "en". 
                    - Options: en, es, fr, de
            beam_size: The beam size for decoding. Defaults to 1.
        """
        try:
            self.lang = lang
            self.beam_size = beam_size

            from nemo.collections.asr.models import EncDecMultiTaskModel
            self._suppress_nemo_warnings()
            print('\n',click.style("INFO", fg="blue") + ":\t  Loading Canary model. This may take a moment...")
            self.model = EncDecMultiTaskModel.from_pretrained(model)
            
            decode_cfg = self.model.cfg.decoding
            decode_cfg.beam.beam_size = self.beam_size
            self.model.change_decoding_strategy(decode_cfg)
            
            # Suppressing warnings during transcription
            self._setup_transcribe_dataloader()
            self._monkey_patch_nemo_warnings()
            
            print(click.style("INFO", fg="blue") + ":\t  Canary model loaded successfully.")
            
        except (ImportError, ModuleNotFoundError):
            raise ImportError(
                "Install nemo_toolkit[asr] to use the Canary STT model."
            )

    def stt(self, audio: tuple[int, NDArray[np.int16 | np.float32]]) -> str:
        sr, audio_np = audio # type: ignore
        if audio_np.dtype == np.int16:
             # Convert int16 to float32 and normalize to [-1, 1]
            audio_np = audio_np.astype(np.float32) / 32768.0
        if sr != 16000:
            audio_np = librosa.resample(
                audio_np, orig_sr=sr, target_sr=16000
            )
        # Ensure correct shape
        if audio_np.ndim == 1:
            audio_np = audio_np.reshape(1, -1)
        # Normalize audio to [-1, 1] range 
        if np.max(np.abs(audio_np)) > 1.0:
            audio_np = audio_np / np.max(np.abs(audio_np))

        try:
            import tempfile
            import soundfile as sf
            with tempfile.NamedTemporaryFile(suffix='.wav', delete=True) as temp_file:
                sf.write(temp_file.name, audio_np.squeeze(0), 16000)
                result = self.model.transcribe(
                                        temp_file.name,
                                        source_lang=self.lang,
                                        target_lang=self.lang,
                                        task='asr'
                                    )[0]
                return result.text
        except Exception as e:
            print(click.style("ERROR", fg="red") + f":\t  Transcription failed: {str(e)}")
            return ""

    def _setup_transcribe_dataloader(self):
        """
            Configure the model to minimize warnings during transcription.
            The dataloader with trim_silence is not supported by the Canary model.
        """
        try:
            from nemo.collections.common.data.lhotse.dataloader import make_structured_with_schema_warnings
            import nemo.collections.common.data.lhotse.dataloader as lhotse_loader
            from omegaconf import OmegaConf, DictConfig

            original_make_structured = make_structured_with_schema_warnings

            def patched_make_structured(config):
                config_copy = OmegaConf.to_container(config, resolve=True)
                config_copy.pop("trim_silence", None)
                config = OmegaConf.create(config_copy)
                return original_make_structured(config)

            lhotse_loader.make_structured_with_schema_warnings = patched_make_structured
        except Exception as e:
            print(click.style("WARN", fg="yellow") + f":\t  Could not patch dataloader: {str(e)}")
            pass
    
    def _monkey_patch_nemo_warnings(self):
        """
            Function to directly patch the specific warning in NeMo's dataloader.py
            This is a workaround to avoid the warning about the non-tarred dataset and requested tokenization.
        """
        import logging
        import importlib.util
        if importlib.util.find_spec("nemo.collections.common.data.lhotse.dataloader"):
            try:
                nemo_logger = logging.getLogger('nemo')
                class VerySpecificFilter(logging.Filter):
                    def filter(self, record):
                        if hasattr(record, 'msg') and isinstance(record.msg, str):
                            if "non-tarred dataset and requested tokenization" in record.msg:
                                return False
                        return True
                nemo_logger.addFilter(VerySpecificFilter())

                for name in logging.root.manager.loggerDict:
                    if name.startswith('nemo'):
                        logging.getLogger(name).addFilter(VerySpecificFilter())

                if importlib.util.find_spec("nemo.collections.common.data.lhotse.dataloader"):
                    import nemo.collections.common.data.lhotse.dataloader as dataloader_module
                    if hasattr(dataloader_module, 'get_lhotse_dataloader_from_config'):
                        original_func = dataloader_module.get_lhotse_dataloader_from_config
                        def wrapped_func(*args, **kwargs):
                            for handler in logging.root.handlers:
                                handler.addFilter(VerySpecificFilter())
                            result = original_func(*args, **kwargs)
                            for handler in logging.root.handlers:
                                try:
                                    handler.removeFilter(VerySpecificFilter())
                                except:
                                    pass
                            return result
                        dataloader_module.get_lhotse_dataloader_from_config = wrapped_func
                return True
            except Exception as e:
                print(f"Failed to patch NeMo warnings: {str(e)}")
                return False
        return False
    

    def _suppress_nemo_warnings(self):
        """
            Suppress specific loggers with special focus on dataloader
        """
        import logging
        for logger_name in ['nemo', 'nemo.collections', 'nemo.collections.asr', 'nemo_logger']:
            try:
                logging.getLogger(logger_name).setLevel(logging.ERROR)
            except:
                pass
        

@lru_cache
def get_stt_model(
    model: STT_MODELS = "moonshine/base",
    lang: str = "en",
) -> STTModel:
    """
    Get a speech-to-text model.`    
    
    Args:
        model: The model to use. Defaults to "nvidia/canary-1b". Options: "nvidia/canary-1b", "nvidia/canary-1b-flash"
        [ Optional ] lang: The language to transcribe. Defaults to "en". Options: en, es, fr, de
    """
    import os
    os.environ["TOKENIZERS_PARALLELISM"] = "false"
    
    m = CanarySTT(model="nvidia/canary-1b", lang=lang)
    import soundfile as sf
    try:
        print(click.style("INFO", fg="green") + ":\t  Warming up Canary STT model.")
        audio, sr = sf.read(str(curr_dir / "test_file.wav"))
        m.stt((sr, audio))
        
        print(click.style("INFO", fg="green") + ":\t  Canary STT model warmed up.")
    except Exception as e:
        print(click.style("WARN", fg="yellow") + f":\t  Could not warm up Canary model: {str(e)}")
    return m

