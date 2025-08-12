import gradio as gr
import numpy as np
import torch
from dotenv import load_dotenv
from fastrtc import (
    AdditionalOutputs,
    ReplyOnPause,
    Stream,
    WebRTCError,
    get_current_context,
    get_hf_turn_credentials,
    get_hf_turn_credentials_async,
    get_stt_model,
    get_tts_model,
)
from huggingface_hub import InferenceClient

load_dotenv()

stt_model = get_stt_model()
tts_model = get_tts_model()

conversations: dict[str, list[dict[str, str]]] = {}


def response(
    audio: tuple[int, np.ndarray],
    hf_token: str | None,
):
    if hf_token is None or hf_token == "":
        raise WebRTCError("HF Token is required")

    llm_client = InferenceClient(provider="groq", token=hf_token)

    context = get_current_context()
    if context.webrtc_id not in conversations:
        conversations[context.webrtc_id] = [
            {
                "role": "system",
                "content": (
                    "You are a helpful assistant that can have engaging conversations."
                    "Your responses must be very short and concise. No more than two sentences. "
                    "Reasoning: low"
                ),
            }
        ]

    messages = conversations[context.webrtc_id]

    transcription = stt_model.stt(audio)

    messages.append({"role": "user", "content": transcription})

    output = llm_client.chat.completions.create(  # type: ignore
        model="openai/gpt-oss-20b",
        messages=messages,  # type: ignore
        max_tokens=1024,
        stream=True,
    )

    output_text = ""
    for chunk in output:
        output_text += chunk.choices[0].delta.content or ""

    messages.append({"role": "assistant", "content": output_text})
    conversations[context.webrtc_id] = messages
    yield from tts_model.stream_tts_sync(output_text)
    yield AdditionalOutputs(messages)


chatbot = gr.Chatbot(label="Chatbot", type="messages")
token = gr.Textbox(
    label="HF Token",
    value="",
    type="password",
)
stream = Stream(
    modality="audio",
    mode="send-receive",
    handler=ReplyOnPause(response),
    server_rtc_configuration=get_hf_turn_credentials(ttl=600 * 10_000),
    rtc_configuration=get_hf_turn_credentials,
    additional_inputs=[token],
    additional_outputs=[chatbot],
    additional_outputs_handler=lambda old, new: new,
    ui_args={"title": "Talk To OpenAI GPT-OSS 20B (Powered by FastRTC ⚡️)"},
    time_limit=90,
    concurrency_limit=5,
)

stream.ui.launch()
