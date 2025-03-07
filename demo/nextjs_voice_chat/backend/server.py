import fastapi
from fastapi.responses import FileResponse
from fastrtc import ReplyOnPause, Stream, AlgoOptions, SileroVadOptions
from fastrtc.utils import audio_to_bytes
from openai import OpenAI
import logging
import time
from fastapi.middleware.cors import CORSMiddleware
from elevenlabs import VoiceSettings, stream
from elevenlabs.client import ElevenLabs
import numpy as np
import io

from .env import LLM_API_KEY, ELEVENLABS_API_KEY


sys_prompt = """
You are a helpful assistant. You are witty, engaging and fun. You love being interactive with the user. 
You also can add minimalistic utterances like 'uh-huh' or 'mm-hmm' to the conversation to make it more natural. However, only vocalization are allowed, no actions or other non-vocal sounds.
Begin a conversation with a self-deprecating joke like 'I'm not sure if I'm ready for this...' or 'I bet you already regret clicking that button...'
"""

messages = [{"role": "system", "content": sys_prompt}]

openai_client = OpenAI(
    api_key=LLM_API_KEY
)

elevenlabs_client = ElevenLabs(api_key=ELEVENLABS_API_KEY)

logging.basicConfig(level=logging.INFO)

def echo(audio):

    stt_time = time.time()

    logging.info("Performing STT")

    transcription = elevenlabs_client.speech_to_text.convert(
        file=audio_to_bytes(audio),
        model_id="scribe_v1",
        tag_audio_events=False,
        language_code="eng",
        diarize=False,
    )
    prompt = transcription.text
    if prompt == "":
        logging.info("STT returned empty string")
        return
    logging.info(f"STT response: {prompt}")

    messages.append({"role": "user", "content": prompt})

    logging.info(f"STT took {time.time() - stt_time} seconds")

    llm_time = time.time()
    
    def text_stream():
        global full_response  
        full_response = ""
        
        response = openai_client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=messages,
            max_tokens=200,
            stream=True
        )
        
        for chunk in response:
            if chunk.choices[0].finish_reason == "stop":
                break
            if chunk.choices[0].delta.content:
                full_response += chunk.choices[0].delta.content
                yield chunk.choices[0].delta.content

    audio_stream = elevenlabs_client.generate(
        text=text_stream(),
        voice="Rachel",  # Cassidy is also really good
        voice_settings=VoiceSettings(
            similarity_boost=0.9,
            stability=0.6,
            style=0.4,
            speed=1
        ),
        model="eleven_multilingual_v2",
        output_format="pcm_24000",
        stream=True
    )

    for audio_chunk in audio_stream:
        audio_array = np.frombuffer(audio_chunk, dtype=np.int16).astype(np.float32) / 32768.0
        yield (24000, audio_array)

    messages.append({"role": "assistant", "content": full_response + " "})
    logging.info(f"LLM response: {full_response}")
    logging.info(f"LLM took {time.time() - llm_time} seconds")
        

stream = Stream(ReplyOnPause(echo,
            algo_options=AlgoOptions(
                audio_chunk_duration=0.5,
                started_talking_threshold=0.1,
                speech_threshold=0.03
            ),
            model_options=SileroVadOptions(
                threshold=0.75,
                min_speech_duration_ms=250,
                min_silence_duration_ms=1500,
                speech_pad_ms=400,
                max_speech_duration_s=15
            )), 
            modality="audio", 
            mode="send-receive"
        )

app = fastapi.FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

stream.mount(app)

@app.get("/reset")
async def reset():
    global messages
    logging.info("Resetting chat")
    messages = [{"role": "system", "content": sys_prompt}]
    return {"status": "success"}