# `Stream` Class

```python
Stream(
    handler: HandlerType,
    *,
    additional_outputs_handler: Callable | None = None,
    mode: Literal["send-receive", "receive", "send"] = "send-receive",
    modality: Literal["video", "audio", "audio-video"] = "video",
    concurrency_limit: int | None | Literal["default"] = "default",
    time_limit: float | None = None,
    allow_extra_tracks: bool = False,
    rtp_params: dict[str, Any] | None = None,
    rtc_configuration: dict[str, Any] | None = None,
    track_constraints: dict[str, Any] | None = None,
    additional_inputs: list[Component] | None = None,
    additional_outputs: list[Component] | None = None,
    ui_args: UIArgs | None = None
)
```

Define an audio or video stream with a built-in UI, mountable on a FastAPI app.

This class encapsulates the logic for handling real-time communication (WebRTC) streams, including setting up peer connections, managing tracks, generating a Gradio user interface, and integrating with FastAPI for API endpoints. It supports different modes (send, receive, send-receive) and modalities (audio, video, audio-video), and can optionally handle additional Gradio input/output components alongside the stream. It also provides functionality for telephone integration via the FastPhone service.

## Attributes

| Name                           | Type                                          | Description                                                              |
| :----------------------------- | :-------------------------------------------- | :----------------------------------------------------------------------- |
| `mode`                         | `Literal["send-receive", "receive", "send"]`  | The direction of the stream.                                             |
| `modality`                     | `Literal["video", "audio", "audio-video"]`    | The type of media stream.                                                |
| `rtp_params`                   | `dict[str, Any] \| None`                      | Parameters for RTP encoding.                                             |
| `event_handler`                | `HandlerType`                                 | The main function to process stream data.                                |
| `concurrency_limit`            | `int`                                         | The maximum number of concurrent connections allowed.                    |
| `time_limit`                   | `float \| None`                               | Time limit in seconds for the event handler execution.                   |
| `allow_extra_tracks`           | `bool`                                        | Whether to allow extra tracks beyond the specified modality.             |
| `additional_output_components` | `list[Component] \| None`                     | Extra Gradio output components.                                          |
| `additional_input_components`  | `list[Component] \| None`                     | Extra Gradio input components.                                           |
| `additional_outputs_handler`   | `Callable \| None`                            | Handler for additional outputs.                                          |
| `track_constraints`            | `dict[str, Any] \| None`                      | Constraints for media tracks (e.g., resolution).                         |
| `webrtc_component`             | `WebRTC`                                      | The underlying Gradio WebRTC component instance.                         |
| `rtc_configuration`            | `dict[str, Any] \| None \| Callable`          | Configuration for the RTCPeerConnection (e.g., ICE servers).             |
| `server_rtc_configuration`     | `dict[str, Any] \| None`                      | Configuration for the RTCPeerConnection (e.g., ICE servers) to be used in the server |
| `_ui`                          | `Blocks`                                      | The Gradio Blocks UI instance.                                           |

## Methods

### `mount`

```python
mount(app: FastAPI, path: str = "")
```

Mount the stream's API endpoints onto a FastAPI application.

This method adds the necessary routes (`/webrtc/offer`, `/telephone/handler`, `/telephone/incoming`, `/websocket/offer`) to the provided FastAPI app, prefixed with the optional `path`. It also injects a startup message into the app's lifespan.

**Args:**

| Name   | Type      | Description                                      |
| :----- | :-------- | :----------------------------------------------- |
| `app`  | `FastAPI` | The FastAPI application instance.                |
| `path` | `str`     | An optional URL prefix for the mounted routes. |

---

### `fastphone`

```python
fastphone(
    token: str | None = None,
    host: str = "127.0.0.1",
    port: int = 8000,
    **kwargs
)
```

Launch the FastPhone service for telephone integration.

Starts a local FastAPI server, mounts the stream, creates a public tunnel (using Gradio's tunneling), registers the tunnel URL with the FastPhone backend service, and prints the assigned phone number and access code. This allows users to call the phone number and interact with the stream handler.

**Args:**

| Name     | Type            | Description                                                                                                |
| :------- | :-------------- | :--------------------------------------------------------------------------------------------------------- |
| `token`  | `str \| None`   | Optional Hugging Face Hub token for authentication with the FastPhone service. If None, attempts to find one automatically. |
| `host`   | `str`           | The local host address to bind the server to.                                                              |
| `port`   | `int`           | The local port to bind the server to.                                                                      |
| `**kwargs` |                 | Additional keyword arguments passed to `uvicorn.run`.                                                      |

**Raises:**

*   **`httpx.HTTPStatusError`**: If registration with the FastPhone service fails.
*   **`RuntimeError`**: If running in Colab/Spaces without `rtc_configuration`.

### `offer`

```python
async offer(body: Body)
```

Handle an incoming WebRTC offer via HTTP POST.

Processes the SDP offer and ICE candidates from the client to establish a WebRTC connection.

**Args:**

| Name   | Type   | Description                                                                                             |
| :----- | :----- | :------------------------------------------------------------------------------------------------------ |
| `body` | `Body` | A Pydantic model containing the SDP offer, optional ICE candidate, type ('offer'), and a unique WebRTC ID. |

**Returns:**

*   A dictionary containing the SDP answer generated by the server.

---

### `handle_incoming_call`

```python
async handle_incoming_call(request: Request)
```

Handle incoming telephone calls (e.g., via Twilio).

Generates TwiML instructions to connect the incoming call to the WebSocket handler (`/telephone/handler`) for audio streaming.

**Args:**

| Name      | Type      | Description                                                  |
| :-------- | :-------- | :----------------------------------------------------------- |
| `request` | `Request` | The FastAPI Request object for the incoming call webhook. |

**Returns:**

*   An `HTMLResponse` containing the TwiML instructions as XML.

---

### `telephone_handler`

```python
async telephone_handler(websocket: WebSocket)
```

The websocket endpoint for streaming audio over Twilio phone.

**Args:**

| Name        | Type        | Description                             |
| :---------- | :---------- | :-------------------------------------- |
| `websocket` | `WebSocket` | The incoming WebSocket connection object. |

---

### `websocket_offer`

```python
async websocket_offer(websocket: WebSocket)
```

Establish a Websocket connection to the Stream..

**Args:**

| Name        | Type        | Description                             |
| :---------- | :---------- | :-------------------------------------- |
| `websocket` | `WebSocket` | The incoming WebSocket connection object. |

## Properties

### `ui`

```python
@property
ui() -> Blocks
```

Get the Gradio Blocks UI instance associated with this stream.

**Returns:**

*   The `gradio.Blocks` UI instance.

```python
@ui.setter
ui(blocks: Blocks)
```

Set a custom Gradio Blocks UI for this stream.

**Args:**

| Name     | Type     | Description                                      |
| :------- | :------- | :----------------------------------------------- |
| `blocks` | `Blocks` | The `gradio.Blocks` instance to use as the UI. |