import os
import warnings
from typing import Literal

import httpx

CLOUDFLARE_FASTRTC_TURN_URL = "https://turn.fastrtc.org/credentials"

async_httpx_client = httpx.AsyncClient()


def _format_response(response):
    if response.is_success:
        return response.json()
    else:
        raise Exception(
            f"Failed to get TURN credentials: {response.status_code} {response.text}"
        )


def get_hf_turn_credentials(token=None, ttl=600):
    """Retrieves TURN credentials from Hugging Face (deprecated).

    This function fetches TURN server credentials using a Hugging Face token.
    It is deprecated and `get_cloudflare_turn_credentials` should be used instead.

    Args:
        token (str, optional): Hugging Face API token. Defaults to None, in which
            case the HF_TOKEN environment variable is used.
        ttl (int, optional): Time-to-live for the credentials in seconds.
            Defaults to 600.

    Returns:
        dict: A dictionary containing the TURN credentials.

    Raises:
        ValueError: If no token is provided and the HF_TOKEN environment variable
            is not set.
        Exception: If the request to the TURN server fails.
    """
    warnings.warn(
        "get_hf_turn_credentials is deprecated. Use get_cloudflare_turn_credentials instead.",
        UserWarning,
    )
    if token is None:
        token = os.getenv("HF_TOKEN")
    if token is None:
        raise ValueError(
            "HF_TOKEN environment variable must be set or token must be provided to use get_hf_turn_credentials"
        )
    response = httpx.get(
        CLOUDFLARE_FASTRTC_TURN_URL,
        headers={
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json",
        },
        params={"ttl": ttl},
    )
    return _format_response(response)


async def get_hf_turn_credentials_async(
    token=None, ttl=600, client: httpx.AsyncClient | None = None
):
    """Asynchronously retrieves TURN credentials from Hugging Face (deprecated).

    This function asynchronously fetches TURN server credentials using a Hugging Face
    token. It is deprecated and `get_cloudflare_turn_credentials_async` should be
    used instead.

    Args:
        token (str, optional): Hugging Face API token. Defaults to None, in which
            case the HF_TOKEN environment variable is used.
        ttl (int, optional): Time-to-live for the credentials in seconds.
            Defaults to 600.
        client (httpx.AsyncClient | None, optional): An existing httpx async client
            to use for the request. If None, a default client is used. Defaults to None.

    Returns:
        dict: A dictionary containing the TURN credentials.

    Raises:
        ValueError: If no token is provided and the HF_TOKEN environment variable
            is not set.
        Exception: If the request to the TURN server fails.
    """
    warnings.warn(
        "get_hf_turn_credentials_async is deprecated. Use get_cloudflare_turn_credentials_async instead.",
        UserWarning,
    )
    if client is None:
        client = async_httpx_client

    if token is None:
        token = os.getenv("HF_TOKEN")
    if token is None:
        raise ValueError(
            "HF_TOKEN environment variable must be set or token must be provided to use get_hf_turn_credentials"
        )
    response = await client.get(
        "https://turn.fastrtc.org/credentials",
        headers={"Authorization": f"Bearer {token}"},
        params={"ttl": ttl},
    )
    return _format_response(response)


def get_cloudflare_turn_credentials(
    turn_key_id=None, turn_key_api_token=None, hf_token=None, ttl=600
):
    """Retrieves TURN credentials from Cloudflare or Hugging Face.

    Fetches TURN server credentials either directly from Cloudflare using API keys
    or via the Hugging Face TURN endpoint using an HF token. The HF token method
    takes precedence if provided.

    Args:
        turn_key_id (str, optional): Cloudflare TURN key ID. Defaults to None,
            in which case the CLOUDFLARE_TURN_KEY_ID environment variable is used.
        turn_key_api_token (str, optional): Cloudflare TURN key API token.
            Defaults to None, in which case the CLOUDFLARE_TURN_KEY_API_TOKEN
            environment variable is used.
        hf_token (str, optional): Hugging Face API token. If provided, this method
            is used instead of Cloudflare keys. Defaults to None, in which case
            the HF_TOKEN environment variable is used.
        ttl (int, optional): Time-to-live for the credentials in seconds.
            Defaults to 600.

    Returns:
        dict: A dictionary containing the TURN credentials (ICE servers).

    Raises:
        ValueError: If neither HF token nor Cloudflare keys (either as arguments
            or environment variables) are provided.
        Exception: If the request to the credential server fails.
    """
    if hf_token is None:
        hf_token = os.getenv("HF_TOKEN")
    if hf_token:
        return httpx.get(
            CLOUDFLARE_FASTRTC_TURN_URL,
            headers={"Authorization": f"Bearer {hf_token}"},
            params={"ttl": ttl},
        ).json()
    else:
        if turn_key_id is None or turn_key_api_token is None:
            turn_key_id = os.getenv("CLOUDFLARE_TURN_KEY_ID")
            turn_key_api_token = os.getenv("CLOUDFLARE_TURN_KEY_API_TOKEN")
        if turn_key_id is None or turn_key_api_token is None:
            raise ValueError(
                "HF_TOKEN or CLOUDFLARE_TURN_KEY_ID and CLOUDFLARE_TURN_KEY_API_TOKEN must be set to use get_cloudflare_turn_credentials_sync"
            )
        response = httpx.post(
            f"https://rtc.live.cloudflare.com/v1/turn/keys/{turn_key_id}/credentials/generate-ice-servers",
            headers={
                "Authorization": f"Bearer {turn_key_api_token}",
                "Content-Type": "application/json",
            },
            json={"ttl": ttl},
        )
        if response.is_success:
            return response.json()
        else:
            raise Exception(
                f"Failed to get TURN credentials: {response.status_code} {response.text}"
            )


