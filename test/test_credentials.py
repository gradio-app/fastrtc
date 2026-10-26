import pytest

from fastrtc.credentials import (
    get_local_rtc_configuration,
    get_local_rtc_configuration_async,
    get_turn_credentials,
    get_turn_credentials_async,
)


def test_local_rtc_configuration_defaults_to_host_candidates(monkeypatch):
    monkeypatch.delenv("FASTRTC_ICE_SERVERS", raising=False)
    monkeypatch.delenv("FASTRTC_TURN_HOST", raising=False)
    monkeypatch.delenv("FASTRTC_ICE_TRANSPORT_POLICY", raising=False)

    assert get_local_rtc_configuration() == {"iceServers": []}


def test_local_rtc_configuration_builds_turn_server_from_env(monkeypatch):
    monkeypatch.delenv("FASTRTC_ICE_SERVERS", raising=False)
    monkeypatch.setenv("FASTRTC_TURN_HOST", "10.0.0.5")
    monkeypatch.setenv("FASTRTC_TURN_PORT", "3478")
    monkeypatch.setenv("FASTRTC_TURN_USERNAME", "local-user")
    monkeypatch.setenv("FASTRTC_TURN_CREDENTIAL", "local-pass")
    monkeypatch.setenv("FASTRTC_TURN_TRANSPORT", "tcp")
    monkeypatch.setenv("FASTRTC_ICE_TRANSPORT_POLICY", "relay")

    assert get_local_rtc_configuration() == {
        "iceServers": [
            {
                "urls": "turn:10.0.0.5:3478?transport=tcp",
                "username": "local-user",
                "credential": "local-pass",
            }
        ],
        "iceTransportPolicy": "relay",
    }


def test_local_rtc_configuration_brackets_ipv6_host(monkeypatch):
    monkeypatch.delenv("FASTRTC_ICE_SERVERS", raising=False)
    monkeypatch.delenv("FASTRTC_ICE_TRANSPORT_POLICY", raising=False)

    assert get_local_rtc_configuration(host="::1", port=3478) == {
        "iceServers": [{"urls": "turn:[::1]:3478"}]
    }


def test_local_rtc_configuration_reads_json_env(monkeypatch):
    monkeypatch.setenv(
        "FASTRTC_ICE_SERVERS",
        '[{"urls": "stun:10.0.0.5:3478"}]',
    )

    assert get_local_rtc_configuration() == {
        "iceServers": [{"urls": "stun:10.0.0.5:3478"}]
    }


def test_get_turn_credentials_dispatches_local():
    assert get_turn_credentials(
        "local",
        host="turn.local",
        username="user",
        credential="pass",
    ) == {
        "iceServers": [
            {
                "urls": "turn:turn.local:3478",
                "username": "user",
                "credential": "pass",
            }
        ]
    }


def test_get_turn_credentials_defaults_to_local(monkeypatch):
    monkeypatch.delenv("FASTRTC_ICE_SERVERS", raising=False)
    monkeypatch.delenv("FASTRTC_TURN_HOST", raising=False)
    monkeypatch.delenv("FASTRTC_ICE_TRANSPORT_POLICY", raising=False)

    assert get_turn_credentials() == {"iceServers": []}


@pytest.mark.asyncio
async def test_get_turn_credentials_async_dispatches_local():
    assert await get_turn_credentials_async("local", host="turn.local") == {
        "iceServers": [{"urls": "turn:turn.local:3478"}]
    }


@pytest.mark.asyncio
async def test_get_turn_credentials_async_defaults_to_local(monkeypatch):
    monkeypatch.delenv("FASTRTC_ICE_SERVERS", raising=False)
    monkeypatch.delenv("FASTRTC_TURN_HOST", raising=False)
    monkeypatch.delenv("FASTRTC_ICE_TRANSPORT_POLICY", raising=False)

    assert await get_turn_credentials_async() == {"iceServers": []}


@pytest.mark.asyncio
async def test_get_local_rtc_configuration_async():
    assert await get_local_rtc_configuration_async(ice_servers=[]) == {
        "iceServers": []
    }
