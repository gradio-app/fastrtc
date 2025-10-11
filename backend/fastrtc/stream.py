import inspect
import logging
import re
from collections.abc import Callable
from contextlib import AbstractAsyncContextManager
from enum import Enum
from pathlib import Path
from typing import (
    Any,
    Literal,
    TypedDict,
    cast,
    List,
    Set,
)

import anyio
import gradio as gr
from fastapi import FastAPI, Request, WebSocket
from fastapi.responses import HTMLResponse
from gradio import Blocks
from gradio.components.base import Component
from pydantic import BaseModel
from typing_extensions import NotRequired

from .tracks import HandlerType, StreamHandlerImpl
from .utils import RTCConfigurationCallable
from .webrtc import WebRTC
from .webrtc_connection_mixin import WebRTCConnectionMixin
from .websocket import WebSocketHandler

logger = logging.getLogger(__name__)
curr_dir = Path(__file__).parent


class Body(BaseModel):
    sdp: str | None = None
    candidate: dict[str, Any] | None = None
    type: str
    webrtc_id: str


class UIArgs(TypedDict):
    title: NotRequired[str]
    subtitle: NotRequired[str]
    icon: NotRequired[str]
    icon_button_color: NotRequired[str]
    pulse_color: NotRequired[str]
    icon_radius: NotRequired[int]
    send_input_on: NotRequired[Literal["submit", "change"]]
    hide_title: NotRequired[bool]
    full_screen: NotRequired[bool]


