# TURN Credential Utils

## `get_turn_credentials_async`

```python
async def get_turn_credentials_async(
    method: Literal["hf", "twilio", "cloudflare"] = "cloudflare",
    **kwargs
):
```

Retrieves TURN credentials from the specified provider.
This can be passed directly to the Stream class and it will be called for each
unique WebRTC connection via the Gradio UI. When mounting to FastAPI, call this function
yourself to return the credentials to the frontend client, for example, in the
index route, you can call this function and embed the credentials in the source code of the index.html.
See the FastRTC spaces at hf.co/fastrtc for an example.

Acts as a dispatcher function to call the appropriate credential retrieval
function based on the method specified.

Args:
```
method: Literal["hf", "twilio", "cloudflare"] | None
    The provider to use. 'hf' uses the deprecated Hugging Face endpoint.
    'cloudflare' uses either Cloudflare keys or the HF endpoint.
    'twilio' uses the Twilio API. Defaults to "cloudflare".
**kwargs: 
    Additional keyword arguments passed directly to the underlying
    provider-specific function (e.g., `token`, `ttl` for 'hf';
    `twilio_sid`, `twilio_token` for 'twilio'; `turn_key_id`,
    `turn_key_api_token`, `hf_token`, `ttl` for 'cloudflare').
```

Returns:
```
dict:
    A dictionary containing the TURN credentials from the chosen provider.
```

Raises:
```
ValueError:
    If an invalid method is specified.
    Also raises exceptions from the underlying provider functions (see their
    docstrings).
```

Example
```python
>>> from fastrtc import get_turn_credentials_async, Stream
>>> credentials = await get_turn_credentials_async()
>>> print(credentials)
>>> # Can pass directly to stream class
>>> stream = Stream(..., rtc_configuration=get_turn_credentials_async)
```

## `get_turn_credentials`

```python
def get_turn_credentials(
    method: Literal["hf", "twilio", "cloudflare"] = "cloudflare",
    **kwargs
):
```

Retrieves TURN credentials from the specified provider.
This can be passed directly to the Stream class and it will be called for each
unique WebRTC connection via the Gradio UI. When mounting to FastAPI, call this function
yourself to return the credentials to the frontend client, for example, in the
index route, you can call this function and embed the credentials in the source code of the index.html.
See the FastRTC spaces at hf.co/fastrtc for an example.

Acts as a dispatcher function to call the appropriate credential retrieval
function based on the method specified.

Args:
```
method: Literal["hf", "twilio", "cloudflare"] | None
    The provider to use. 'hf' uses the deprecated Hugging Face endpoint.
    'cloudflare' uses either Cloudflare keys or the HF endpoint.
    'twilio' uses the Twilio API. Defaults to "cloudflare".
**kwargs: 
    Additional keyword arguments passed directly to the underlying
    provider-specific function (e.g., `token`, `ttl` for 'hf';
    `twilio_sid`, `twilio_token` for 'twilio'; `turn_key_id`,
    `turn_key_api_token`, `hf_token`, `ttl` for 'cloudflare').
```

Returns:
```
dict:
    A dictionary containing the TURN credentials from the chosen provider.
```

Raises:
```
ValueError:
    If an invalid method is specified.
    Also raises exceptions from the underlying provider functions (see their
    docstrings).
```

Example
```python
>>> from fastrtc import get_turn_credentials, Stream
>>> credentials = get_turn_credentials()
>>> print(credentials)
>>> # Can pass directly to stream class
>>> stream = Stream(..., rtc_configuration=get_turn_credentials_async)
```

## `get_cloudflare_turn_credentials_async`

```python
async def get_cloudflare_turn_credentials_async(
    turn_key_id=None,
    turn_key_api_token=None,
    hf_token=None,
    ttl=600,
    client: httpx.AsyncClient | None = None,
):
```

Asynchronously retrieves TURN credentials from Cloudflare or Hugging Face.

Asynchronously fetches TURN server credentials either directly from Cloudflare
using API keys or via the Hugging Face TURN endpoint using an HF token. The HF
token method takes precedence if provided.

