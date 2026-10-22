## `ReplyOnPause` Class

```python
ReplyOnPause(
    fn: ReplyFnGenerator,
    startup_fn: Callable | None = None,
    algo_options: AlgoOptions | None = None,
    model_options: ModelOptions | None = None,
    can_interrupt: bool = True,
    expected_layout: Literal["mono", "stereo"] = "mono",
    output_sample_rate: int = 24000,
    output_frame_size: int | None = None,  # Deprecated
    input_sample_rate: int = 48000,
    model: PauseDetectionModel | None = None,
    needs_args: bool = False,
    on_turn_event: Callable[[TurnEvent], None] | None = None,
)
```

A stream handler that processes incoming audio, detects pauses, and triggers a reply function (`fn`) when a pause is detected.

This handler accumulates audio chunks, uses a Voice Activity Detection (VAD) model to determine speech segments, and identifies pauses based on configurable thresholds. Once a pause is detected after speech has started, it calls the provided generator function `fn` with the accumulated audio.

It can optionally run a `startup_fn` at the beginning and supports interruption of the reply function if new audio arrives.

### Per-turn observability

Pass `on_turn_event` to `ReplyOnPause` or `ReplyOnStopWords` to observe reply
turns without depending on a telemetry provider:

```python
from queue import SimpleQueue

from fastrtc import ReplyOnPause, Stream, TurnEvent, get_current_turn_id

events: SimpleQueue[TurnEvent] = SimpleQueue()


def reply(audio):
    turn_id = get_current_turn_id()
    # Attach turn_id to your application's STT/LLM/TTS logs or traces.
    yield audio


stream = Stream(
    handler=ReplyOnPause(reply, on_turn_event=events.put),
    modality="audio",
    mode="send-receive",
)
# Consume events in an application-owned worker to export telemetry.
```

The callback receives a frozen `TurnEvent` with `type`, `timestamp`, and a frozen
`TurnMetrics` snapshot in `metrics`. Every event for a turn shares
`event.metrics.turn_id`. The callback is synchronous and executes on the calling
thread; it must be fast and thread-safe. Queue work for asynchronous export.
Callback exceptions are logged and do not stop the reply. Async callbacks are
not supported. Handler copies preserve the callback, but have independent turn
state and IDs. No recorders or IDs are allocated when the callback is omitted.

| Event | Observation |
| :--- | :--- |
| `speech_started` | The VAD first classifies a buffered chunk as speech. |
| `turn_detected` | A pause/maximum speech limit triggers a reply, or `trigger_response()` is called. |
| `handler_started` | Immediately before invoking the reply function, after waiting for additional inputs. |
| `first_output_generated` | The first non-`None` yield, including `AdditionalOutputs` or a stream-close signal. |
| `first_audio_generated` | The first yield containing nonempty audio. |
| `handler_completed` | The reply generator is exhausted. |
| `interrupted` | FastRTC interrupts a reply because another turn was detected. |
| `failed` | Reply invocation, iteration, or output processing raises an exception. |
| `cancelled` | A reset or connection shutdown ends an outstanding observation. |

There is at most one terminal event per turn. Its `metrics.outcome` is
`completed`, `interrupted`, `failed`, or `cancelled`; earlier snapshots have
`outcome=None`. A terminal event does not guarantee that a currently executing
user function has stopped; late yields cannot reopen its metrics. Events from
overlapping input/output turns can interleave; group them by turn ID.

Timestamps use `time.monotonic()` in seconds, not wall-clock time. The following
properties compute milliseconds from observed timestamps:

| Property | Interval |
| :--- | :--- |
| `handler_scheduling_ms` | Turn detection to handler invocation, including waits for additional inputs. |
| `handler_ttfo_ms` | Handler invocation to first non-`None` output. |
| `handler_duration_ms` | Handler invocation to the terminal event. |
| `time_to_first_audio_ms` | Turn detection to first nonempty audio generated. |
| `total_turn_ms` | Turn detection to the terminal event. |

Unobserved timestamps and durations are `None`, including audio timing for
text-only replies. Manual turns may omit `speech_started`. The optional startup
function is not a conversational turn and is not instrumented.
`get_current_turn_id()` works during synchronous and asynchronous reply execution
and is restored afterward. It returns `None` outside instrumented execution;
application-created threads must propagate context explicitly.

These are handler-level observations shared by WebRTC and WebSocket use of these
reply handlers. They do not measure network delivery, queue draining, or browser
playback. The first audio event deliberately describes **generation**, not
"frame sent". The current VAD interface does not provide a uniform physical
speech-stop timestamp, so speech-stop and turn-detection latency are not
reported. Provider-specific STT/LLM/TTS spans and arbitrary `StreamHandler`
implementations remain application-owned.

### Methods

#### `__init__`

