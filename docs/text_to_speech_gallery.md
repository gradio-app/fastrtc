<style>
.tag-button {
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.2s ease;
}

.tag-button > code {
    color: var(--supernova);
}

.tag-button.active {
    opacity: 1;
}
</style>

A collection of Text-to-Speech models ready to use with FastRTC. Click on the tags below to find the TTS model you're looking for!
!!! tip "Note"
    The model you want to use does not have to be in the gallery. This is just a collection of models with a common interface that are easy to "plug and play" into your FastRTC app. But You can use any model you want without having to do any special setup. Simply use it from your stream handler!


<div class="tag-buttons">
  <button class="tag-button" data-tag="cpu"><code>cpu</code></button>
</div>

<script>
function filterCards() {
    const activeButtons = document.querySelectorAll('.tag-button.active');
    const selectedTags = Array.from(activeButtons).map(button => button.getAttribute('data-tag'));
    const cards = document.querySelectorAll('.grid.cards > ul > li > p[data-tags]');
    
    cards.forEach(card => {
        const cardTags = card.getAttribute('data-tags').split(',');
        const shouldShow = selectedTags.length === 0 || selectedTags.some(tag => cardTags.includes(tag));
        card.parentElement.style.display = shouldShow ? 'block' : 'none';
    });
}
document.querySelectorAll('.tag-button').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        filterCards();
    });
});
</script>


<div class="grid cards" markdown>

-   :speaking_head:{ .lg .middle }:eyes:{ .lg .middle } Orpheus.cpp
{: data-tags="cpu"}

    ---

    Description: 
    A llama.cpp port of [Orpheus](https://github.com/canopyai/Orpheus-TTS/tree/main) for fast lifelike speech synthesis on CPU!

    Install Instructions
    ```python
    pip install orpheus-cpp
    ```

    <video src="https://github.com/user-attachments/assets/54dfffc9-1981-4d12-b4d1-eb68ab27e5ad" controls style="text-align: center"></video>

    
    [:octicons-code-16: Repository]([Orpheus.cpp](https://github.com/freddyaboulton/orpheus-cpp))

-   :speaking_head:{ .lg .middle }:eyes:{ .lg .middle } __Your TTS Model__
{: data-tags="pytorch"}

    ---

    Description

    Install Instructions

    Usage

    [:octicons-arrow-right-24: Demo](Your demo here)
    
    [:octicons-code-16: Repository](Code here)

</div>

## How to add your own Text-to-Speech model

1. Your model can be implemented in **any** framework you want but it must implement the `TTSModel` protocol.

    ```python
    class TTSModel(Protocol):
        def tts(
            self, text: str, options: TTSOptions | None = None
        ) -> tuple[int, NDArray[np.float32 | np.int16]]: ...

        async def stream_tts(
            self, text: str, options: TTSOptions | None = None
        ) -> AsyncGenerator[tuple[int, NDArray[np.float32 | np.int16]], None]: ...

        def stream_tts_sync(
            self, text: str, options: TTSOptions | None = None
        ) -> Generator[tuple[int, NDArray[np.float32 | np.int16]], None, None]: ...
    ```

    * The `tts` methods should take in a string of the text to be spoken and an optional `TTSOptions`.

    * The `audio` tuple should be of the form `(sample_rate, audio_array)` where `sample_rate` is the sample rate of the audio array and `audio_array` is a numpy array of the audio data. It can be of type `np.int16` or `np.float32`.

2. Once you have your model implemented, you can use it in your handler!

    ```python
    from fastrtc import Stream, AdditionalOutputs, ReplyOnPause, get_stt_model
    from your_model import YourModel

    model = YourModel() # implement the TTSModel protocol
    options = YourTTSOptions() # implement the TTSOptions protocol
    stt_model = get_stt_model(model)

    def echo(audio):
        text = stt_model.tts(audio)
        for chunk in model.stream_tts(text, options):
            yield chunk

    stream = Stream(ReplyOnPause(echo), mode="send-receive", modality="audio",
                    additional_outputs=[gr.Textbox(label="Transcription")],
                    additional_outputs_handler=lambda old,new:old + new)
    stream.ui.launch()
    ```

3. Open a [PR](https://github.com/freddyaboulton/fastrtc/edit/main/docs/text_to_speech_gallery.md) to add your model to the gallery! Ideally your model package should be pip installable so other can try it out easily.