Args:
```
turn_key_id (str, optional):
    Cloudflare TURN key ID. Defaults to None,
    in which case the CLOUDFLARE_TURN_KEY_ID environment variable is used.
turn_key_api_token (str, optional):
    Cloudflare TURN key API token.
    Defaults to None, in which case the CLOUDFLARE_TURN_KEY_API_TOKEN
    environment variable is used.
hf_token (str, optional):
    Hugging Face API token. If provided, this method
    is used instead of Cloudflare keys.
    Defaults to None, in which case the HF_TOKEN environment variable is used.
ttl (int, optional): Time-to-live for the credentials in seconds.
    Defaults to 600.
client (httpx.AsyncClient | None, optional): An existing httpx async client
    to use for the request. If None, a new client is created per request.
    Defaults to None.
```

Returns:
```
dict: A dictionary containing the TURN credentials (ICE servers).
```

Raises:
```
ValueError: If neither HF token nor Cloudflare keys (either as arguments
    or environment variables) are provided.
Exception: If the request to the credential server fails.
```

Example
```python
>>> from fastrtc import get_cloudflare_turn_crendials_async, Stream
>>> credentials = await get_cloudflare_turn_credentials_async()
>>> print(credentials)
>>> # Can pass directly to stream class
>>> stream = Stream(..., rtc_configuration=get_turn_credentials_async)
```


## `get_cloudflare_turn_credentials`

```python
def get_cloudflare_turn_credentials(
    turn_key_id=None,
    turn_key_api_token=None,
    hf_token=None,
    ttl=600,
    client: httpx.AsyncClient | None = None,
):
```

Retrieves TURN credentials from Cloudflare or Hugging Face.

Fetches TURN server credentials either directly from Cloudflare using API keys
or via the Hugging Face TURN endpoint using an HF token. The HF token method
takes precedence if provided.

Args:
```
turn_key_id (str, optional):
    Cloudflare TURN key ID. Defaults to None,
    in which case the CLOUDFLARE_TURN_KEY_ID environment variable is used.
turn_key_api_token (str, optional):
    Cloudflare TURN key API token.
    Defaults to None, in which case the CLOUDFLARE_TURN_KEY_API_TOKEN
    environment variable is used.
hf_token (str, optional):
    Hugging Face API token. If provided, this method
    is used instead of Cloudflare keys.
    Defaults to None, in which case the HF_TOKEN environment variable is used.
ttl (int, optional): Time-to-live for the credentials in seconds.
    Defaults to 600.
client (httpx.AsyncClient | None, optional): An existing httpx async client
    to use for the request. If None, a new client is created per request.
    Defaults to None.
```

Returns:
```
dict: A dictionary containing the TURN credentials (ICE servers).
```

Raises:
```
ValueError: If neither HF token nor Cloudflare keys (either as arguments
    or environment variables) are provided.
Exception: If the request to the credential server fails.
```

Example
```python
>>> from fastrtc import get_cloudflare_turn_crendials_async, Stream
>>> credentials = await get_cloudflare_turn_credentials_async()
>>> print(credentials)
>>> # Can pass directly to stream class
>>> stream = Stream(..., rtc_configuration=get_turn_credentials_async)
```

## `get_twilio_turn_credentials`

```python
def get_twilio_turn_credentials(
    twilio_sid=None,
    twilio_token=None):
```

Retrieves TURN credentials from Twilio.

Uses the Twilio REST API to generate temporary TURN credentials. Requires
the `twilio` package to be installed.

Args:
```
twilio_sid (str, optional):
    Twilio Account SID. Defaults to None, in which
    case the TWILIO_ACCOUNT_SID environment variable is used.
twilio_token (str, optional): 
    Twilio Auth Token. Defaults to None, in which
    case the TWILIO_AUTH_TOKEN environment variable is used.
```
Returns:
```
dict:
    A dictionary containing the TURN credentials formatted for WebRTC,
    including 'iceServers' and 'iceTransportPolicy'.
```

Raises:
```
ImportError: If the `twilio` package is not installed.
ValueError: If Twilio credentials (SID and token) are not provided either
    as arguments or environment variables.
TwilioRestException: If the Twilio API request fails.
```