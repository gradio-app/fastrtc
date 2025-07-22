import json
from pathlib import Path

import cv2
import gradio as gr
from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastrtc import Stream, get_twilio_turn_credentials
from gradio.utils import get_space
from huggingface_hub import hf_hub_download
from pydantic import BaseModel, Field

try:
    from demo.object_detection.inference import YOLOv10
except (ImportError, ModuleNotFoundError):
    from inference import YOLOv10


cur_dir = Path(__file__).parent

model_file = hf_hub_download(
    repo_id="onnx-community/yolov10n", filename="onnx/model.onnx"
)

model = YOLOv10(model_file)


def detection(image, conf_threshold=0.3):
    image = cv2.resize(image, (model.input_width, model.input_height))
    print("conf_threshold", conf_threshold)
    new_image = model.detect_objects(image, conf_threshold)
    return cv2.resize(new_image, (500, 500))


stream = Stream(
    handler=detection,
    modality="video",
    mode="send-receive",
    additional_inputs=[gr.Slider(minimum=0, maximum=1, step=0.01, value=0.3)],
    additional_outputs=[
        gr.Markdown(
            """
            # Real-Time Video Processing
            **Powered by FastRTC**
            """,
            elem_classes=["title-section"],
        ),
        gr.HTML(
            """
            <div style="display: flex; flex-direction: column; align-items: center; gap: 12px; margin: 20px 0;">
                <!-- Top row with 2 buttons -->
                <div style="display: flex; justify-content: center; gap: 16px; flex-wrap: wrap;">
                    <a href="https://github.com/gradio-app/fastrtc" target="_blank" style="display: flex; align-items: center; gap: 8px; text-decoration: none; color: white; font-weight: 600; padding: 12px 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2); box-shadow: 0 4px 15px rgba(0,0,0,0.2); transition: all 0.3s ease; min-width: 0; flex-shrink: 1;">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                        <span>GitHub</span>
                    </a>
                    <a href="https://x.com/freddy_alfonso_/highlights" target="_blank" style="display: flex; align-items: center; gap: 8px; text-decoration: none; color: white; font-weight: 600; padding: 12px 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2); box-shadow: 0 4px 15px rgba(0,0,0,0.2); transition: all 0.3s ease; min-width: 0; flex-shrink: 1;">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.80l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                        <span>Twitter</span>
                    </a>
                </div>
                <!-- Bottom row with 1 centered button -->
                <div style="display: flex; justify-content: center;">
                    <a href="https://fastrtc.org/" target="_blank" style="display: flex; align-items: center; gap: 8px; text-decoration: none; color: white; font-weight: 600; padding: 12px 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2); box-shadow: 0 4px 15px rgba(0,0,0,0.2); transition: all 0.3s ease; min-width: 0; flex-shrink: 1;">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <span>Website</span>
                    </a>
                </div>
            </div>
            <style>
                .title-section h1 {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    text-align: center;
                    font-size: 2.5rem;
                    font-weight: 700;
                    letter-spacing: -0.02em;
                    margin: 1rem 0 0.5rem 0;
                    font-family: system-ui, -apple-system, sans-serif;
                }
                .title-section p {
                    text-align: center;
                    color: #64748b;
                    font-size: 1.1rem;
                    margin-top: -0.5rem;
                    font-weight: 400;
                }
                a[href*="github.com"]:hover,
                a[href*="x.com"]:hover,
                a[href*="fastrtc.org"]:hover {
                    background: linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%) !important;
                    transform: translateY(-3px);
                    box-shadow: 0 8px 25px rgba(0,0,0,0.25);
                }
            </style>
            """
        ),
    ],
    additional_outputs_handler=lambda _: _,
    rtc_configuration=get_twilio_turn_credentials() if get_space() else None,
    concurrency_limit=2 if get_space() else None,
)

app = FastAPI()

stream.mount(app)


@app.get("/")
async def _():
    rtc_config = get_twilio_turn_credentials() if get_space() else None
    html_content = open(cur_dir / "index.html").read()
    html_content = html_content.replace("__RTC_CONFIGURATION__", json.dumps(rtc_config))
    return HTMLResponse(content=html_content)


class InputData(BaseModel):
    webrtc_id: str
    conf_threshold: float = Field(ge=0, le=1)


@app.post("/input_hook")
async def _(data: InputData):
    stream.set_input(data.webrtc_id, data.conf_threshold)


if __name__ == "__main__":
    import os

    if (mode := os.getenv("MODE")) == "UI":
        stream.ui.launch(server_port=7860)
    elif mode == "PHONE":
        stream.fastphone(host="0.0.0.0", port=7860)
    else:
        import uvicorn

        uvicorn.run(app, host="0.0.0.0", port=7860)