```python
__init__(
    fn: ReplyFnGenerator,
    startup_fn: Callable | None = None,
    algo_options: AlgoOptions | None = None,
    model_options: ModelOptions | None = None,
    can_interrupt: bool = True,
    expected_layout: Literal["mono", "stereo"] = "mono",
    output_sample_rate: int = 24000,
    output_frame_size: int | None = None,  # Deprecated
    input_sample_rate: int = 48000,
    model: PauseDetectionModel | None = None,
    needs_args: bool = False,
    on_turn_event: Callable[[TurnEvent], None] | None = None,
)
```

Initializes the ReplyOnPause handler.

**Args:**

| Name                 | Type                                | Description                                                                                              |
| :------------------- | :---------------------------------- | :------------------------------------------------------------------------------------------------------- |
| `fn`                 | `ReplyFnGenerator`                  | The generator function to execute upon pause detection. It receives `(sample_rate, audio_array)` and optionally `*args`. |
| `startup_fn`         | `Callable | None`                  | An optional function to run once at the beginning.                                                       |
| `algo_options`       | `AlgoOptions | None`               | Options for the pause detection algorithm.                                                               |
| `model_options`      | `ModelOptions | None`              | Options for the VAD model.                                                                               |
| `can_interrupt`      | `bool`                              | If True, incoming audio during `fn` execution will stop the generator and process the new audio.         |
| `expected_layout`    | `Literal["mono", "stereo"]`         | Expected input audio layout ('mono' or 'stereo').                                                        |
| `output_sample_rate` | `int`                               | The sample rate expected for audio yielded by `fn`.                                                      |
| `output_frame_size`  | `int | None`                       | Deprecated.                                                                                              |
| `input_sample_rate`  | `int`                               | The expected sample rate of incoming audio.                                                              |
| `model`              | `PauseDetectionModel | None`       | An optional pre-initialized VAD model instance.                                                          |

---

#### `receive`

```python
receive(frame: tuple[int, np.ndarray]) -> None
```

Receives an audio frame from the stream. Processes the audio frame using `process_audio`. If a pause is detected, it sets the event. If interruption is enabled and a reply is ongoing, it closes the current generator and clears the processing queue.

**Args:**

| Name    | Type                   | Description                                                       |
| :------ | :--------------------- | :---------------------------------------------------------------- |
| `frame` | `tuple[int, np.ndarray]` | A tuple containing the sample rate and the audio frame data.      |

---

#### `emit`

```python
emit() -> EmitType | None
```

Produces the next output chunk from the reply generator (`fn`).

This method is called repeatedly after a pause is detected (event is set). If the generator is not already running, it initializes it by calling `fn` with the accumulated audio and any required additional arguments. It then yields the next item from the generator. Handles both sync and async generators. Resets the state upon generator completion or error.

**Returns:**

| Type             | Description                                                                      |
| :--------------- | :------------------------------------------------------------------------------- |
| `EmitType | None` | The next output item from the generator, or None if no pause event has occurred or the generator is exhausted. |

**Raises:**

*   **`Exception`**: Re-raises exceptions occurring within the `fn` generator.

---


#### `start_up`

```python
start_up()
```

Executes the startup function `startup_fn` if provided. Waits for additional arguments if needed before calling `startup_fn`.

---

#### `copy`

```python
copy() -> ReplyOnPause
```

Creates a new instance of ReplyOnPause with the same configuration.

**Returns:**

| Type           | Description                                           |
| :------------- | :---------------------------------------------------- |
| `ReplyOnPause` | A new `ReplyOnPause` instance with identical settings. |

---

#### `determine_pause`

```python
determine_pause(audio: np.ndarray, sampling_rate: int, state: AppState) -> bool
```

Analyzes an audio chunk to detect if a significant pause occurred after speech.

Uses the VAD model to measure speech duration within the chunk. Updates the application state (`state`) regarding whether talking has started and accumulates speech segments.

**Args:**

| Name            | Type         | Description                             |
| :-------------- | :----------- | :-------------------------------------- |
| `audio`         | `np.ndarray` | The numpy array containing the audio chunk. |
| `sampling_rate` | `int`        | The sample rate of the audio chunk.     |
| `state`         | `AppState`   | The current application state.          |

**Returns:**

| Type   | Description                                                                                             |
| :----- | :------------------------------------------------------------------------------------------------------ |
| `bool` | True if a pause satisfying the configured thresholds is detected after speech has started, False otherwise. |

---

#### `process_audio`

```python
process_audio(audio: tuple[int, np.ndarray], state: AppState) -> None
```

Processes an incoming audio frame. Appends the frame to the buffer, runs pause detection on the buffer, and updates the application state.

**Args:**

| Name    | Type                   | Description                                                       |
| :------ | :--------------------- | :---------------------------------------------------------------- |
| `audio` | `tuple[int, np.ndarray]` | A tuple containing the sample rate and the audio frame data.      |
| `state` | `AppState`             | The current application state to update.                          |

