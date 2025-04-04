import asyncio
from typing import (
    Any,
    Literal,
    Optional,
    cast,
)
import pytest

from aiortc import AudioStreamTrack, RTCPeerConnection, RTCSessionDescription, VideoStreamTrack
from fastapi import FastAPI
from fastapi.testclient import TestClient
from pydantic import BaseModel

from fastrtc.tracks import HandlerType
from fastrtc.stream import Body
from fastrtc.webrtc_connection_mixin import WebRTCConnectionMixin


class MinimalTestStream(WebRTCConnectionMixin):
    def __init__(
        self,
        handler: HandlerType,
        *,
        mode: Literal["send-receive", "receive", "send"] = "send-receive",
        modality: Literal["video", "audio", "audio-video"] = "video",
        concurrency_limit: int | None | Literal["default"] = "default",
        time_limit: float | None = None,
        allow_extra_tracks: bool = False,
    ):
        WebRTCConnectionMixin.__init__(self)
        self.mode = mode
        self.modality = modality
        self.event_handler = handler
        self.concurrency_limit = cast(
            (int),
            1 if concurrency_limit in ["default", None] else concurrency_limit,
        )
        self.time_limit = time_limit
        self.allow_extra_tracks = allow_extra_tracks

    def mount(self, app: FastAPI, path: str = ""):
        from fastapi import APIRouter

        router = APIRouter(prefix=path)
        router.post("/webrtc/offer")(self.offer)
        app.include_router(router)

    async def offer(self, body: Body):
        return await self.handle_offer(
            body.model_dump(), set_outputs=self.set_additional_outputs(body.webrtc_id)
        )

@pytest.fixture()
def test_client_and_stream(
    handler,
    mode,
    modality,
    concurrency_limit,
    time_limit,
    allow_extra_tracks,
):
    app = FastAPI()
    stream = MinimalTestStream(
        handler,
        mode=mode,
        modality=modality,
        concurrency_limit=concurrency_limit,
        time_limit=time_limit,
        allow_extra_tracks=allow_extra_tracks,
    )
    stream.mount(app)
    test_client = TestClient(app)
    yield test_client, stream