class Stream(WebRTCConnectionMixin):
    def __init__(
        self,
        handler: HandlerType,
        *,
        additional_outputs_handler: Callable | None = None,
        mode: Literal["send-receive", "receive", "send"] = "send-receive",
        modality: Literal["video", "audio", "audio-video"] = "video",
        concurrency_limit: int | None | Literal["default"] = "default",
        time_limit: float | None = None,
        allow_extra_tracks: bool = False,
        rtp_params: dict[str, Any] | None = None,
        rtc_configuration: RTCConfigurationCallable | None = None,
        server_rtc_configuration: dict[str, Any] | None = None,
        track_constraints: dict[str, Any] | None = None,
        additional_inputs: list[Component] | None = None,
        additional_outputs: list[Component] | None = None,
        ui_args: UIArgs | None = None,
        verbose: bool = True,
    ):
        WebRTCConnectionMixin.__init__(self)
        self.mode = mode
        self.modality = modality
        self.rtp_params = rtp_params
        self.event_handler = handler
        if (
            ui_args
            and ui_args.get("variant") == "textbox"
            and hasattr(handler, "needs_args")
        ):
            self.event_handler.needs_args = True  # type: ignore
        else:
            self.event_handler.needs_args = False  # type: ignore
        self.concurrency_limit = cast(
            (int),
            1 if concurrency_limit in ["default", None] else concurrency_limit,
        )
        self.concurrency_limit_gradio = cast(
            int | Literal["default"] | None, concurrency_limit
        )
        self.time_limit = time_limit
        self.allow_extra_tracks = allow_extra_tracks
        self.additional_output_components = additional_outputs
        self.additional_input_components = additional_inputs
        self.additional_outputs_handler = additional_outputs_handler
        self.track_constraints = track_constraints
        self.webrtc_component: WebRTC | None = None
        self.rtc_configuration = rtc_configuration
        self.server_rtc_configuration = self.convert_to_aiortc_format(
            server_rtc_configuration
        )
        self.verbose = verbose
        self._ui = self._generate_default_ui(ui_args)
        self._ui.launch = self._wrap_gradio_launch(self._ui.launch)

    def has_webrtc_component(self) -> bool:
        return getattr(self, "webrtc_component", None) is not None

    def get_all_connections(self) -> List[str]:
        all_ids: Set[str] = set()
        try:
            conns = getattr(self, "connections", None)
            if conns is not None:
                if hasattr(conns, "keys"):
                    for k in conns.keys():
                        all_ids.add(str(k))
                else:
                    for k in conns:
                        all_ids.add(str(k))
        except Exception:
            pass
        try:
            if self.has_webrtc_component():
                wc = self.webrtc_component
                if hasattr(wc, "connections") and wc.connections is not None:
                    try:
                        for k in wc.connections.keys():
                            all_ids.add(str(k))
                    except Exception:
                        for k in wc.connections:
                            all_ids.add(str(k))
                for alt_name in ("_connections", "_conn_map", "active_connections"):
                    try:
                        alt = getattr(wc, alt_name, None)
                        if alt:
                            if hasattr(alt, "keys"):
                                for k in alt.keys():
                                    all_ids.add(str(k))
                            else:
                                for k in alt:
                                    all_ids.add(str(k))
                    except Exception:
                        continue
        except Exception:
            pass
        return list(all_ids)

    async def offer(self, body: Body, request: Request) -> dict[str, Any]:
        sdp = body.sdp
        candidate = body.candidate
        webrtc_id = body.webrtc_id
        if body.type == "offer" and sdp is not None:
            return await self.handle_offer(sdp, webrtc_id)
        elif body.type == "candidate" and candidate is not None:
            await self.add_ice_candidate(candidate, webrtc_id)
            return {"status": "ok"}
        return {"error": "Invalid request"}

    async def telephone_handler(self, websocket: WebSocket) -> None:
        handler = WebSocketHandler(self)
        await handler.handle(websocket)

    async def handle_incoming_call(self, request: Request) -> dict[str, Any]:
        data = await request.json()
        return await self.handle_call(data)

    async def websocket_offer(self, websocket: WebSocket) -> None:
        await websocket.accept()
        async for message in websocket.iter_text():
            await self.handle_ws_message(message, websocket)

    def convert_to_aiortc_format(
        self, rtc_config: dict[str, Any] | None
    ) -> dict[str, Any] | None:
        if rtc_config is None:
            return None
        if callable(rtc_config):
            rtc_config = rtc_config()
        return rtc_config

    def _generate_default_ui(self, ui_args: UIArgs | None = None) -> Blocks:
        with gr.Blocks() as demo:
            self.webrtc_component = WebRTC(
                mode=self.mode,
                modality=self.modality,
                rtc_configuration=self.rtc_configuration,
                server_rtc_configuration=self.server_rtc_configuration,
                track_constraints=self.track_constraints,
                label="",
                show_share_button=False,
                **(ui_args or {}),
            )
            self.webrtc_component.stream(self.event_handler)
        return demo

    def _wrap_gradio_launch(self, launch_fn: Callable) -> Callable:
        def wrapped_launch(*args: Any, **kwargs: Any) -> Any:
            self.start_background_tasks()
            return launch_fn(*args, **kwargs)
        return wrapped_launch

    def _inject_startup_message(
        self, lifespan_context: Callable[..., AbstractAsyncContextManager]
    ) -> Callable[..., AbstractAsyncContextManager]:
        async def new_context(*args: Any, **kwargs: Any):
            async with lifespan_context(*args, **kwargs):
                if self.verbose:
                    logger.info("Stream mounted and ready.")
                yield
        return new_context

    def mount(
        self, app: FastAPI, path: str = "", tags: list[str | Enum] | None = None
    ) -> None:
        from fastapi import APIRouter
        router = APIRouter(prefix=path)
        router.post("/webrtc/offer", tags=tags)(self.offer)
        router.websocket("/telephone/handler")(self.telephone_handler)
        router.post("/telephone/incoming", tags=tags)(self.handle_incoming_call)
        router.websocket("/websocket/offer")(self.websocket_offer)

        @router.get("/connections", tags=tags)
        async def get_connections():
            return self.get_all_connections()

        lifespan = self._inject_startup_message(app.router.lifespan_context)
        app.router.lifespan_context = lifespan
        app.include_router(router)

    @staticmethod
    def _print_error(env: Literal["colab", "spaces"]):
        """
        Print an error message and raise RuntimeError for missing rtc_configuration.

        Used internally when running in Colab or Spaces without necessary WebRTC setup.

        Args:
            env: The environment ('colab' or 'spaces') where the error occurred.

        Raises:
            RuntimeError: Always raised after printing the error message.
        """
        import click

        print(
            click.style("ERROR", fg="red")
            + f":\t  Running in {env} is not possible without providing a valid rtc_configuration. "
            + "See "
            + click.style("https://fastrtc.org/deployment/", fg="cyan")
            + " for more information."
        )
        raise RuntimeError(
            f"Running in {env} is not possible without providing a valid rtc_configuration. "
            + "See https://fastrtc.org/deployment/ for more information."
        )

    def _check_colab_or_spaces(self):
        """
        Check if running in Colab or Spaces and if rtc_configuration is missing.

        Calls `_print_error` if the conditions are met.

        Raises:
            RuntimeError: If running in Colab/Spaces without `rtc_configuration`.
        """
        from gradio.utils import colab_check, get_space

        if colab_check() and not self.rtc_configuration:
            self._print_error("colab")
        if get_space() and not self.rtc_configuration:
            self._print_error("spaces")

    def _wrap_gradio_launch(self, callable):
        """
        Wrap the Gradio launch method to inject environment checks.

        Ensures that `_check_colab_or_spaces` is called during the application
        lifespan when `Blocks.launch()` is invoked.

        Args:
            callable: The original `gradio.Blocks.launch` method.

        Returns:
            A wrapped version of the launch method.
        """
        import contextlib

        def wrapper(*args, **kwargs):
            lifespan = kwargs.get("app_kwargs", {}).get("lifespan", None)

            @contextlib.asynccontextmanager
            async def new_lifespan(app: FastAPI):
                if lifespan is None:
                    self._check_colab_or_spaces()
                    yield
                else:
                    async with lifespan(app):
                        self._check_colab_or_spaces()
                        yield

            if "app_kwargs" not in kwargs:
                kwargs["app_kwargs"] = {}
            kwargs["app_kwargs"]["lifespan"] = new_lifespan
            return callable(*args, **kwargs)

        return wrapper

    def _inject_startup_message(
        self, lifespan: Callable[[FastAPI], AbstractAsyncContextManager] | None = None
    ):
        """
        Create a FastAPI lifespan context manager to print startup messages and check environment.

        Args:
            lifespan: An optional existing lifespan context manager to wrap.

        Returns:
            An async context manager function suitable for `FastAPI(lifespan=...)`.
        """
        import contextlib

        import click

        def print_startup_message():
            self._check_colab_or_spaces()
            if self.verbose:
                print(
                    click.style("INFO", fg="green")
                    + ":\t  Visit "
                    + click.style("https://fastrtc.org/userguide/api/", fg="cyan")
                    + " for WebRTC or Websocket API docs."
                )

        @contextlib.asynccontextmanager
        async def new_lifespan(app: FastAPI):
            if lifespan is None:
                print_startup_message()
                yield
            else:
                async with lifespan(app):
                    print_startup_message()
                    yield

        return new_lifespan

    def _is_html_string(self, text: str) -> bool:
        html_pattern = re.compile(r"<[^<>]+>")
        return bool(html_pattern.search(text))

    def _format_title(self, title: str) -> str:
        if self._is_html_string(title):
            return title
        else:
            return f"<h1 style='text-align: center'>{title}</h1>"

    def _format_subtitle(self, subtitle: str | None) -> str:
        if subtitle:
            return f"<div style='display: flex; justify-content: center; align-items: center; text-align: center; margin: 20px 0;'>{subtitle}</div>"
        return ""

    def _generate_default_ui(
        self,
        ui_args: UIArgs | None = None,
    ) -> Blocks:
        """
        Generate the default Gradio UI based on mode, modality, and arguments.

        Constructs a `gradio.Blocks` interface with the appropriate WebRTC component
        and any specified additional input/output components.

        Args:
            ui_args: Optional dictionary containing UI customization arguments
                     (title, subtitle, icon, etc.).

        Returns:
            A `gradio.Blocks` instance representing the generated UI.

        Raises:
            ValueError: If `additional_outputs` are provided without
                        `additional_outputs_handler`.
            ValueError: If the combination of `mode` and `modality` is invalid
                        or not supported for UI generation.
        """
        ui_args = ui_args or {}
        same_components = []
        additional_input_components = self.additional_input_components or []
        additional_output_components = self.additional_output_components or []
        if additional_output_components and not self.additional_outputs_handler:
            raise ValueError(
                "additional_outputs_handler must be provided if there are additional output components."
            )
        if additional_input_components and additional_output_components:
            same_components = [
                component
                for component in additional_input_components
                if component in additional_output_components
            ]
            for component in additional_output_components:
                if component in same_components:
                    same_components.append(component)
        if self.modality == "video" and self.mode == "receive":
            with gr.Blocks() as demo:
                if not ui_args.get("hide_title"):
                    title = ui_args.get(
                        "title", "Video Streaming (Powered by FastRTC ⚡️)"
                    )
                    gr.HTML(self._format_title(title))
                    if ui_args.get("subtitle"):
                        gr.Markdown(self._format_subtitle(ui_args.get("subtitle")))
                with gr.Row():
                    with gr.Column():
                        if additional_input_components:
                            for component in additional_input_components:
                                component.render()
                        button = gr.Button("Start Stream", variant="primary")
                    with gr.Column():
                        output_video = WebRTC(
                            label="Video Stream",
                            rtc_configuration=self.rtc_configuration,
                            track_constraints=self.track_constraints,
                            mode="receive",
                            modality="video",
                            full_screen=ui_args.get("full_screen"),
                        )
                        self.webrtc_component = output_video
                        for component in additional_output_components:
                            if component not in same_components:
                                component.render()
                output_video.stream(
                    fn=self.event_handler,
                    inputs=self.additional_input_components,
                    outputs=[output_video],
                    trigger=button.click,
                    time_limit=self.time_limit,
                    concurrency_limit=self.concurrency_limit,  # type: ignore
                    send_input_on=ui_args.get("send_input_on", "change"),
                )
                if additional_output_components:
                    assert self.additional_outputs_handler
                    output_video.on_additional_outputs(
                        self.additional_outputs_handler,
                        concurrency_limit=self.concurrency_limit_gradio,  # type: ignore
                        inputs=additional_output_components,
                        outputs=additional_output_components,
                    )
        elif self.modality == "video" and self.mode == "send":
            with gr.Blocks() as demo:
                if not ui_args.get("hide_title"):
                    title = ui_args.get(
                        "title", "Video Streaming (Powered by FastRTC ⚡️)"
                    )
                    gr.HTML(self._format_title(title))
                    if ui_args.get("subtitle"):
                        gr.Markdown(self._format_subtitle(ui_args.get("subtitle")))
                with gr.Row():
                    if additional_input_components:
                        with gr.Column():
                            for component in additional_input_components:
                                component.render()
                    with gr.Column():
                        output_video = WebRTC(
                            label="Video Stream",
                            rtc_configuration=self.rtc_configuration,
                            track_constraints=self.track_constraints,
                            mode="send",
                            modality="video",
                            full_screen=ui_args.get("full_screen"),
                        )
                        self.webrtc_component = output_video
                        for component in additional_output_components:
                            if component not in same_components:
                                component.render()
                output_video.stream(
                    fn=self.event_handler,
                    inputs=[output_video] + additional_input_components,
                    outputs=[output_video],
                    time_limit=self.time_limit,
                    concurrency_limit=self.concurrency_limit,  # type: ignore
                    send_input_on=ui_args.get("send_input_on", "change"),
                )
                if additional_output_components:
                    assert self.additional_outputs_handler
                    output_video.on_additional_outputs(
                        self.additional_outputs_handler,
                        concurrency_limit=self.concurrency_limit_gradio,  # type: ignore
                        inputs=additional_output_components,
                        outputs=additional_output_components,
                    )
        elif self.modality == "video" and self.mode == "send-receive":
            if ui_args.get("full_screen") is False:
                css = """.my-column {display: flex !important; justify-content: center !important; align-items: center !important};"""
            else:
                css = """.gradio-container .sidebar {background-color: color-mix(in srgb, var(--block-background-fill) 50%, transparent) !important;}
                body.dark .gradio-container .sidebar {background-color: color-mix(in srgb, var(--block-background-fill) 50%, transparent) !important;}"""

            with gr.Blocks(css=css) as demo:
                title = ui_args.get("title", "Video Streaming (Powered by FastRTC ⚡️)")
                gr.HTML(self._format_title(title))
                if ui_args.get("subtitle"):
                    gr.Markdown(self._format_subtitle(ui_args.get("subtitle")))
                with gr.Column(elem_classes=["my-column"]):
                    with gr.Group(elem_classes=["my-group"]):
                        image = WebRTC(
                            label="Stream",
                            rtc_configuration=self.rtc_configuration,
                            track_constraints=self.track_constraints,
                            mode="send-receive",
                            modality="video",
                            full_screen=ui_args.get("full_screen"),
                        )
                        if ui_args.get("full_screen") is False:
                            for component in additional_input_components:
                                component.render()
                if additional_input_components:
                    input_components_to_render = [
                        component
                        for component in additional_input_components
                        if component not in same_components
                    ]
                    if (
                        input_components_to_render
                        and ui_args.get("full_screen") is not False
                    ):
                        with gr.Sidebar(position="left"):
                            for component in input_components_to_render:
                                component.render()
                if additional_output_components:
                    if ui_args.get("full_screen") is False:
                        with gr.Group():
                            for component in additional_output_components:
                                if component not in same_components:
                                    component.render()
                    else:
                        with gr.Sidebar(position="right"):
                            for component in additional_output_components:
                                if component not in same_components:
                                    component.render()
                self.webrtc_component = image
                image.stream(
                    fn=self.event_handler,
                    inputs=[image] + additional_input_components,
                    outputs=[image],
                    time_limit=self.time_limit,
                    concurrency_limit=self.concurrency_limit,  # type: ignore
                    send_input_on=ui_args.get("send_input_on", "change"),
                )
                if additional_output_components:
                    assert self.additional_outputs_handler
                    image.on_additional_outputs(
                        self.additional_outputs_handler,
                        inputs=additional_output_components,
                        outputs=additional_output_components,
                        concurrency_limit=self.concurrency_limit_gradio,  # type: ignore
                    )
        elif self.modality == "audio" and self.mode == "receive":
            with gr.Blocks() as demo:
                if not ui_args.get("hide_title"):
                    title = ui_args.get(
                        "title", "Audio Streaming (Powered by FastRTC ⚡️)"
                    )
                    gr.HTML(self._format_title(title))
                    if ui_args.get("subtitle"):
                        gr.Markdown(self._format_subtitle(ui_args.get("subtitle")))
                with gr.Row():
                    with gr.Column():
                        for component in additional_input_components:
                            component.render()
                        button = gr.Button("Start Stream", variant="primary")
                    with gr.Column():
                        output_video = WebRTC(
                            label="Audio Stream",
                            rtc_configuration=self.rtc_configuration,
                            track_constraints=self.track_constraints,
                            mode="receive",
                            modality="audio",
                            icon=ui_args.get("icon"),
                            icon_button_color=ui_args.get("icon_button_color"),
                            pulse_color=ui_args.get("pulse_color"),
                            icon_radius=ui_args.get("icon_radius"),
                            full_screen=ui_args.get("full_screen"),
                        )
                        self.webrtc_component = output_video
                        for component in additional_output_components:
                            if component not in same_components:
                                component.render()
                output_video.stream(
                    fn=self.event_handler,
                    inputs=self.additional_input_components,
                    outputs=[output_video],
                    trigger=button.click,
                    time_limit=self.time_limit,
                    concurrency_limit=self.concurrency_limit,  # type: ignore
                    send_input_on=ui_args.get("send_input_on", "change"),
                )
                if additional_output_components:
                    assert self.additional_outputs_handler
                    output_video.on_additional_outputs(
                        self.additional_outputs_handler,
                        inputs=additional_output_components,
                        outputs=additional_output_components,
                        concurrency_limit=self.concurrency_limit_gradio,  # type: ignore
                    )
        elif self.modality == "audio" and self.mode == "send":
            with gr.Blocks() as demo:
                if not ui_args.get("hide_title"):
                    title = ui_args.get(
                        "title", "Audio Streaming (Powered by FastRTC ⚡️)"
                    )
                    gr.HTML(self._format_title(title))
                    if ui_args.get("subtitle"):
                        gr.Markdown(self._format_subtitle(ui_args.get("subtitle")))
                if ui_args.get("variant", "textbox"):
                    with gr.Row():
                        if additional_input_components:
                            with gr.Column():
                                for component in additional_input_components:
                                    component.render()
                        diff_output_components = [
                            component
                            for component in additional_output_components
                            if component not in same_components
                        ]
                        if diff_output_components:
                            with gr.Column():
                                for component in diff_output_components:
                                    component.render()
                    with gr.Row():
                        image = WebRTC(
                            label="Stream",
                            rtc_configuration=self.rtc_configuration,
                            track_constraints=self.track_constraints,
                            mode="send",
                            modality="audio",
                            icon=ui_args.get("icon"),
                            icon_button_color=ui_args.get("icon_button_color"),
                            pulse_color=ui_args.get("pulse_color"),
                            icon_radius=ui_args.get("icon_radius"),
                            variant=ui_args.get("variant", "wave"),
                            full_screen=ui_args.get("full_screen"),
                        )
                else:
                    with gr.Row():
                        with gr.Column():
                            with gr.Group():
                                image = WebRTC(
                                    label="Stream",
                                    rtc_configuration=self.rtc_configuration,
                                    track_constraints=self.track_constraints,
                                    mode="send",
                                    modality="audio",
                                    icon=ui_args.get("icon"),
                                    icon_button_color=ui_args.get("icon_button_color"),
                                    pulse_color=ui_args.get("pulse_color"),
                                    icon_radius=ui_args.get("icon_radius"),
                                    variant=ui_args.get("variant", "wave"),
                                    full_screen=ui_args.get("full_screen"),
                                )
                                for component in additional_input_components:
                                    if component not in same_components:
                                        component.render()
                                if additional_output_components:
                                    with gr.Column():
                                        for component in additional_output_components:
                                            component.render()
                self.webrtc_component = image
                image.stream(
                    fn=self.event_handler,
                    inputs=[image] + additional_input_components,
                    outputs=[image],
                    time_limit=self.time_limit,
                    concurrency_limit=self.concurrency_limit,  # type: ignore
                    send_input_on=ui_args.get("send_input_on", "change"),
                )
                if additional_output_components:
                    assert self.additional_outputs_handler
                    image.on_additional_outputs(
                        self.additional_outputs_handler,
                        inputs=additional_output_components,
                        outputs=additional_output_components,
                        concurrency_limit=self.concurrency_limit_gradio,  # type: ignore
                    )
        elif self.modality == "audio" and self.mode == "send-receive":
            has_chatbot = False
            chatbot_component = None
            for component in additional_input_components + additional_output_components:
                if component.get_block_name() == "chatbot":
                    has_chatbot = True
                    chatbot_component = component
                    break

            use_component_layout = ui_args.get("full_screen") is False or has_chatbot
            if use_component_layout:
                css = """.my-group {max-width: 600px !important; max-height: 600 !important;}
                      .my-column {display: flex !important; justify-content: center !important; align-items: center !important};"""
            else:
                css = """.gradio-container .sidebar {background-color: rgba(255, 255, 255, 0.5) !important;}
                body.dark .gradio-container .sidebar {background-color: rgba(32, 32, 32, 0.5) !important;}"""
            with gr.Blocks(css=css) as demo:
                if not ui_args.get("hide_title"):
                    title = ui_args.get(
                        "title", "Audio Streaming (Powered by FastRTC ⚡️)"
                    )
                    gr.HTML(self._format_title(title))
                    if ui_args.get("subtitle"):
                        gr.Markdown(self._format_subtitle(ui_args.get("subtitle")))
                if ui_args.get("variant", "") == "textbox":
                    with gr.Row():
                        if additional_input_components:
                            with gr.Column():
                                for component in additional_input_components:
                                    component.render()
                        diff_output_components = [
                            component
                            for component in additional_output_components
                            if component not in same_components
                        ]
                        if diff_output_components:
                            with gr.Column():
                                for component in diff_output_components:
                                    component.render()
                    with gr.Row():
                        image = WebRTC(
                            label="Stream",
                            rtc_configuration=self.rtc_configuration,
                            track_constraints=self.track_constraints,
                            mode="send-receive",
                            modality="audio",
                            icon=ui_args.get("icon"),
                            icon_button_color=ui_args.get("icon_button_color"),
                            pulse_color=ui_args.get("pulse_color"),
                            icon_radius=ui_args.get("icon_radius"),
                            variant=ui_args.get("variant", "wave"),
                            full_screen=not use_component_layout,
                        )
                else:
                    if additional_output_components:
                        with gr.Row():
                            with gr.Column():
                                if chatbot_component:
                                    chatbot_component.render()
                                image = WebRTC(
                                    label="Stream",
                                    rtc_configuration=self.rtc_configuration,
                                    track_constraints=self.track_constraints,
                                    mode="send-receive",
                                    modality="audio",
                                    icon=ui_args.get("icon"),
                                    icon_button_color=ui_args.get("icon_button_color"),
                                    pulse_color=ui_args.get("pulse_color"),
                                    icon_radius=ui_args.get("icon_radius"),
                                    full_screen=not use_component_layout,
                                )
                                input_components_to_render = [
                                    component
                                    for component in additional_input_components
                                    if component not in same_components
                                ]
                                if input_components_to_render:
                                    with gr.Sidebar(position="left"):
                                        for component in input_components_to_render:
                                            component.render()
                            if use_component_layout:
                                if len(additional_output_components) > 1:
                                    with gr.Column():
                                        for component in additional_output_components:
                                            if component.get_block_name() != "chatbot":
                                                component.render()
                            else:
                                with gr.Sidebar(position="right"):
                                    for component in additional_output_components:
                                        component.render()
                    else:
                        with gr.Row():
                            with gr.Column():
                                image = WebRTC(
                                    label="Stream",
                                    rtc_configuration=self.rtc_configuration,
                                    track_constraints=self.track_constraints,
                                    mode="send-receive",
                                    modality="audio",
                                    icon=ui_args.get("icon"),
                                    icon_button_color=ui_args.get("icon_button_color"),
                                    pulse_color=ui_args.get("pulse_color"),
                                    icon_radius=ui_args.get("icon_radius"),
                                    full_screen=not use_component_layout,
                                )
                                input_components_to_render = [
                                    component
                                    for component in additional_input_components
                                    if component not in same_components
                                ]
                                if input_components_to_render:
                                    if use_component_layout:
                                        for component in input_components_to_render:
                                            component.render()
                                    else:
                                        with gr.Sidebar(position="left"):
                                            for component in input_components_to_render:
                                                component.render()
                self.webrtc_component = image
                image.stream(
                    fn=self.event_handler,
                    inputs=[image] + additional_input_components,
                    outputs=[image],
                    time_limit=self.time_limit,
                    concurrency_limit=self.concurrency_limit,  # type: ignore
                    send_input_on=ui_args.get("send_input_on", "change"),
                )
                if additional_output_components:
                    assert self.additional_outputs_handler
                    image.on_additional_outputs(
                        self.additional_outputs_handler,
                        inputs=additional_output_components,
                        outputs=additional_output_components,
                        concurrency_limit=self.concurrency_limit_gradio,  # type: ignore
                    )
        elif self.modality == "audio-video" and self.mode == "send-receive":
            if ui_args.get("full_screen") is False:
                css = """.my-group {max-width: 600px !important; max-height: 600 !important;}
                      .my-column {display: flex !important; justify-content: center !important; align-items: center !important};"""
            else:
                css = """.gradio-container .sidebar {background-color: rgba(255, 255, 255, 0.5) !important;}
                body.dark .gradio-container .sidebar {background-color: rgba(32, 32, 32, 0.5) !important;}"""
            with gr.Blocks(css=css) as demo:
                if not ui_args.get("hide_title"):
                    title = ui_args.get(
                        "title", "Video Streaming (Powered by FastRTC ⚡️)"
                    )
                    gr.HTML(self._format_title(title))
                    if ui_args.get("subtitle"):
                        gr.HTML(self._format_subtitle(ui_args.get("subtitle")))
                with gr.Row():
                    with gr.Column(elem_classes=["my-column"]):
                        with gr.Group(elem_classes=["my-group"]):
                            image = WebRTC(
                                label="Stream",
                                rtc_configuration=self.rtc_configuration,
                                track_constraints=self.track_constraints,
                                mode="send-receive",
                                modality="audio-video",
                                icon=ui_args.get("icon"),
                                icon_button_color=ui_args.get("icon_button_color"),
                                pulse_color=ui_args.get("pulse_color"),
                                icon_radius=ui_args.get("icon_radius"),
                                full_screen=ui_args.get("full_screen"),
                            )
                            self.webrtc_component = image
                            input_components_to_render = [
                                component
                                for component in additional_input_components
                                if component not in same_components
                            ]
                            if input_components_to_render:
                                if ui_args.get("full_screen") is False:
                                    for component in input_components_to_render:
                                        component.render()
                                else:
                                    with gr.Sidebar(position="left"):
                                        for component in input_components_to_render:
                                            component.render()
                    if additional_output_components:
                        if ui_args.get("full_screen") is False:
                            with gr.Column():
                                for component in additional_output_components:
                                    component.render()
                        else:
                            with gr.Sidebar(position="right"):
                                for component in additional_output_components:
                                    component.render()

                    image.stream(
                        fn=self.event_handler,
                        inputs=[image] + additional_input_components,
                        outputs=[image],
                        time_limit=self.time_limit,
                        concurrency_limit=self.concurrency_limit,  # type: ignore
                        send_input_on=ui_args.get("send_input_on", "change"),
                    )
                    if additional_output_components:
                        assert self.additional_outputs_handler
                        image.on_additional_outputs(
                            self.additional_outputs_handler,
                            inputs=additional_output_components,
                            outputs=additional_output_components,
                            concurrency_limit=self.concurrency_limit_gradio,  # type: ignore
                        )
        else:
            raise ValueError(f"Invalid modality: {self.modality} and mode: {self.mode}")
        return demo

    @property
    def ui(self) -> Blocks:
        """
        Get the Gradio Blocks UI instance associated with this stream.

        Returns:
            The `gradio.Blocks` UI instance.
        """
        return self._ui

    @ui.setter
    def ui(self, blocks: Blocks):
        """
        Set a custom Gradio Blocks UI for this stream.

        Args:
            blocks: The `gradio.Blocks` instance to use as the UI.
        """
        self._ui = blocks

    async def offer(self, body: Body):
        """
        Handle an incoming WebRTC offer via HTTP POST.

        Processes the SDP offer and ICE candidates from the client to establish
        a WebRTC connection.

        Args:
            body: A Pydantic model containing the SDP offer, optional ICE candidate,
                  type ('offer'), and a unique WebRTC ID.

        Returns:
            A dictionary containing the SDP answer generated by the server.
        """
        return await self.handle_offer(
            body.model_dump(), set_outputs=self.set_additional_outputs(body.webrtc_id)
        )

    async def get_rtc_configuration(self):
        if inspect.isfunction(self.rtc_configuration):
            if inspect.iscoroutinefunction(self.rtc_configuration):
                return await self.rtc_configuration()
            else:
                return anyio.to_thread.run_sync(self.rtc_configuration)  # type: ignore
        else:
            return self.rtc_configuration

    async def handle_incoming_call(self, request: Request):
        """
        Handle incoming telephone calls (e.g., via Twilio).

        Generates TwiML instructions to connect the incoming call to the
        WebSocket handler (`/telephone/handler`) for audio streaming.

        Args:
            request: The FastAPI Request object for the incoming call webhook.

        Returns:
            An HTMLResponse containing the TwiML instructions as XML.
        """
        from twilio.twiml.voice_response import Connect, VoiceResponse

        response = VoiceResponse()
        response.say("Connecting to the AI assistant.")
        connect = Connect()
        path = request.url.path.removesuffix("/telephone/incoming")
        connect.stream(url=f"wss://{request.url.hostname}{path}/telephone/handler")
        response.append(connect)
        response.say("The call has been disconnected.")
        return HTMLResponse(content=str(response), media_type="application/xml")

    async def telephone_handler(self, websocket: WebSocket):
        """
        The websocket endpoint for streaming audio over Twilio phone.

        Args:
            websocket: The incoming WebSocket connection object.
        """
        handler = cast(StreamHandlerImpl, self.event_handler.copy())  # type: ignore
        handler.phone_mode = True

        async def set_handler(s: str, a: WebSocketHandler):
            if len(self.connections) >= self.concurrency_limit:  # type: ignore
                await cast(WebSocket, a.websocket).send_json(
                    {
                        "status": "failed",
                        "meta": {
                            "error": "concurrency_limit_reached",
                            "limit": self.concurrency_limit,
                        },
                    }
                )
                await websocket.close()
                return

        ws = WebSocketHandler(
            handler, set_handler, lambda s: None, lambda s: lambda a: None
        )
        await ws.handle_websocket(websocket)

    async def websocket_offer(self, websocket: WebSocket):
        """
        Handle WebRTC signaling over a WebSocket connection.

        Provides an alternative to the HTTP POST `/webrtc/offer` endpoint for
        exchanging SDP offers/answers and ICE candidates via WebSocket messages.

        Args:
            websocket: The incoming WebSocket connection object.
        """
        handler = cast(StreamHandlerImpl, self.event_handler.copy())  # type: ignore
        handler.phone_mode = False

        async def set_handler(s: str, a: WebSocketHandler):
            if len(self.connections) >= self.concurrency_limit:  # type: ignore
                await cast(WebSocket, a.websocket).send_json(
                    {
                        "status": "failed",
                        "meta": {
                            "error": "concurrency_limit_reached",
                            "limit": self.concurrency_limit,
                        },
                    }
                )
                await websocket.close()
                return

            self.connections[s] = [a]  # type: ignore

        def clean_up(s):
            self.clean_up(s)

        ws = WebSocketHandler(
            handler, set_handler, clean_up, lambda s: self.set_additional_outputs(s)
        )
        await ws.handle_websocket(websocket)

    def fastphone(
        self,
        token: str | None = None,
        host: str = "127.0.0.1",
        port: int = 8000,
        **kwargs,
    ):
        """
        Launch the FastPhone service for telephone integration.

        Starts a local FastAPI server, mounts the stream, creates a public tunnel
        (using Gradio's tunneling), registers the tunnel URL with the FastPhone
        backend service, and prints the assigned phone number and access code.
        This allows users to call the phone number and interact with the stream handler.

        Args:
            token: Optional Hugging Face Hub token for authentication with the
                   FastPhone service. If None, attempts to find one automatically.
            host: The local host address to bind the server to.
            port: The local port to bind the server to.
            **kwargs: Additional keyword arguments passed to `uvicorn.run`.

        Raises:
            httpx.HTTPStatusError: If registration with the FastPhone service fails.
            RuntimeError: If running in Colab/Spaces without `rtc_configuration`.
        """
        import atexit
        import inspect
        import secrets
        import threading
        import time
        import urllib.parse

        import click
        import httpx
        import uvicorn
        from gradio.networking import setup_tunnel
        from gradio.tunneling import CURRENT_TUNNELS
        from huggingface_hub import get_token

        app = FastAPI()

        self.mount(app)

        t = threading.Thread(
            target=uvicorn.run,
            args=(app,),
            kwargs={"host": host, "port": port, **kwargs},
        )
        t.start()

        # Check if setup_tunnel accepts share_server_tls_certificate parameter
        setup_tunnel_params = inspect.signature(setup_tunnel).parameters
        tunnel_kwargs = {
            "local_host": host,
            "local_port": port,
            "share_token": secrets.token_urlsafe(32),
            "share_server_address": None,
        }
        if "share_server_tls_certificate" in setup_tunnel_params:
            tunnel_kwargs["share_server_tls_certificate"] = None

        url = setup_tunnel(**tunnel_kwargs)
        host = urllib.parse.urlparse(url).netloc

        URL = "https://api.fastrtc.org"
        try:
            r = httpx.post(
                URL + "/register",
                json={"url": host},
                headers={"Authorization": token or get_token() or ""},
            )
            r.raise_for_status()
        except Exception:
            URL = "https://fastrtc-fastphone.hf.space"
            r = httpx.post(
                URL + "/register",
                json={"url": host},
                headers={"Authorization": token or get_token() or ""},
            )
        r.raise_for_status()
        if r.status_code == 202:
            print(
                click.style("INFO", fg="orange")
                + ":\t  You have "
                + "run out of your quota"
            )
            return

        data = r.json()
        code = f"{data['code']}"
        phone_number = data["phone"]
        reset_date = data["reset_date"]
        print(
            click.style("INFO", fg="green")
            + ":\t  Your FastPhone is now live! Call "
            + click.style(phone_number, fg="cyan")
            + " and use code "
            + click.style(code, fg="cyan")
            + " to connect to your stream."
        )
        minutes = str(int(data["time_remaining"] // 60)).zfill(2)
        seconds = str(int(data["time_remaining"] % 60)).zfill(2)
        print(
            click.style("INFO", fg="green")
            + ":\t  You have "
            + click.style(f"{minutes}:{seconds}", fg="cyan")
            + " minutes remaining in your quota (Resetting on "
            + click.style(f"{reset_date}", fg="cyan")
            + ")"
        )
        print(
            click.style("INFO", fg="green")
            + ":\t  Visit "
            + click.style(
                "https://fastrtc.org/userguide/audio/#telephone-integration",
                fg="cyan",
            )
            + " for information on making your handler compatible with phone usage."
        )

        def unregister():
            httpx.post(
                URL + "/unregister",
                json={"url": host, "code": code},
                headers={"Authorization": token or get_token() or ""},
            )

        atexit.register(unregister)

        try:
            while True:
                time.sleep(0.1)
        except (KeyboardInterrupt, OSError):
            print(
                click.style("INFO", fg="green")
                + ":\t  Keyboard interruption in main thread... closing server."
            )
            unregister()
            t.join(timeout=5)
            for tunnel in CURRENT_TUNNELS:
                tunnel.kill()
