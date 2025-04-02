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

A collection of Turn Taking Algorithms and Voice Activity Detection (VAD) models ready to use with FastRTC. Click on the tags below to find the model you're looking for!

<div class="tag-buttons">
  <button class="tag-button" data-tag="vad-model"><code>VAD Model</code></button>
  <button class="tag-button" data-tag="turn-taking-algorithm"><code>Turn-taking Algorithm</code></button>
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

## Gallery

<div class="grid cards" markdown>

-   :speaking_head:{ .lg .middle }:eyes:{ .lg .middle } __HumAware VAD__
{: data-tags="vad-model"}

    ---

    Description
    **HumAware-VAD** is a fine-tuned version of **Silero-VAD**, specifically trained to **distinguish humming from actual speech**.
    Standard VAD models often misclassify humming as speech, leading to inaccurate speech segmentation.
    **HumAware-VAD** improves detection accuracy in environments with background humming, music, and vocal sounds.  

    **Install Instructions**  
    ```sh
    pip install humaware-vad
    ```  
    **Use with FastRTC**  
    ```sh
    git clone https://github.com/CuriousMonkey7/HumAwareVad.git
    cd HumAwareVad
    python app.py
    ```

    <video width=98% src="https://github.com/user-attachments/assets/ea06a06f-d9e8-4203-a982-56326d160c9e" controls style="text-align: center"></video>  

    [:octicons-arrow-right-24: Demo](https://github.com/CuriousMonkey7/HumAwareVad/blob/main/app.py)  

    [:octicons-code-16: Repository](https://github.com/CuriousMonkey7/HumAwareVad/blob/main/humaware_vad/__init__.py)  

-   :speaking_head:{ .lg .middle }:eyes:{ .lg .middle } __Walkie Talkie__
{: data-tags="turn-taking-algorithm"}

    ---

    Description
    The user's turn ends when they finish a sentence with the word "over".
    For example, "Hello, how are you? Over." would send end the user's turn and trigger the response.
    This is intended as a simple reference implementation for how to implement a custom-turn-taking algorithm.

    Install Instructions
    ```bash
    pip install fastrtc-walkie-talkie
    ``` 

    <video width=98% src="https://github.com/user-attachments/assets/d94c1b91-5430-48b0-801d-15e17bdad2a0" controls style="text-align: center"></video>

    [:octicons-arrow-right-24: Demo](https://github.com/freddyaboulton/fastrtc-walkie-talkie/blob/main/scratch.py)
    
    [:octicons-code-16: Repository](https://github.com/freddyaboulton/fastrtc-walkie-talkie/blob/main/src/fastrtc_walkie_talkie/__init__.py)

</div>

## What is this for?

By default, FastRTC uses the `ReplyOnPause` class to handle turn-taking. However, you may want to tweak this behavior to better fit your use case.

In this gallery, you can find a collection of turn-taking algorithms and VAD models that you can use to customize the turn-taking behavior to your needs. Each card contains install and usage instructions.

## How to add your own Turn-taking Algorithm or VAD model

### Turn-taking Algorithm

1. Typically you will want to subclass the `ReplyOnPause` class and override the `determine_pause` method.

    ```python
    from fastrtc.reply_on_pause import ReplyOnPause, AppState
    class MyTurnTakingAlgorithm(ReplyOnPause):
        def determine_pause(self, audio: np.ndarray, sampling_rate: int, state: AppState) -> bool:
            return super().determine_pause(audio, sampling_rate, state)
    ```

2. Then package your class into a pip installable package and publish it to [pypi](https://pypi.org/).

3. Open a [PR](https://github.com/freddyaboulton/fastrtc-walkie-talkie/blob/main/src/fastrtc_walkie_talkie/__init__.py) to add your model to the gallery!

!!! tip "Example Implementation"
    See the [Walkie Talkie](https://github.com/freddyaboulton/fastrtc-walkie-talkie/) package for an example implementation of a turn-taking algorithm.

### VAD Model

1. Your model can be implemented in **any** framework you want but it must implement the `PauseDetectionModel` protocol.
    ```python
    ModelOptions: TypeAlias = Any


    class PauseDetectionModel(Protocol):
        def vad(
            self,
            audio: tuple[int, NDArray[np.int16] | NDArray[np.float32]],
            options: ModelOptions,
        ) -> tuple[float, list[AudioChunk]]: ...

        def warmup(
            self,
        ) -> None: ...
    ```

    * The `vad` method should take a numpy array of audio data and return a tuple of the form `(speech_duration, and list[AudioChunk])` where `speech_duration` is the duration of the human speech in the audio chunk and `AudioChunk` is a dictionary with the following fields: `(start, end)` where `start` and `end` are the start and end times of the human speech in the audio array.

    * The `audio` tuple should be of the form `(sample_rate, audio_array)` where `sample_rate` is the sample rate of the audio array and `audio_array` is a numpy array of the audio data. It can be of type `np.int16` or `np.float32`.

    * The `warmup` method is optional but recommended to warm up the model when the server starts.

2. Once you have your model implemented, you can use it in the `ReplyOnPause` class by passing in the model and any options you need.

    ```python
    from fastrtc import ReplyOnPause, Stream
    from your_model import YourModel

    def echo(audio):
        yield audio

    model = YourModel() # implement the PauseDetectionModel protocol
    reply_on_pause = ReplyOnPause(
        echo,
        model=model,
        options=YourModelOptions(),
    )
    stream = Stream(reply_on_pause, mode="send-receive", modality="audio")
    stream.ui.launch()
    ```

3. Open a [PR](https://github.com/freddyaboulton/fastrtc/edit/main/docs/turn_taking_gallery.md) to add your model to the gallery! Ideally you model package should be pip installable so other can try it out easily.

!!! tip "Package Naming Convention"
    It is recommended to name your package `fastrtc-<package-name>` so developers can easily find it on [pypi](https://pypi.org/search/?q=fastrtc-).
