import numpy as np
from fastapi import FastAPI
from fastapi.responses import RedirectResponse
from fastrtc import ReplyOnPause, Stream, get_twilio_turn_credentials
from gradio.utils import get_space
from fastrtc import get_tts_model, audio_to_int16
import librosa

tts_client = get_tts_model()


def detection(audio: tuple[int, np.ndarray]):
    # Implement any iterator that yields audio
    # See "LLM Voice Chat" for a more complete example
    yield audio


def startup():
    for chunk in tts_client.stream_tts_sync("Welcome to the echo audio demo!"):
        sample_rate, audio_array = chunk
        audio_4800 = librosa.resample(audio_array, orig_sr=sample_rate, target_sr=48000)
        print("chunk", audio_4800.shape)
        yield (48000, audio_to_int16((48000, audio_4800)))


stream = Stream(
    handler=ReplyOnPause(detection, startup_fn=startup),
    modality="audio",
    mode="send-receive",
    ui_args={"title": "Echo Audio"},
)

app = FastAPI()

stream.mount(app)


@app.get("/")
async def index():
    return RedirectResponse(
        url="/ui" if not get_space() else "https://fastrtc-echo-audio.hf.space/ui/"
    )


if __name__ == "__main__":
    import os

    if (mode := os.getenv("MODE")) == "UI":
        stream.ui.launch(server_port=7860)
    elif mode == "PHONE":
        stream.fastphone(port=7860)
    else:
        import uvicorn

        uvicorn.run(app, host="0.0.0.0", port=7860)
