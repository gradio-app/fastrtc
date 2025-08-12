<script lang="ts">
  import { onDestroy } from "svelte";

  import PulsingIcon from "./PulsingIcon.svelte";

  export let stream_state: "open" | "closed" | "waiting" = "closed";
  export let audio_source_callback: () => MediaStream;
  export let icon: string | undefined = undefined;
  export let icon_button_color: string = "var(--color-accent)";
  export let pulse_color: string = "var(--color-accent)";
  export let pending: boolean = false;
  export let icon_radius: number = 50;
  export let full_screen: boolean = true;

  let audioContext: AudioContext;
  let analyser: AnalyserNode;
  let dataArray: Uint8Array;
  let animationId: number;
  export let pulseScale = 1;

  let waveContainer: HTMLDivElement;
  let waveAmplitudes: number[] = [];
  let waveOffsets: number[] = [];
  let time = 0;
  let idleAnimationId: number;

  $: effectiveNumBands = full_screen && !icon ? 32 : 16;

  $: containerWidth = icon ? "128px" : "100%";

  $: if (stream_state === "open") setupAudioContext();
  $: if (stream_state === "closed" || stream_state === "waiting")
    startIdleAnimation();

  onDestroy(() => {
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
    if (idleAnimationId) {
      cancelAnimationFrame(idleAnimationId);
    }
    if (audioContext) {
      audioContext.close();
    }
  });

  function startIdleAnimation() {
    if (idleAnimationId) {
      cancelAnimationFrame(idleAnimationId);
    }

    waveAmplitudes = new Array(effectiveNumBands).fill(0.1);
    waveOffsets = new Array(effectiveNumBands).fill(0);

    updateIdleVisualization();
  }

  function updateIdleVisualization() {
    time += 0.012;

    for (let i = 0; i < effectiveNumBands; i++) {
      const baseAmplitude = 0.15 + Math.sin(time * 0.5 + i * 0.3) * 0.05;
      waveAmplitudes[i] = baseAmplitude;
      waveOffsets[i] = time * (0.3 + i * 0.05);
    }

    updateWavePaths();

    if (stream_state === "closed" || stream_state === "waiting") {
      idleAnimationId = requestAnimationFrame(updateIdleVisualization);
    }
  }

  function setupAudioContext() {
    if (idleAnimationId) {
      cancelAnimationFrame(idleAnimationId);
    }

    audioContext = new ((window as any).AudioContext ||
      (window as any).webkitAudioContext)();
    analyser = audioContext.createAnalyser();
    const source = audioContext.createMediaStreamSource(
      audio_source_callback(),
    );

    source.connect(analyser);

    analyser.fftSize = 128;
    analyser.smoothingTimeConstant = 0.85;
    dataArray = new Uint8Array(analyser.frequencyBinCount);

    waveAmplitudes = new Array(effectiveNumBands).fill(0);
    waveOffsets = new Array(effectiveNumBands).fill(0);

    updateVisualization();
  }

  function updateVisualization() {
    analyser.getByteFrequencyData(dataArray);
    time += 0.016;

    for (let i = 0; i < effectiveNumBands; i++) {
      const freqIndex = Math.floor((i / effectiveNumBands) * dataArray.length);
      const amplitude = (dataArray[freqIndex] / 255) * 0.8 + 0.2;
      waveAmplitudes[i] = amplitude;
      waveOffsets[i] = time * (0.5 + i * 0.1);
    }

    updateWavePaths();

    animationId = requestAnimationFrame(updateVisualization);
  }

  function updateWavePaths() {
    if (!waveContainer) return;

    const waves = waveContainer.querySelectorAll(".wave-path");
    waves.forEach((wave, waveIndex) => {
      const path = generateWavePath(waveIndex);
      (wave as SVGPathElement).setAttribute("d", path);
    });
  }

  function generateWavePath(waveIndex: number): string {
    const width = waveContainer?.clientWidth || 400;
    const height = full_screen ? 300 : 64;
    const centerY = height / 2;
    const points = 100;

    let path = `M 0 ${centerY}`;

    for (let i = 0; i <= points; i++) {
      const x = (i / points) * width;
      const normalizedX = (i / points) * Math.PI * 4;

      const frequency = 1 + waveIndex * 0.3;
      const phase = waveOffsets[waveIndex] || 0;
      const baseAmplitude = full_screen ? 60 : 20;

      let amplitude = 0;
      for (let j = 0; j < Math.min(4, waveAmplitudes.length); j++) {
        const weight = 1 / (j + 1);
        amplitude += (waveAmplitudes[j] || 0) * weight;
      }
      amplitude = amplitude * baseAmplitude * (0.6 + waveIndex * 0.1);

      const sineWave = Math.sin(normalizedX * frequency + phase) * amplitude;
      const cosineWave =
        Math.cos(normalizedX * frequency * 1.3 + phase * 0.7) * amplitude * 0.3;

      const y = centerY + sineWave + cosineWave;

      if (i === 0) {
        path = `M ${x} ${y}`;
      } else {
        path += ` L ${x} ${y}`;
      }
    }

    return path;
  }
