# /// script
# dependencies = [
#   "fastrtc[vad, stt]">=0.0.26",
#   "openai",
# ]
# ///


import gradio as gr
import huggingface_hub
from fastrtc import (
    AdditionalOutputs,
    ReplyOnPause,
    WebRTC,
    WebRTCData,
    WebRTCError,
    get_hf_turn_credentials,
    get_stt_model,
)
from gradio.utils import get_space
from openai import OpenAI

stt_model = get_stt_model()

conversations = {}


def response(
    data: WebRTCData,
    conversation: list[dict],
    token: str | None = None,
    model: str = "meta-llama/Llama-3.2-3B-Instruct",
    provider: str = "sambanova",
):
    print("conversation before", conversation)
    if not provider.startswith("http") and not token:
        raise WebRTCError("Please add your HF token.")

    if data.audio is not None and data.audio[1].size > 0:
        user_audio_text = stt_model.stt(data.audio)
        conversation.append({"role": "user", "content": user_audio_text})
    else:
        conversation.append({"role": "user", "content": data.textbox})

    yield AdditionalOutputs(conversation)

    if provider.startswith("http"):
        client = OpenAI(base_url=provider, api_key="ollama")
    else:
        client = huggingface_hub.InferenceClient(
            api_key=token,
            provider=provider,  # type: ignore
        )

    request = client.chat.completions.create(
        model=model,
        messages=conversation,  # type: ignore
        temperature=1,
        top_p=0.1,
    )
    response = {"role": "assistant", "content": request.choices[0].message.content}

    conversation.append(response)
    print("conversation after", conversation)
    yield AdditionalOutputs(conversation)


css = """
footer {
    display: none !important;
}
"""

providers = [
    "black-forest-labs",
    "cerebras",
    "cohere",
    "fal-ai",
    "fireworks-ai",
    "hf-inference",
    "hyperbolic",
    "nebius",
    "novita",
    "openai",
    "replicate",
    "sambanova",
    "together",
]


def hide_token(provider: str):
    if provider.startswith("http"):
        return gr.Textbox(visible=False)
    return gr.skip()


with gr.Blocks(css=css) as demo:
    gr.HTML(
        """
            <h1 style='text-align: center; display: flex; align-items: center; justify-content: center;'>
            <img src="https://huggingface.co/datasets/freddyaboulton/bucket/resolve/main/AV_Huggy.png" alt="Streaming Huggy" style="height: 50px; margin-right: 10px"> FastRTC Chat
            </h1>
        """
    )
    with gr.Sidebar():
        token = gr.Textbox(
            placeholder="Place your HF token here", type="password", label="HF Token"
        )
        model = gr.Dropdown(
            choices=["meta-llama/Llama-3.2-3B-Instruct"],
            allow_custom_value=True,
            label="Model",
        )
        provider = gr.Dropdown(
            label="Provider",
            choices=providers,
            value="sambanova",
            info="Select a hf-compatible provider or type the url of your server, e.g. http://127.0.0.1:11434/v1 for ollama",
            allow_custom_value=True,
        )
    provider.change(hide_token, inputs=[provider], outputs=[token])
    cb = gr.Chatbot(type="messages", height=600)
    webrtc = WebRTC(
        modality="audio",
        mode="send",
        variant="textbox",
        rtc_configuration=get_hf_turn_credentials if get_space() else None,
        server_rtc_configuration=get_hf_turn_credentials(ttl=3_600 * 24 * 30)
        if get_space()
        else None,
    )
    webrtc.stream(
        ReplyOnPause(response),  # type: ignore
        inputs=[webrtc, cb, token, model, provider],
        outputs=[cb],
        concurrency_limit=100,
    )
    webrtc.on_additional_outputs(
        lambda old, new: new, inputs=[cb], outputs=[cb], concurrency_limit=100
    )

if __name__ == "__main__":
    demo.launch(server_port=7860)
