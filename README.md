<div style='text-align: center; margin-bottom: 1rem; display: flex; justify-content: center; align-items: center;'>
    <h1 style='color: white; margin: 0;'>FastRTC Canary</h1>
    <img src='https://huggingface.co/datasets/freddyaboulton/bucket/resolve/main/fastrtc_logo_small.png'
         alt="FastRTC Logo" 
         style="margin-right: 10px;">
</div>

<div style="display: flex; flex-direction: row; justify-content: center">
<img style="display: block; padding-right: 5px; height: 20px;" alt="Static Badge" src="https://img.shields.io/pypi/v/fastrtc_canary"> 
<a href="https://github.com/mahimairaja/fastrtc_canary" target="_blank"><img alt="Static Badge" src="https://img.shields.io/badge/github-white?logo=github&logoColor=black"></a>
</div>

<h3 style='text-align: center'>
The Real-Time Communication Library for Python with Canary STT
</h3>

Turn any python function into a real-time audio and video stream over WebRTC or WebSockets.

## Installation

### Assume you have fastrtc installed - [fastrtc](https://github.com/freddyaboulton/fastrtc)

```bash
pip install fastrtc_canary
```


## Features

- 🎯 Direct integration with Nvidia's Canary STT model
- 🔄 Seamless compatibility with all FastRTC features
- 🚀 Real-time audio transcription
- 🔌 Drop-in replacement for FastRTC's STT components

## Available Models

- `nvidia/canary-1b`
- `nvidia/canary-1b-flash`

## Supported Languages

- `en` (English)
- `es` (Spanish)
- `fr` (French)
- `de` (German)

## Quick Start

```python
from multiprocessing import freeze_support
from fastrtc_canary import get_stt_model, load_audio

def main():
    # Load model
    model = get_stt_model(
        model="nvidia/canary-1b",
        lang="en",
    )

    # Load audio file (automatically resamples to 16kHz)
    audio = load_audio("test_file.wav")

    # Transcribe
    text = model.stt(audio)
    print(f"Transcription: {text}")

if __name__ == '__main__':
    freeze_support()
    main()
```


Note: This is additional package for fastrtc to support Nvidia's Canary STT models. If you want to use fastrtc, you can install it from [here](https://github.com/freddyaboulton/fastrtc)


## Documentation

For more detailed information about the base FastRTC package, visit [https://fastrtc.org](https://fastrtc.org)

## License

MIT

