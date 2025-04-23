import asyncio
import base64
import json
import os
import secrets
from pathlib import Path

import gradio as gr
import numpy as np
from dotenv import load_dotenv
from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastrtc import (
    AdditionalOutputs,
    AsyncStreamHandler,
    Stream,
    get_cloudflare_turn_credentials_async,
    wait_for_item,
)
from websockets.asyncio.client import connect

load_dotenv()

cur_dir = Path(__file__).parent

API_KEY = os.getenv("MODELSCOPE_API_KEY", "")
API_URL = "wss://dashscope.aliyuncs.com/api-ws/v1/realtime?model=qwen-omni-turbo-realtime-2025-03-26"
VOICES = ["Chelsie", "Serena", "Ethan", "Cherry"]
headers = {"Authorization": "Bearer " + API_KEY}


class QwenOmniHandler(AsyncStreamHandler):
    def __init__(
        self,
    ) -> None:
        super().__init__(
            expected_layout="mono",
            output_sample_rate=24_000,
            input_sample_rate=16_000,
        )
        self.connection = None
        self.output_queue = asyncio.Queue()

    def copy(self):
        return QwenOmniHandler()

    @staticmethod
    def msg_id() -> str:
        return f"event_{secrets.token_hex(10)}"

    async def start_up(
        self,
    ):
        """Connect to realtime API. Run forever in separate thread to keep connection open."""
        voice_id = "Serena"
        print("voice_id", voice_id)
        async with connect(
            API_URL,
            additional_headers=headers,
        ) as conn:
            self.client = conn
            await conn.send(
                json.dumps(
                    {
                        "event_id": self.msg_id(),
                        "type": "session.update",
                        "session": {
                            "modalities": [
                                "text",
                                "audio",
                            ],
                            "voice": voice_id,
                            "input_audio_format": "pcm16",
                        },
                    }
                )
            )
            self.connection = conn
            try:
                async for data in self.connection:
                    event = json.loads(data)
                    print("event", event["type"])
                    if "type" not in event:
                        continue
                    # Handle interruptions
                    if event["type"] == "input_audio_buffer.speech_started":
                        self.clear_queue()
                    if event["type"] == "response.audio.delta":
                        print("putting output")
                        await self.output_queue.put(
                            (
                                self.output_sample_rate,
                                np.frombuffer(
                                    base64.b64decode(event["delta"]), dtype=np.int16
                                ).reshape(1, -1),
                            ),
                        )
            except Exception as e:
                print("error", e)

    async def receive(self, frame: tuple[int, np.ndarray]) -> None:
        if not self.connection:
            return
        _, array = frame
        array = array.squeeze()
        audio_message = base64.b64encode(array.tobytes()).decode("utf-8")
        try:
            await self.connection.send(
                json.dumps(
                    {
                        "event_id": self.msg_id(),
                        "type": "input_audio_buffer.append",
                        "audio": audio_message,
                    }
                )
            )
        except Exception as e:
            print("error", e)

    async def emit(self) -> tuple[int, np.ndarray] | AdditionalOutputs | None:
        return await wait_for_item(self.output_queue)

    async def shutdown(self) -> None:
        if self.connection:
            await self.connection.close()
            self.connection = None


voice = gr.Dropdown(choices=VOICES, value=VOICES[0], type="value", label="Voice")
stream = Stream(
    QwenOmniHandler(),
    mode="send-receive",
    modality="audio",
    additional_inputs=[voice],
    additional_outputs=None,
    rtc_configuration=get_cloudflare_turn_credentials_async,
    concurrency_limit=20,
    time_limit=180,
)

app = FastAPI()


@app.post("/telephone/incoming")
async def handle_incoming_call(request: Request):
    """
    Handle incoming telephone calls (e.g., via Twilio).

    Generates TwiML instructions to connect the incoming call to the
    WebSocket handler (`/telephone/handler`) for audio streaming.

    Args:
        request: The FastAPI Request object for the incoming call webhook.

    Returns:
        An HTMLResponse containing the TwiML instructions as XML.
    """
    from twilio.twiml.voice_response import Connect, VoiceResponse

    if len(stream.connections) > (stream.concurrency_limit or 20):
        response = VoiceResponse()
        response.say("Qwen is busy please try again later!")
        return HTMLResponse(content=str(response), media_type="application/xml")

    response = VoiceResponse()
    response.say("Connecting to Qwen")
    connect = Connect()
    print("request.url.hostname", request.url.hostname)
    connect.stream(url=f"wss://{request.url.hostname}/telephone/handler")
    response.append(connect)
    response.say("The call has been disconnected.")
    return HTMLResponse(content=str(response), media_type="application/xml")


stream.mount(app)


@app.get("/")
async def _():
    html_content = """
    <!DOCTYPE html>
    <html>
    <head>
        <title>Qwen Phone Chat</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
                line-height: 1.6;
            }
            pre {
                background-color: #f5f5f5;
                padding: 15px;
                border-radius: 5px;
                overflow-x: auto;
            }
            h1 {
                color: #333;
            }
        </style>
    </head>
    <body>
        <h1>Qwen Phone Chat</h1>
        <p>Call +1 (877) 853-7936</p>
    </body>
    </html>
    """
    return HTMLResponse(content=html_content)


if __name__ == "__main__":
    #  stream.fastphone(host="0.0.0.0", port=7860)
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=7860)
