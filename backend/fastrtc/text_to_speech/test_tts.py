from fastrtc.text_to_speech.tts import get_tts_model


def test_tts_long_prompt():
    model = get_tts_model()
    prompt = "It may be that this communication will be considered as a madman's freak but at any rate it must be admitted that in its clearness and frankness it left nothing to be desired The serious part of it was that the Federal Government had undertaken to treat a sale by auction as a valid concession of these undiscovered territories Opinions on the matter were many Some readers saw in it only one of those prodigious outbursts of American humbug which would exceed the limits of puffism if the depths of human credulity were not unfathomable"

    for i, chunk in enumerate(model.stream_tts_sync(prompt)):
        print(f"Chunk {i}: {chunk[1].shape}")


if __name__ == "__main__":
    test_tts_long_prompt()