async def get_cloudflare_turn_credentials_async(
    turn_key_id=None,
    turn_key_api_token=None,
    hf_token=None,
    ttl=600,
    client: httpx.AsyncClient | None = None,
):
    """Asynchronously retrieves TURN credentials from Cloudflare or Hugging Face.

    Asynchronously fetches TURN server credentials either directly from Cloudflare
    using API keys or via the Hugging Face TURN endpoint using an HF token. The HF
    token method takes precedence if provided.

    Args:
        turn_key_id (str, optional): Cloudflare TURN key ID. Defaults to None,
            in which case the CLOUDFLARE_TURN_KEY_ID environment variable is used.
        turn_key_api_token (str, optional): Cloudflare TURN key API token.
            Defaults to None, in which case the CLOUDFLARE_TURN_KEY_API_TOKEN
            environment variable is used.
        hf_token (str, optional): Hugging Face API token. If provided, this method
            is used instead of Cloudflare keys. Defaults to None, in which case
            the HF_TOKEN environment variable is used.
        ttl (int, optional): Time-to-live for the credentials in seconds.
            Defaults to 600.
        client (httpx.AsyncClient | None, optional): An existing httpx async client
            to use for the request. If None, a new client is created per request.
            Defaults to None.

    Returns:
        dict: A dictionary containing the TURN credentials (ICE servers).

    Raises:
        ValueError: If neither HF token nor Cloudflare keys (either as arguments
            or environment variables) are provided.
        Exception: If the request to the credential server fails.
    """
    if client is None:
        client = async_httpx_client

    if hf_token is None:
        hf_token = os.getenv("HF_TOKEN", "").strip()
    if hf_token:
        async with httpx.AsyncClient() as client:
            response = await client.get(
                CLOUDFLARE_FASTRTC_TURN_URL,
                headers={"Authorization": f"Bearer {hf_token}"},
                params={"ttl": ttl},
            )
            return _format_response(response)
    else:
        if turn_key_id is None or turn_key_api_token is None:
            turn_key_id = os.getenv("CLOUDFLARE_TURN_KEY_ID")
            turn_key_api_token = os.getenv("CLOUDFLARE_TURN_KEY_API_TOKEN")
        if turn_key_id is None or turn_key_api_token is None:
            raise ValueError(
                "HF_TOKEN or CLOUDFLARE_TURN_KEY_ID and CLOUDFLARE_TURN_KEY_API_TOKEN must be set to use get_cloudflare_turn_credentials"
            )
        async with httpx.AsyncClient() as client:
            response = await client.post(
                f"https://rtc.live.cloudflare.com/v1/turn/keys/{turn_key_id}/credentials/generate-ice-servers",
                headers={
                    "Authorization": f"Bearer {turn_key_api_token}",
                    "Content-Type": "application/json",
                },
                json={"ttl": ttl},
            )
            if response.is_success:
                return response.json()
            else:
                raise Exception(
                    f"Failed to get TURN credentials: {response.status_code} {response.text}"
                )


def get_twilio_turn_credentials(twilio_sid=None, twilio_token=None):
    """Retrieves TURN credentials from Twilio.

    Uses the Twilio REST API to generate temporary TURN credentials. Requires
    the `twilio` package to be installed.

    Args:
        twilio_sid (str, optional): Twilio Account SID. Defaults to None, in which
            case the TWILIO_ACCOUNT_SID environment variable is used.
        twilio_token (str, optional): Twilio Auth Token. Defaults to None, in which
            case the TWILIO_AUTH_TOKEN environment variable is used.

    Returns:
        dict: A dictionary containing the TURN credentials formatted for WebRTC,
              including 'iceServers' and 'iceTransportPolicy'.

    Raises:
        ImportError: If the `twilio` package is not installed.
        ValueError: If Twilio credentials (SID and token) are not provided either
            as arguments or environment variables.
        TwilioRestException: If the Twilio API request fails.
    """
    try:
        from twilio.rest import Client
    except ImportError:
        raise ImportError("Please install twilio with `pip install twilio`")

    if not twilio_sid and not twilio_token:
        twilio_sid = os.environ.get("TWILIO_ACCOUNT_SID")
        twilio_token = os.environ.get("TWILIO_AUTH_TOKEN")

    client = Client(twilio_sid, twilio_token)

    token = client.tokens.create()

    return {
        "iceServers": token.ice_servers,
        "iceTransportPolicy": "relay",
    }


