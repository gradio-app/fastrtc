"""Run with python -m demo.orukeet.app from the repository root."""

import atexit

import gradio as gr
from fastrtc import AdditionalOutputs, ReplyOnPause, Stream

from .adapter import OrukeetSTT

model = OrukeetSTT()
atexit.register(model.close)


def transcribe(audio):
    yield AdditionalOutputs(model.stt(audio))


def transcribe_upload(audio):
    if audio is None:
        return ""
    rate, samples = audio
    # Gradio file uploads use (samples, channels); FastRTC uses channel-first.
    if samples.ndim == 2:
        samples = samples.T
    return model.stt((rate, samples))


transcript = gr.Textbox(label="Final transcript")
stream = Stream(
    ReplyOnPause(transcribe),
    modality="audio",
    mode="send",
    additional_outputs=[transcript],
    additional_outputs_handler=lambda _old, new: new,
    ui_args={"title": "Local Orukeet transcription"},
)
with stream.ui:
    gr.Markdown(
        "Pause to transcribe a complete utterance on this machine. "
        "The first request downloads model files from Hugging Face. "
        "Audio stays local; no API key is needed."
    )
    upload = gr.Audio(sources=["upload"], type="numpy", label="Or upload a recording")
    gr.Button("Transcribe recording").click(transcribe_upload, upload, transcript)

if __name__ == "__main__":
    stream.ui.launch(server_name="127.0.0.1")
