# FastRTC POC
A simple POC for a fast real-time voice chat application using FastAPI and FastRTC by [rohanprichard](https://github.com/rohanprichard). I wanted to make one as an example with more production-ready languages, rather than just Gradio.

## Setup
1. Set your API keys in an `.env` file based on the `.env.example` file
2. Create a virtual environment and install the dependencies
    ```bash
    python3 -m venv env
    source env/bin/activate
    pip install -r requirements.txt
    ```

3. Run the server
    ```bash
    ./run.sh
    ```
4. Navigate into the frontend directory in another terminal
    ```bash
    cd frontend/fastrtc-demo
    ```
5. Run the frontend
    ```bash
    npm install
    npm run dev
    ```
6. Go to the URL and click the microphone icon to start chatting!

7. Reset chats by clicking the trash button on the bottom right

## Notes
You can choose to not install the requirements for TTS and STT by removing the `[tts, stt]` from the specifier in the `requirements.txt` file.

- The STT is currently using the ElevenLabs API.
- The LLM is currently using the OpenAI API.
- The TTS is currently using the ElevenLabs API.
- The VAD is currently using the Silero VAD model.
- You may need to install ffmpeg if you get errors in STT

The prompt can be changed in the `backend/server.py` file and modified as you like.

### Audio Parameters 

#### AlgoOptions

- **audio_chunk_duration**: Length of audio chunks in seconds. Smaller values allow for faster processing but may be less accurate.
- **started_talking_threshold**: If a chunk has more than this many seconds of speech, the system considers that the user has started talking.
- **speech_threshold**: After the user has started speaking, if a chunk has less than this many seconds of speech, the system considers that the user has paused.

#### SileroVadOptions

- **threshold**: Speech probability threshold (0.0-1.0). Values above this are considered speech. Higher values are more strict.
- **min_speech_duration_ms**: Speech segments shorter than this (in milliseconds) are filtered out.
- **min_silence_duration_ms**: The system waits for this duration of silence (in milliseconds) before considering speech to be finished.
- **speech_pad_ms**: Padding added to both ends of detected speech segments to prevent cutting off words.
- **max_speech_duration_s**: Maximum allowed duration for a speech segment in seconds. Prevents indefinite listening.

### Tuning Recommendations

- If the AI interrupts you too early:
  - Increase `min_silence_duration_ms`
  - Increase `speech_threshold`
  - Increase `speech_pad_ms`

- If the AI is slow to respond after you finish speaking:
  - Decrease `min_silence_duration_ms`
  - Decrease `speech_threshold`

- If the system fails to detect some speech:
  - Lower the `threshold` value
  - Decrease `started_talking_threshold`


## Credits:
Credit for the UI components goes to Shadcn, Aceternity UI and Kokonut UI.
