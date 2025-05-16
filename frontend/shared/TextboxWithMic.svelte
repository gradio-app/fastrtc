<script lang="ts">
  import type { WebRTCValue } from "./utils";
  import { Block } from "@gradio/atoms";
  import { createEventDispatcher } from "svelte";
  import {
    Circle,
    Spinner,
    Music,
    DropdownArrow,
    VolumeMuted,
    VolumeHigh,
    Microphone,
    Square,
  } from "@gradio/icons";
  import MicrophoneMuted from "./MicrophoneMuted.svelte";
  import WebcamPermissions from "./WebcamPermissions.svelte";
  import PulsingIcon from "./PulsingIcon.svelte";
  import { BaseTextbox } from "@gradio/textbox";

  export let value: WebRTCValue | null = null;
  export let rtc_configuration: Object | null = null;
  export let time_limit: number | null = null;
  export let track_constraints: MediaTrackConstraints = {};
  export let access_mic: () => Promise<void>;
  export let start_stream: () => Promise<void>;
  export let audio_source_callback: () => MediaStream;
  export let input_audio_source_callback: () => MediaStream;
  export let toggleMuteMicrophone: () => void;
  export let handle_click_outside: (event: MouseEvent) => void;
  export let handle_device_change: (event: Event) => void;
  export let toggleMute: () => void;
  export let on_change_cb: (mg: "tick" | "change") => void;
  export let trigger_response: (body: { webrtc_id: string }) => Promise<void>;
  export let icon: string | undefined = undefined;
  export let icon_button_color: string = "var(--color-accent)";
  export let pulse_color: string = "var(--color-accent)";
  export let stream_state: "open" | "closed" | "waiting" = "closed";

  export let mic_accessed = false;
  export let is_muted = false;
  export let is_mic_muted = false;

  function click_mic_icon() {
    if (stream_state === "open") {
      toggleMuteMicrophone();
    } else {
      access_mic();
      start_stream();
    }
  }

  function click_stop_stream() {
    start_stream();
  }

  $: console.log("value", value);
</script>

<Block>
  <div class="input-container">
    <BaseTextbox
      bind:value={value.textbox}
      label=""
      show_label={false}
      root={undefined}
      info={undefined}
      submit_btn={true}
      on:submit={async () => {
        on_change_cb({ type: "send_input" });
        console.log("called tick");
        await trigger_response({ webrtc_id: value.webrtc_id });
      }}
    />

    <button
      class="button"
      class:padded-button={false}
      on:click={click_mic_icon}
    >
      <div
        class="icon"
        style={`fill: ${icon_button_color}; stroke: ${icon_button_color}; color: ${icon_button_color};`}
      >
        {#if stream_state === "open"}
          <PulsingIcon
            audio_source_callback={input_audio_source_callback}
            stream_state={"open"}
            icon={is_mic_muted ? MicrophoneMuted : Microphone}
            {icon_button_color}
            {pulse_color}
            pulse_intensity_threshold={0.99}
          />
        {:else}
          <Microphone />
        {/if}
      </div>
    </button>

    <button
      class="button"
      on:click={toggleMute}
      aria-label={is_muted ? "unmute audio" : "mute audio"}
      class:hidden={stream_state === "closed"}
    >
      <div
        class="icon"
        style={`fill: ${icon_button_color}; stroke: ${icon_button_color}; color: ${icon_button_color};`}
      >
        {#if stream_state === "open"}
          <PulsingIcon
            {audio_source_callback}
            stream_state={"open"}
            icon={is_muted ? VolumeMuted : VolumeHigh}
            {icon_button_color}
            {pulse_color}
            pulse_intensity_threshold={0.8}
          />
        {:else if is_muted}
          <VolumeMuted />
        {:else}
          <VolumeHigh />
        {/if}
      </div>
    </button>
    <button
      class="button"
      on:click={click_stop_stream}
      aria-label="stop stream"
      class:hidden={stream_state === "closed"}
    >
      <div
        class="icon"
        style={`fill: ${icon_button_color}; stroke: ${icon_button_color}; color: ${icon_button_color};`}
      >
        <Square fill="none" />
      </div>
    </button>
  </div>
</Block>

<style>
  .input-container {
    display: flex;
    position: relative;
    align-items: flex-end;
    width: 100%;
  }

  .button {
    border: none;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    cursor: pointer;
    border-radius: 15px;
    min-width: 30px;
    height: 30px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: var(--layer-1);
  }

  .button {
    background: var(--button-secondary-background-fill);
    color: var(--button-secondary-text-color);
  }
  .button:hover {
    background: var(--button-secondary-background-fill-hover);
  }
  .button:disabled {
    background: var(--button-secondary-background-fill);
    cursor: pointer;
  }
  .button:active {
    box-shadow: var(--button-shadow-active);
  }
  .button :global(svg) {
    height: 22px;
    width: 22px;
  }

  .padded-button {
    padding: 0 10px;
  }

  .hidden {
    display: none;
  }
</style>
