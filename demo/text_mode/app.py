# /// script
# dependencies = [
#   "fastrtc[vad, stt]==0.0.26.rc1",
# ]
# ///
import os

import gradio as gr
import huggingface_hub
from fastrtc import (
    AdditionalOutputs,
    ReplyOnPause,
    WebRTC,
    WebRTCError,
    WebRTCData,
    get_stt_model,
)

client = huggingface_hub.InferenceClient(
    api_key=os.environ.get("HF_TOKEN"),
    provider="sambanova",
)
stt_model = get_stt_model()

conversations = {}


def response(
    data: WebRTCData,
    token: str | None = None,
    model: str = "meta-llama/Llama-3.2-3B-Instruct",
):
    if not token:
        raise WebRTCError("Please add your HF token.")
    if conversations.get(data.webrtc_id) is None:
        conversations[data.webrtc_id] = []

    conversation = conversations[data.webrtc_id]
    if data.audio is not None and data.audio[1].size > 0:
        user_audio_text = stt_model.stt(data.audio)
        conversation.append({"role": "user", "content": user_audio_text})
    else:
        conversation.append({"role": "user", "content": data.textbox})

    yield AdditionalOutputs(conversation)

    request = client.chat.completions.create(
        model=model,
        messages=conversation,  # type: ignore
        temperature=1,
        top_p=0.1,
    )
    response = {"role": "assistant", "content": request.choices[0].message.content}

    conversation.append(response)
    conversations[data.webrtc_id] = conversation
    yield AdditionalOutputs(conversation)


with gr.Blocks() as demo:
    with gr.Sidebar():
        token = gr.Textbox(placeholder="Place your HF token here", type="password")
        model = gr.Dropdown(choices=["meta-llama/Llama-3.2-3B-Instruct"])
    cb = gr.Chatbot(type="messages", height=600)
    webrtc = WebRTC(modality="audio", mode="send", variant="textbox")
    webrtc.stream(ReplyOnPause(response), inputs=[webrtc, token, model], outputs=[cb])
    webrtc.on_additional_outputs(lambda old, new: new, inputs=[cb], outputs=[cb])

if __name__ == "__main__":
    demo.launch(server_port=6980)
