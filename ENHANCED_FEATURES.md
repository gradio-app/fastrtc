# FastRTC Enhanced Features

This document provides comprehensive examples and best practices for using the enhanced FastRTC features.

## Enhanced Error Handling

FastRTC now includes comprehensive error handling with custom exception classes and error management utilities.

### Basic Error Handling

```python
from fastrtc import FastRTCError, AudioProcessingError, handle_exception, safe_execute

# Custom exception handling
try:
    # Your audio processing code
    process_audio(audio_data)
except Exception as e:
    handle_exception(e, context="Audio processing", severity="error")

# Safe execution with fallback
result = safe_execute(
    risky_function,
    *args,
    context="Risky operation",
    default_return=None,
    log_level=logging.WARNING
)
```

### Production-Ready Error Management

```python
from fastrtc import ErrorHandler, error_handler

# Global error handler
error_handler.handle_error(
    exception,
    context="Stream processing",
    severity="error"
)

# Custom error handler
custom_handler = ErrorHandler("MyApp")
custom_handler.handle_error(exception, context="Custom context")

# Get error statistics
stats = error_handler.get_error_stats()
recent_errors = error_handler.get_recent_errors(limit=10)
```

## Performance Monitoring

Monitor and optimize your FastRTC applications with built-in performance tracking.

### Basic Performance Monitoring

```python
from fastrtc import PerformanceMonitor, monitor_performance, performance_monitor

# Decorator-based monitoring
@monitor_performance("audio_processing")
def process_audio(audio):
    # Your processing logic
    return processed_audio

# Manual monitoring
monitor = PerformanceMonitor("MyApp")
monitor.start_timer("operation")
# ... do work ...
duration = monitor.end_timer("operation")

# Global performance monitor
performance_monitor.start_timer("stream_processing")
# ... do work ...
duration = performance_monitor.end_timer("stream_processing")

# Get performance statistics
stats = performance_monitor.get_stats()
```

### Async Performance Monitoring

```python
from fastrtc import async_monitor_performance

@async_monitor_performance("async_processing")
async def async_process_audio(audio):
    # Your async processing logic
    return processed_audio
```

## Retry Logic and Resilience

Build resilient applications with automatic retry mechanisms.

### Basic Retry Logic

```python
from fastrtc import retry_on_failure, async_retry_on_failure

@retry_on_failure(max_retries=3, delay=1.0, backoff_factor=2.0)
def unreliable_operation():
    # Operation that might fail
    return result

@async_retry_on_failure(max_retries=3, delay=0.5)
async def async_unreliable_operation():
    # Async operation that might fail
    return result
```

## Audio Processing Utilities

Enhanced audio processing with validation, normalization, and format conversion.

### Audio Validation and Processing

```python
from fastrtc import (
    validate_audio_format,
    normalize_audio,
    audio_to_mono,
    resample_audio
)

# Validate audio format
if validate_audio_format(audio):
    # Process audio
    pass

# Normalize audio levels
normalized_audio = normalize_audio(audio, target_level=0.8)

# Convert stereo to mono
mono_audio = audio_to_mono(audio)

# Resample audio
resampled_audio = resample_audio(audio, target_sample_rate=16000)
```

## Production-Ready Streams

Create production-ready applications with comprehensive error handling and monitoring.

### Enhanced Audio Stream

```python
from fastrtc import EnhancedAudioStream, Stream

# Create enhanced stream with built-in error handling
enhanced_stream = EnhancedAudioStream(
    Stream(
        handler=your_audio_handler,
        modality="audio",
        mode="send-receive"
    )
)

# Process audio with automatic error handling
processed_audio = enhanced_stream.process_audio(audio)

# Get performance statistics
stats = enhanced_stream.get_performance_stats()
```

### Production-Ready FastAPI App

```python
from fastrtc import ProductionReadyStream, create_production_echo_app

# Create production-ready app
app = create_production_echo_app()

# Or create custom production app
production_stream = ProductionReadyStream(
    handler_func=your_handler,
    modality="audio",
    mode="send-receive"
)
app = production_stream.create_fastapi_app()

# App includes:
# - Health check endpoint: /health
# - Metrics endpoint: /metrics
# - Automatic error handling
# - Performance monitoring
```

## Logging Configuration

Set up comprehensive logging for your FastRTC applications.

```python
from fastrtc import setup_logging

# Basic logging setup
setup_logging(level=logging.INFO)

# Custom logging setup
setup_logging(
    level=logging.DEBUG,
    format_string="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
)
```

## Complete Production Example

```python
import asyncio
import logging
from fastrtc import (
    Stream,
    ProductionReadyStream,
    setup_logging,
    echo_with_enhancements,
    create_production_echo_app
)

# Set up logging
setup_logging(level=logging.INFO)

# Create production-ready application
app = create_production_echo_app()

# Run with uvicorn
# uvicorn app:app --host 0.0.0.0 --port 8000
```

## Best Practices

1. **Always use error handling**: Wrap your handlers with error handling utilities
2. **Monitor performance**: Use performance monitoring to identify bottlenecks
3. **Implement retry logic**: Add retry mechanisms for unreliable operations
4. **Validate inputs**: Use validation functions for audio/video data
5. **Set up logging**: Configure appropriate logging levels for your application
6. **Use production-ready streams**: Leverage enhanced stream classes for production deployments

## Migration Guide

### From Basic FastRTC to Enhanced Features

```python
# Before (basic)
def audio_handler(audio):
    return audio

stream = Stream(handler=audio_handler, modality="audio")

# After (enhanced)
from fastrtc import EnhancedAudioStream, Stream

enhanced_stream = EnhancedAudioStream(
    Stream(handler=audio_handler, modality="audio")
)
```

### Adding Error Handling

```python
# Before
def audio_handler(audio):
    # No error handling
    return process_audio(audio)

# After
from fastrtc import safe_execute, handle_exception

def audio_handler(audio):
    try:
        return process_audio(audio)
    except Exception as e:
        handle_exception(e, context="Audio processing")
        return audio  # Fallback
```

This enhanced FastRTC provides a robust foundation for building production-ready real-time communication applications with comprehensive error handling, performance monitoring, and resilience features.
