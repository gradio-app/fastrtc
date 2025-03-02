import os

import gradio as gr
import requests
from dotenv import load_dotenv
from fastrtc import AdditionalOutputs, ReplyOnPause, Stream, get_stt_model

load_dotenv()

stt_model = get_stt_model()

SYSTEM_PROMPT = """You are an intelligent voice-activated text editor assistant. Your purpose is to help users create and modify text documents through voice commands.

For each interaction:
1. You will receive the current state of a text document and a voice input from the user.
2. Determine if the input is:
   a) A command to modify the document (e.g., "delete the last line", "capitalize that")
   b) Content to be added to the document (e.g., "buy 12 eggs at the store")
   c) A modification to existing content (e.g., "actually make that 24" to change "12" to "24")
3. Return ONLY the new document state after the changes have been applied.

Example:

CURRENT DOCUMENT:

Meeting notes:
- Buy GPUs
- Meet with Joe

USER INPUT: Make that 100 GPUS

NEW DOCUMENT STATE:

Meeting notes:
- Buy 100 GPUs
- Meet with Joe

Example 2:

CURRENT DOCUMENT:

Project Proposal

USER INPUT: Make that a header

NEW DOCUMENT STATE:

# Project Proposal

When handling commands:
- Apply the requested changes precisely to the document
- Support operations like adding, deleting, modifying, and moving text
- Understand contextual references like "that", "the last line", "the second paragraph"

When handling content additions:
- Add the new text at the appropriate location (usually at the end or cursor position)
- Format it appropriately based on the document context
- If the user says to "add" or "insert" do not remove text that was already in the document.

When handling content modifications:
- Identify what part of the document the user is referring to
- Apply the requested change while preserving the rest of the content
- Be smart about contextual references (e.g., "make that 24" should know to replace a number)

NEVER include any text in the new document state that is not part of the user's input.
NEVER include the phrase "CURRENT DOCUMENT" in the new document state.
NEVER reword the user's input unless you are explicitly asked to do so.
"""


def edit(audio, current_document: str):
    prompt = stt_model.stt(audio)
    print(f"Prompt: {prompt}")

    # Construct the prompt for ollama
    full_prompt = (
        f"{SYSTEM_PROMPT}\n\n"
        f"User: CURRENT DOCUMENT:\n\n{current_document}\n\nUSER INPUT: {prompt}\n\n"
        f"Assistant:"
    )

    try:
        # Send request to ollama's API
        response = requests.post(
            "http://localhost:11434/api/generate",
            json={
                "model": "qwen2.5",
                "prompt": full_prompt,
                "stream": False,
                "max_tokens": 200,
            },
        )
        response.raise_for_status()  # Raise an exception for bad status codes

        # Parse the response
        doc = response.json()["response"]
        # Clean up the response to remove "Assistant:" and any extra whitespace
        doc = doc.strip().lstrip("Assistant:").strip()
        yield AdditionalOutputs(doc)

    except requests.RequestException as e:
        # Handle API errors gracefully
        error_message = "Error: Could not connect to ollama. Please ensure it's running and qwen2.5 is loaded."
        print(f"API Error: {e}")
        yield AdditionalOutputs(error_message)


doc = gr.Textbox(value="", label="Current Document")

stream = Stream(
    ReplyOnPause(edit),
    modality="audio",
    mode="send",
    additional_inputs=[doc],
    additional_outputs=[doc],
    additional_outputs_handler=lambda prev, current: current,
    ui_args={"title": "Voice Text Editor with FastRTC 🗣️"},
)

if __name__ == "__main__":
    if (mode := os.getenv("MODE")) == "UI":
        stream.ui.launch(server_port=7860)
    elif mode == "PHONE":
        stream.fastphone(host="0.0.0.0", port=7860)
    else:
        stream.ui.launch(server_port=7860)
