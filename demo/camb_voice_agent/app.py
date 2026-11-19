import json
import os
import time
from pathlib import Path

import gradio as gr
import numpy as np
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.responses import HTMLResponse, StreamingResponse
from fastrtc import (
    AdditionalOutputs,
    CambTTSOptions,
    ReplyOnPause,
    Stream,
)
from fastrtc.text_to_speech.tts import CambTTSModel
from fastrtc.utils import audio_to_bytes
from openai import OpenAI
from pydantic import BaseModel

load_dotenv()

openai_client = OpenAI()
tts_model = CambTTSModel(api_key=os.environ["CAMB_API_KEY"])
tts_options = CambTTSOptions(voice_id=int(os.environ.get("CAMB_VOICE_ID", "156549")))

curr_dir = Path(__file__).parent


def response(
    audio: tuple[int, np.ndarray],
    chatbot: list[dict] | None = None,
):
    chatbot = chatbot or []
    messages = [{"role": d["role"], "content": d["content"]} for d in chatbot]

    prompt = openai_client.audio.transcriptions.create(
        file=("audio-file.mp3", audio_to_bytes(audio)),
        model="whisper-1",
    ).text
    chatbot.append({"role": "user", "content": prompt})
    yield AdditionalOutputs(chatbot)

    messages.append({"role": "user", "content": prompt})
    llm_response = openai_client.chat.completions.create(
        model="gpt-4o-mini",
        max_tokens=512,
        messages=messages,
    )
    response_text = llm_response.choices[0].message.content or ""
    chatbot.append({"role": "assistant", "content": response_text})

    start = time.time()
    print("starting tts", start)
    for i, chunk in enumerate(tts_model.stream_tts_sync(response_text, tts_options)):
        print("chunk", i, time.time() - start)
        yield chunk
    print("finished tts", time.time() - start)
    yield AdditionalOutputs(chatbot)


chatbot = gr.Chatbot(type="messages")
stream = Stream(
    modality="audio",
    mode="send-receive",
    handler=ReplyOnPause(response),
    additional_outputs_handler=lambda a, b: b,
    additional_inputs=[chatbot],
    additional_outputs=[chatbot],
)


class Message(BaseModel):
    role: str
    content: str


class InputData(BaseModel):
    webrtc_id: str
    chatbot: list[Message]


app = FastAPI()
stream.mount(app)


@app.get("/")
async def _():
    html_content = (curr_dir / "index.html").read_text()
    html_content = html_content.replace("__RTC_CONFIGURATION__", json.dumps(None))
    return HTMLResponse(content=html_content, status_code=200)


@app.post("/input_hook")
async def _(body: InputData):
    stream.set_input(body.webrtc_id, body.model_dump()["chatbot"])
    return {"status": "ok"}


@app.get("/outputs")
def _(webrtc_id: str):
    async def output_stream():
        async for output in stream.output_stream(webrtc_id):
            chatbot = output.args[0]
            yield f"event: output\ndata: {json.dumps(chatbot[-1])}\n\n"

    return StreamingResponse(output_stream(), media_type="text/event-stream")


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=7860)
