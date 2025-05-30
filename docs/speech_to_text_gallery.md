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

A collection of Speech-to-Text models ready to use with FastRTC. Click on the tags below to find the STT model you're looking for!

!!! tip "Note"
    The model you want to use does not have to be in the gallery. This is just a collection of models with a common interface that are easy to "plug and play" into your FastRTC app. But You can use any model you want without having to do any special setup. Simply use it from your stream handler!


<div class="tag-buttons">
  <button class="tag-button" data-tag="pytorch"><code>pytorch</code></button>
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

-   :speaking_head:{ .lg .middle }:eyes:{ .lg .middle } distil-whisper-FastRTC
{: data-tags="pytorch"}

    ---

    Description: 
    [Distil-whisper](https://github.com/huggingface/distil-whisper) from Hugging Face wrapped in a pypi package for plug and play!

    Install Instructions
    ```python
    pip install distil-whisper-fastrtc
    ```
    Use it the same way you would the native fastRTC TTS model!


    [:octicons-arrow-right-24: Demo](https://huggingface.co/spaces/Codeblockz/llm-voice-chat/)
    
    [:octicons-code-16: Repository](https://github.com/Codeblockz/distil-whisper-FastRTC)

-   :speaking_head:{ .lg .middle }:eyes:{ .lg .middle } Kroko-ASR 
{: data-tags="sherpa-onnx"}

    ---

    Description
    [Kroko-ASR](https://huggingface.co/Banafo/Kroko-ASR) is a lightweight TTS model 

    Install Instructions
    ```python
    pip install fastrtc-kroko
    ```
    Check out the fastRTC-Kroko docs for examples!

    [:octicons-code-16: Repository](https://github.com/sgarg26/fastrtc-kroko)

-   :speaking_head:{ .lg .middle }:eyes:{ .lg .middle } fastrtc-whisper-cpp 
{: data-tags="whisper-cpp"}

    ---

    Description:
    [whisper.cpp](https://huggingface.co/ggerganov/whisper.cpp) is the ggml version of OpenAI's Whisper model. 

    Install Instructions
    ```python
    pip install fastrtc-whisper-cpp
    ```
    Check out the fastrtc-whisper-cpp docs for examples!

    [:octicons-code-16: Repository](https://github.com/mahimairaja/fastrtc-whisper-cpp)

-   :speaking_head:{ .lg .middle }:eyes:{ .lg .middle } __Your STT Model__
{: data-tags="pytorch"}

    ---

    Description

    Install Instructions

    Usage

    [:octicons-arrow-right-24: Demo](Your demo here)
    
    [:octicons-code-16: Repository](Code here)

</div>

## How to add your own STT model

1. Your model can be implemented in **any** framework you want but it must implement the `STTModel` protocol.

    ```python
    class STTModel(Protocol):
        def stt(self, audio: tuple[int, NDArray[np.int16 | np.float32]]) -> str: ...
    ```

    * The `stt` method should take in an audio tuple `(sample_rate, audio_array)` and return a string of the transcribed text.

    * The `audio` tuple should be of the form `(sample_rate, audio_array)` where `sample_rate` is the sample rate of the audio array and `audio_array` is a numpy array of the audio data. It can be of type `np.int16` or `np.float32`.

2. Once you have your model implemented, you can use it in your handler!

    ```python
    from fastrtc import Stream, AdditionalOutputs, ReplyOnPause
    from your_model import YourModel

    model = YourModel() # implement the STTModel protocol

    def echo(audio):
        text = model.stt(audio)
        yield AdditionalOutputs(text)

    stream = Stream(ReplyOnPause(echo), mode="send-receive", modality="audio",
                    additional_outputs=[gr.Textbox(label="Transcription")],
                    additional_outputs_handler=lambda old,new:old + new)
    stream.ui.launch()
    ```

3. Open a [PR](https://github.com/freddyaboulton/fastrtc/edit/main/docs/speech_to_text_gallery.md) to add your model to the gallery! Ideally your model package should be pip installable so others can try it out easily.
