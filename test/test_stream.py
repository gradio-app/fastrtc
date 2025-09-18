import numpy as np
from fastapi import FastAPI, testclient
from fastrtc import Stream, StreamHandler
from fastrtc.tracks import EmitType
from numpy import typing as npt


class MockStreamHandler(StreamHandler):
    def receive(self, frame: tuple[int, npt.NDArray[np.int16]]) -> None:
        pass

    def emit(self) -> EmitType:
        pass

    def copy(self) -> StreamHandler:
        pass


def test_tags_are_correctly_mounted():
    tags = [
        {
            "name": "fastrtc",
            "description": "awesome fastrtc endpoints",
        }
    ]
    app = FastAPI(openapi_tags=tags)
    client = testclient.TestClient(app=app)

    response_handler = MockStreamHandler()

    stream = Stream(
        handler=response_handler,
        mode="send-receive",
        modality="audio",
    )
    stream.mount(app, path="/api/v1/llm", tags=["fastrtc"])

    swagger = client.get("openapi.json").json()

    assert swagger["paths"]["/api/v1/llm/webrtc/offer"]["post"]["tags"] == ["fastrtc"]
    assert swagger["tags"] == tags