class TestWebRTCConnectionMixin:

    @staticmethod
    async def setup_peer_connection(audio, video):
        pc = RTCPeerConnection()
        channel = pc.createDataChannel('test-data-channel')
        if audio:
            audio_track = AudioStreamTrack()
            pc.addTrack(audio_track)
        if video:
            video_track = VideoStreamTrack()
            pc.addTrack(video_track)

        await pc.setLocalDescription(await pc.createOffer())
        return pc, channel

    @staticmethod
    async def send_offer(
        pc,
        client,
        audio,
        video,
        webrtc_id='test_id',
        response_code=200,
        return_status_and_metadata=False,
    ):
        body = {
            'sdp': pc.localDescription.sdp,
            'type': pc.localDescription.type,
        }
        if webrtc_id is not None:
            body['webrtc_id'] = webrtc_id
        response = client.post(
            "/webrtc/offer",
            headers={
                'Content-Type': 'application/json'
            },
            json=body,
        )
        assert response.status_code == response_code
        if not response_code == 200:
            return
        out = response.json()
        if return_status_and_metadata:
            return out['status'], out['meta']
        assert 'type' in out and out['type'] == 'answer'
        assert 'webrtc-datachannel' in out['sdp']
        if audio:
            assert 'm=audio' in out['sdp']
        if video:
            assert 'm=video' in out['sdp']

        await pc.setRemoteDescription(RTCSessionDescription(out['sdp'], out['type']))

        # Allow data to stream
        await asyncio.sleep(0.5)

    @staticmethod
    async def close_peer_connection(pc):
        await pc.close()
        assert pc.connectionState == "closed"
        assert pc.iceConnectionState == "closed"
        assert pc.signalingState == "closed"

    @pytest.mark.asyncio
    @pytest.mark.parametrize('handler', [lambda x: x])
    @pytest.mark.parametrize('mode', ["send-receive"])
    @pytest.mark.parametrize('concurrency_limit', [1])
    @pytest.mark.parametrize('time_limit', [None])
    @pytest.mark.parametrize('allow_extra_tracks', [False])
    @pytest.mark.parametrize("modality, audio, video", [
        ("audio", False, False),  # This case is valid...
        ("audio", True, False),
        ("video", False, False),  # This case is valid...
        ("video", False, True),
    ])
    async def test_successful_connection(self, test_client_and_stream, audio, video):
        test_client, stream = test_client_and_stream
        pc, channel = await self.setup_peer_connection(audio, video)
        await self.send_offer(pc, test_client, audio, video)
        # TODO: Test stream? E.g., when no audio/video is
        await self.close_peer_connection(pc)

    @pytest.mark.asyncio
    @pytest.mark.parametrize('handler', [lambda x: x])
    @pytest.mark.parametrize('mode', ["send-receive"])
    @pytest.mark.parametrize('concurrency_limit', [1])
    @pytest.mark.parametrize('time_limit', [None])
    @pytest.mark.parametrize('allow_extra_tracks', [False])
    @pytest.mark.parametrize("modality, audio, video", [
        ("audio", True, True),
        ("audio", False, True),
        ("video", True, True),
        ("video", True, False),
    ])
    async def test_unsuccessful_connection(self, test_client_and_stream, audio, video):
        test_client, stream = test_client_and_stream
        pc, channel = await self.setup_peer_connection(audio, video)
        with pytest.raises(ValueError, match=r"Unsupported track kind .*"):
            await self.send_offer(pc, test_client, audio, video)
        await self.close_peer_connection(pc)


    @pytest.mark.asyncio
    @pytest.mark.parametrize('handler', [lambda x: x])
    @pytest.mark.parametrize('mode', ["send-receive"])
    @pytest.mark.parametrize('modality', ["audio"])
    @pytest.mark.parametrize('concurrency_limit', [1])
    @pytest.mark.parametrize('time_limit', [None])
    @pytest.mark.parametrize('allow_extra_tracks', [False])
    async def test_unsuccessful_webrtc_offer_no_webrtc_id(self, test_client_and_stream):
        audio = False
        video = False
        test_client, stream = test_client_and_stream
        pc, channel = await self.setup_peer_connection(audio, video)
        await self.send_offer(
            pc,
            test_client,
            audio,
            video,
            webrtc_id=None,
            response_code=422,
        )
        await self.send_offer(pc, test_client, audio, video)

    @pytest.mark.asyncio
    @pytest.mark.parametrize('handler', [lambda x: x])
    @pytest.mark.parametrize('mode', ["send-receive"])
    @pytest.mark.parametrize('concurrency_limit', [1])
    @pytest.mark.parametrize('time_limit', [None])
    @pytest.mark.parametrize('allow_extra_tracks', [False])
    @pytest.mark.parametrize("modality, audio, video", [
        ("dummy", True, False),
        ("dummy", False, True),
        ("dummy", True, True),
    ])
    async def test_incorrect_modality(self, test_client_and_stream, audio, video):
        test_client, stream = test_client_and_stream
        pc, channel = await self.setup_peer_connection(audio, video)
        with pytest.raises(ValueError, match=r"Modality must be .*"):
            await self.send_offer(pc, test_client, audio, video)
        await self.close_peer_connection(pc)


    @pytest.mark.asyncio
    @pytest.mark.parametrize('handler', [lambda x: x])
    @pytest.mark.parametrize('mode', ["send-receive"])
    @pytest.mark.parametrize('concurrency_limit', [1])
    @pytest.mark.parametrize('time_limit', [None])
    @pytest.mark.parametrize('allow_extra_tracks', [False])
    @pytest.mark.parametrize("modality, audio, video", [
        ("audio", True, False),
    ])
    async def test_concurrency_limit_reached(self, test_client_and_stream, audio, video):
        test_client, stream = test_client_and_stream
        pc1, channel = await self.setup_peer_connection(audio, video)
        pc2, channel = await self.setup_peer_connection(audio, video)
        await self.send_offer(pc1, test_client, audio, video)
        status, metadata = await self.send_offer(pc2, test_client, audio, video, return_status_and_metadata=True)

        assert status == 'failed'
        assert metadata == {'error': 'concurrency_limit_reached', 'limit': 1}

        await self.close_peer_connection(pc1)
        await self.close_peer_connection(pc2)


    @pytest.mark.asyncio
    @pytest.mark.parametrize('handler', [lambda x: x])
    @pytest.mark.parametrize('mode', ["send-receive"])
    @pytest.mark.parametrize('concurrency_limit', [1])
    @pytest.mark.parametrize('time_limit', [None])
    @pytest.mark.parametrize('allow_extra_tracks', [True])
    @pytest.mark.parametrize("modality, audio, video", [
        ("video", True, True),
    ])
    async def test_successful_connection_allow_extra_tracks(self, test_client_and_stream, audio, video):
        test_client, stream = test_client_and_stream
        pc, channel = await self.setup_peer_connection(audio, video)
        await self.send_offer(pc, test_client, audio, video)
        await self.close_peer_connection(pc)