</script>

<div class="gradio-webrtc-waveContainer" class:full-screen={full_screen}>
  {#if icon && !pending}
    <div class="gradio-webrtc-icon-container" class:full-screen={full_screen}>
      <div
        class="gradio-webrtc-icon"
        class:full-screen={full_screen}
        style:transform={`scale(${pulseScale})`}
        style:background={icon_button_color}
      >
        <PulsingIcon
          {stream_state}
          {pulse_color}
          {icon}
          {icon_button_color}
          {icon_radius}
          {audio_source_callback}
        />
      </div>
    </div>
  {:else}
    <div
      class="wave-container"
      class:full-screen={full_screen}
      style:width={containerWidth}
      bind:this={waveContainer}
    >
      <svg class="wave-svg" class:full-screen={full_screen}>
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style="stop-color:var(--color-accent);stop-opacity:0.8"
            />
            <stop
              offset="50%"
              style="stop-color:var(--color-accent);stop-opacity:0.9"
            />
            <stop
              offset="100%"
              style="stop-color:var(--color-accent);stop-opacity:0.8"
            />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style="stop-color:var(--color-accent);stop-opacity:0.6"
            />
            <stop
              offset="50%"
              style="stop-color:var(--color-accent);stop-opacity:0.7"
            />
            <stop
              offset="100%"
              style="stop-color:var(--color-accent);stop-opacity:0.6"
            />
          </linearGradient>
          <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style="stop-color:var(--color-accent);stop-opacity:0.4"
            />
            <stop
              offset="50%"
              style="stop-color:var(--color-accent);stop-opacity:0.5"
            />
            <stop
              offset="100%"
              style="stop-color:var(--color-accent);stop-opacity:0.4"
            />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          class="wave-path wave-layer-3"
          stroke="url(#waveGradient3)"
          stroke-width="1.5"
          fill="none"
          filter="url(#glow)"
        />
        <path
          class="wave-path wave-layer-2"
          stroke="url(#waveGradient2)"
          stroke-width="2"
          fill="none"
          filter="url(#glow)"
        />
        <path
          class="wave-path wave-layer-1"
          stroke="url(#waveGradient1)"
          stroke-width="2.5"
          fill="none"
          filter="url(#glow)"
        />
      </svg>
    </div>
  {/if}
</div>

<style>
  .gradio-webrtc-waveContainer {
    position: relative;
    display: flex;
    min-height: 100px;
    max-height: 128px;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100%;
  }

  .gradio-webrtc-waveContainer.full-screen {
    min-height: 40vh;
    max-height: 60vh;
    width: 100%;
  }

  .wave-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64px;
    width: 100%;
    position: relative;
  }

  .wave-container.full-screen {
    height: 300px;
  }

  .wave-svg {
    width: 100%;
    height: 100%;
    overflow: visible;
  }

  .wave-svg.full-screen {
    filter: drop-shadow(0 0 10px var(--color-accent));
  }

  .wave-path {
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: opacity 0.2s ease;
    vector-effect: non-scaling-stroke;
  }

  .wave-layer-1 {
    opacity: 1;
  }

  .wave-layer-2 {
    opacity: 0.8;
    transform: translateX(10px);
  }

  .wave-layer-3 {
    opacity: 0.6;
    transform: translateX(-8px);
  }

  .gradio-webrtc-icon-container {
    position: relative;
    width: 128px;
    height: 128px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .gradio-webrtc-icon-container.full-screen {
    width: 256px;
    height: 256px;
  }

  .gradio-webrtc-icon {
    position: relative;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    transition: transform 0.1s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }

  .gradio-webrtc-icon.full-screen {
    width: 100%;
    height: 100%;
  }

  @keyframes pulse {
    0% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.5;
    }
    100% {
      transform: translate(-50%, -50%) scale(var(--max-scale, 3));
      opacity: 0;
    }
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 0.4;
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(1.1);
    }
  }
</style>
