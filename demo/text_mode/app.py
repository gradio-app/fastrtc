import os

import gradio as gr
import huggingface_hub
from fastrtc import (
    AdditionalOutputs,
    ReplyOnPause,
    Stream,
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
):
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
        model="meta-llama/Llama-3.2-3B-Instruct",
        messages=conversation,  # type: ignore
        temperature=1,
        top_p=0.1,
    )
    response = {"role": "assistant", "content": request.choices[0].message.content}

    conversation.append(response)
    conversations[data.webrtc_id] = conversation
    yield AdditionalOutputs(conversation)


cb = gr.Chatbot(type="messages")
stream = Stream(
    handler=ReplyOnPause(response),
    modality="audio",
    mode="send-receive",
    ui_args={"variant": "textbox", "title": "Talk or Type to Llama 4"},
    additional_outputs=[cb],
    additional_outputs_handler=lambda old, new: new,
)

if __name__ == "__main__":
    stream.ui.launch()