def get_turn_credentials(
    method: Literal["hf", "twilio", "cloudflare"] = "cloudflare", **kwargs
):
    """Retrieves TURN credentials from the specified provider.

    Acts as a dispatcher function to call the appropriate credential retrieval
    function based on the method specified.

    Args:
        method (Literal["hf", "twilio", "cloudflare"], optional): The provider
            to use. 'hf' uses the deprecated Hugging Face endpoint. 'cloudflare'
            uses either Cloudflare keys or the HF endpoint. 'twilio' uses the
            Twilio API. Defaults to "cloudflare".
        **kwargs: Additional keyword arguments passed directly to the underlying
            provider-specific function (e.g., `token`, `ttl` for 'hf';
            `twilio_sid`, `twilio_token` for 'twilio'; `turn_key_id`,
            `turn_key_api_token`, `hf_token`, `ttl` for 'cloudflare').

    Returns:
        dict: A dictionary containing the TURN credentials from the chosen provider.

    Raises:
        ValueError: If an invalid method is specified.
        Also raises exceptions from the underlying provider functions (see their
        docstrings).
    """
    if method == "hf":
        warnings.warn(
            "Method 'hf' is deprecated. Use 'cloudflare' instead.", UserWarning
        )
        # Ensure only relevant kwargs are passed
        hf_kwargs = {k: v for k, v in kwargs.items() if k in ["token", "ttl"]}
        return get_hf_turn_credentials(**hf_kwargs)
    elif method == "cloudflare":
        # Ensure only relevant kwargs are passed
        cf_kwargs = {
            k: v
            for k, v in kwargs.items()
            if k in ["turn_key_id", "turn_key_api_token", "hf_token", "ttl"]
        }
        return get_cloudflare_turn_credentials(**cf_kwargs)
    elif method == "twilio":
        # Ensure only relevant kwargs are passed
        twilio_kwargs = {
            k: v for k, v in kwargs.items() if k in ["twilio_sid", "twilio_token"]
        }
        return get_twilio_turn_credentials(**twilio_kwargs)
    else:
        raise ValueError("Invalid method. Must be 'hf', 'twilio', or 'cloudflare'")


async def get_turn_credentials_async(
    method: Literal["hf", "twilio", "cloudflare"] = "cloudflare", **kwargs
):
    """Asynchronously retrieves TURN credentials from the specified provider.

    Acts as an async dispatcher function to call the appropriate async credential
    retrieval function based on the method specified.

    Args:
        method (Literal["hf", "twilio", "cloudflare"], optional): The provider
            to use. 'hf' uses the deprecated Hugging Face endpoint. 'cloudflare'
            uses either Cloudflare keys or the HF endpoint. 'twilio' is not
            supported asynchronously by this function yet. Defaults to "cloudflare".
        **kwargs: Additional keyword arguments passed directly to the underlying
            provider-specific async function (e.g., `token`, `ttl`, `client` for 'hf';
            `turn_key_id`, `turn_key_api_token`, `hf_token`, `ttl`, `client` for
            'cloudflare').

    Returns:
        dict: A dictionary containing the TURN credentials from the chosen provider.

    Raises:
        ValueError: If an invalid or unsupported method is specified (currently
            'twilio' is not supported asynchronously here).
        NotImplementedError: If method 'twilio' is requested.
        Also raises exceptions from the underlying provider functions (see their
        docstrings).
    """
    if method == "hf":
        warnings.warn(
            "Method 'hf' is deprecated. Use 'cloudflare' instead.", UserWarning
        )
        # Ensure only relevant kwargs are passed
        hf_kwargs = {k: v for k, v in kwargs.items() if k in ["token", "ttl", "client"]}
        return await get_hf_turn_credentials_async(**hf_kwargs)
    elif method == "cloudflare":
        # Ensure only relevant kwargs are passed
        cf_kwargs = {
            k: v
            for k, v in kwargs.items()
            if k in ["turn_key_id", "turn_key_api_token", "hf_token", "ttl", "client"]
        }
        return await get_cloudflare_turn_credentials_async(**cf_kwargs)
    elif method == "twilio":
        # Twilio client library doesn't have a standard async interface for this.
        # You might need to run the sync version in an executor or use a different library.
        raise NotImplementedError(
            "Async retrieval for Twilio credentials is not implemented."
        )
    else:
        raise ValueError("Invalid method. Must be 'hf', 'twilio', or 'cloudflare'")