---

#### `reset`

```python
reset()
```

Resets the handler state to its initial condition. Clears accumulated audio, resets state flags, closes any active generator, and clears the event flag.

---

#### `trigger_response`

```python
trigger_response()
```

Manually triggers the response generation process. Sets the event flag, effectively simulating a pause detection. Initializes the stream buffer if it's empty.

---



## `ReplyOnStopWords` Class

```python
ReplyOnStopWords(
    fn: ReplyFnGenerator,
    stop_words: list[str],
    startup_fn: Callable | None = None,
    algo_options: AlgoOptions | None = None,
    model_options: ModelOptions | None = None,
    can_interrupt: bool = True,
    expected_layout: Literal["mono", "stereo"] = "mono",
    output_sample_rate: int = 24000,
    output_frame_size: int | None = None,  # Deprecated
    input_sample_rate: int = 48000,
    model: PauseDetectionModel | None = None,
    needs_args: bool = False,
    on_turn_event: Callable[[TurnEvent], None] | None = None,
)
```

A stream handler that extends `ReplyOnPause` to trigger based on stop words followed by a pause.

This handler listens to the incoming audio stream, performs Speech-to-Text (STT) to detect predefined stop words. Once a stop word is detected, it waits for a subsequent pause in speech (using the VAD model) before triggering the reply function (`fn`) with the audio recorded *after* the stop word.

### Methods

#### `__init__`

```python
__init__(
    fn: ReplyFnGenerator,
    stop_words: list[str],
    startup_fn: Callable | None = None,
    algo_options: AlgoOptions | None = None,
    model_options: ModelOptions | None = None,
    can_interrupt: bool = True,
    expected_layout: Literal["mono", "stereo"] = "mono",
    output_sample_rate: int = 24000,
    output_frame_size: int | None = None,  # Deprecated
    input_sample_rate: int = 48000,
    model: PauseDetectionModel | None = None,
    needs_args: bool = False,
    on_turn_event: Callable[[TurnEvent], None] | None = None,
)
```

Initializes the ReplyOnStopWords handler.

**Args:**

*(Inherits Args from `ReplyOnPause.__init__`)*

| Name         | Type        | Description                                                                                              |
| :----------- | :---------- | :------------------------------------------------------------------------------------------------------- |
| `stop_words` | `list[str]` | A list of strings (words or phrases) to listen for. Detection is case-insensitive and ignores punctuation. |

---

#### `stop_word_detected`

```python
stop_word_detected(text: str) -> bool
```

Checks if any of the configured stop words are present in the text. Performs a case-insensitive search, treating multi-word stop phrases correctly and ignoring basic punctuation.

**Args:**

| Name   | Type   | Description                          |
| :----- | :----- | :----------------------------------- |
| `text` | `str`  | The text transcribed from the audio. |

**Returns:**

| Type   | Description                               |
| :----- | :---------------------------------------- |
| `bool` | True if a stop word is found, False otherwise. |

---

#### `send_stopword`

```python
send_stopword()
```

Sends a 'stopword' message asynchronously via the communication channel (if configured).

---

#### `determine_pause`

```python
determine_pause(audio: np.ndarray, sampling_rate: int, state: ReplyOnStopWordsState) -> bool
```

Analyzes an audio chunk to detect stop words and subsequent pauses. Overrides the `ReplyOnPause.determine_pause` method. First, it performs STT on the audio buffer to detect stop words. Once a stop word is detected (`state.stop_word_detected` is True), it then uses the VAD model to detect a pause in the audio *following* the stop word.

**Args:**

| Name            | Type                    | Description                                          |
| :-------------- | :---------------------- | :--------------------------------------------------- |
| `audio`         | `np.ndarray`            | The numpy array containing the audio chunk.          |
| `sampling_rate` | `int`                   | The sample rate of the audio chunk.                  |
| `state`         | `ReplyOnStopWordsState` | The current application state (ReplyOnStopWordsState). |

**Returns:**

| Type   | Description                                                                                                                            |
| :----- | :------------------------------------------------------------------------------------------------------------------------------------- |
| `bool` | True if a stop word has been detected and a subsequent pause satisfying the configured thresholds is detected, False otherwise.          |

---

#### `reset`

```python
reset()
```

Resets the handler state to its initial condition. Clears accumulated audio, resets state flags (including stop word state), closes any active generator, and clears the event flag.

---

#### `copy`

```python
copy() -> ReplyOnStopWords
```

Creates a new instance of ReplyOnStopWords with the same configuration.

**Returns:**

| Type               | Description                                              |
| :----------------- | :------------------------------------------------------- |
| `ReplyOnStopWords` | A new `ReplyOnStopWords` instance with identical settings. |

*(Inherits other public methods like `start_up`, `process_audio`, `receive`, `trigger_response`, `async_iterate`, `emit` from `ReplyOnPause`)*
