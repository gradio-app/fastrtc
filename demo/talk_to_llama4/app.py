import json
import os
from pathlib import Path

import gradio as gr
import numpy as np
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.responses import HTMLResponse, StreamingResponse
from fastrtc import (
    AdditionalOutputs,
    ReplyOnPause,
    Stream,
    audio_to_bytes,
    get_cloudflare_turn_credentials_async,
    get_current_context,
    get_tts_model,
)
from groq import Groq
from numpy.typing import NDArray

curr_dir = Path(__file__).parent
load_dotenv()

tts_model = get_tts_model()
groq = Groq(api_key=os.getenv("GROQ_API_KEY"))


conversations: dict[str, list[dict[str, str]]] = {}


def response(user_audio: tuple[int, NDArray[np.int16]]):
    context = get_current_context()
    if context.webrtc_id not in conversations:
        conversations[context.webrtc_id] = [
            {
                "role": "system",
                "content": (
                    "You are a helpful assistant that can answer questions and help with tasks."
                    'Please return a short (that will be converted to audio using a text-to-speech model) response and long response to this question. They can be the same if appropriate. Please return in JSON format\n\n{"short":, "long"}\n\n'
                ),
            }
        ]
    messages = conversations[context.webrtc_id]

    transcription = groq.audio.transcriptions.create(
        file=("audio.wav", audio_to_bytes(user_audio)),
        model="distil-whisper-large-v3-en",
        response_format="verbose_json",
    )
    print(transcription.text)

    messages.append({"role": "user", "content": transcription.text})

    completion = groq.chat.completions.create(  # type: ignore
        model="meta-llama/llama-4-scout-17b-16e-instruct",
        messages=messages,  # type: ignore
        temperature=1,
        max_completion_tokens=1024,
        top_p=1,
        stream=False,
        response_format={"type": "json_object"},
        stop=None,
    )
    response = completion.choices[0].message.content
    response = json.loads(response)
    short_response = response["short"]
    long_response = response["long"]
    messages.append({"role": "assistant", "content": long_response})
    conversations[context.webrtc_id] = messages
    yield from tts_model.stream_tts_sync(short_response)
    yield AdditionalOutputs(messages)


stream = Stream(
    ReplyOnPause(response),
    modality="audio",
    mode="send-receive",
    additional_outputs=[gr.Chatbot(type="messages")],
    additional_outputs_handler=lambda old, new: new,
    rtc_configuration=get_cloudflare_turn_credentials_async,
)

app = FastAPI()
stream.mount(app)


@app.get("/")
async def _():
    rtc_config = await get_cloudflare_turn_credentials_async()
    html_content = (curr_dir / "index.html").read_text()
    html_content = html_content.replace("__RTC_CONFIGURATION__", json.dumps(rtc_config))
    return HTMLResponse(content=html_content)


@app.get("/outputs")
async def _(webrtc_id: str):
    async def output_stream():
        async for output in stream.output_stream(webrtc_id):
            state = output.args[0]
            for msg in state[-2:]:
                data = {
                    "message": msg,
                }
                yield f"event: output\ndata: {json.dumps(data)}\n\n"

    return StreamingResponse(output_stream(), media_type="text/event-stream")


if __name__ == "__main__":
    import os

    if (mode := os.getenv("MODE")) == "UI":
        stream.ui.launch(server_port=7860)
    elif mode == "PHONE":
        raise ValueError("Phone mode not supported")
    else:
        import uvicorn

        uvicorn.run(app, host="0.0.0.0", port=7860)
