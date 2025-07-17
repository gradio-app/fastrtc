<script lang="ts">
  import { Video } from "@gradio/icons";
  import { createEventDispatcher } from "svelte";

  export let icon = Video;
  $: text =
    icon === Video ? "Click to Access Webcam" : "Click to Access Microphone";

  const dispatch = createEventDispatcher<{
    click: undefined;
  }>();
</script>

<button style:height="100%" on:click={() => dispatch("click")}>
  <div class="wrap">
    <span class="icon-wrap">
      <svelte:component this={icon} />
    </span>
    {text}
  </div>
</button>

<style>
  button {
    cursor: pointer;
    width: var(--size-full);
  }

  .wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: var(--size-60);
    color: var(--button-secondary-background-fill);
    height: 100%;
    padding-top: var(--size-3);
    font-size: 1.5rem;
  }

  .icon-wrap {
    width: 150px;
    margin-bottom: var(--spacing-lg);
  }

  @media (--screen-md) {
    .wrap {
      font-size: var(--text-lg);
    }
  }
</style>
