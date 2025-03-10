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
    [Distil-whisper](https://github.com/huggingface/distil-whisper) from Hugging Face wraped in a pypi package for plug and play!

    Install Instructions
    ```python
    pip install distil-whisper-fastrtc
    ```
    Use it the same way you would the native fastRTC TTS model!


    [:octicons-arrow-right-24: Demo](https://huggingface.co/spaces/Codeblockz/llm-voice-chat/)
    
    [:octicons-code-16: Repository](https://github.com/Codeblockz/distil-whisper-FastRTC)

-   :speaking_head:{ .lg .middle }:eyes:{ .lg .middle } __Your STT Model__
{: data-tags="pytorch"}

    ---

    Description

    Install Instructions

    Usage

    [:octicons-arrow-right-24: Demo](Your demo here)
    
    [:octicons-code-16: Repository](Code here)