"""
Enhanced FastRTC Examples and Best Practices.

This module provides comprehensive examples and best practices for using FastRTC
effectively in production applications.
"""

import asyncio
import logging
from typing import AsyncGenerator, Generator

import numpy as np
from fastapi import FastAPI, HTTPException
from fastapi.responses import HTMLResponse

from .exceptions import (
    AudioProcessingError,
    ConnectionError,
    error_handler,
    handle_exception,
    safe_execute,
    safe_execute_async,
)
from .stream import Stream
from .utils import (
    PerformanceMonitor,
    async_retry_on_failure,
    monitor_performance,
    normalize_audio,
    performance_monitor,
    retry_on_failure,
    setup_logging,
    validate_audio_format,
)

# Set up logging
setup_logging(level=logging.INFO)

logger = logging.getLogger(__name__)


class EnhancedAudioStream:
    """
    Enhanced audio stream with error handling and performance monitoring.
    """
    
    def __init__(self, stream: Stream):
        self.stream = stream
        self.performance_monitor = PerformanceMonitor("AudioStream")
        self.error_count = 0
    
    @monitor_performance("audio_processing")
    @retry_on_failure(max_retries=3, delay=0.1)
    def process_audio(self, audio: tuple[int, np.ndarray]) -> tuple[int, np.ndarray]:
        """
        Process audio with error handling and performance monitoring.
        
        Args:
            audio: Input audio tuple (sample_rate, audio_array)
        
        Returns:
            Processed audio tuple
        
        Raises:
            AudioProcessingError: If audio processing fails
        """
        try:
            # Validate input audio
            if not validate_audio_format(audio):
                raise AudioProcessingError("Invalid audio format")
            
            # Normalize audio
            normalized_audio = normalize_audio(audio, target_level=0.8)
            
            # Apply your custom processing here
            processed_audio = self._custom_audio_processing(normalized_audio)
            
            return processed_audio
            
        except Exception as e:
            self.error_count += 1
            error_handler.handle_error(
                e,
                context="Audio processing",
                severity="error"
            )
            raise AudioProcessingError(f"Audio processing failed: {e}")
    
    def _custom_audio_processing(self, audio: tuple[int, np.ndarray]) -> tuple[int, np.ndarray]:
        """
        Custom audio processing logic.
        
        Args:
            audio: Input audio tuple
        
        Returns:
            Processed audio tuple
        """
        # Example: Simple echo effect
        sample_rate, audio_array = audio
        
        # Add slight delay and mix with original
        delay_samples = int(sample_rate * 0.1)  # 100ms delay
        delayed_audio = np.pad(audio_array, (delay_samples, 0))[:len(audio_array)]
        
        # Mix original and delayed audio
        processed_audio = audio_array + 0.3 * delayed_audio
        
        return (sample_rate, processed_audio)
    
    def get_performance_stats(self) -> dict:
        """Get performance statistics."""
        return self.performance_monitor.get_stats()


class ProductionReadyStream:
    """
    Production-ready stream implementation with comprehensive error handling.
    """
    
    def __init__(self, handler_func, **stream_kwargs):
        self.handler_func = handler_func
        self.stream_kwargs = stream_kwargs
        self.stream = None
        self.app = None
    
    def create_stream(self) -> Stream:
        """
        Create a Stream instance with error handling.
        
        Returns:
            Configured Stream instance
        """
        try:
            self.stream = Stream(
                handler=self._safe_handler,
                **self.stream_kwargs
            )
            return self.stream
        except Exception as e:
            error_handler.handle_error(
                e,
                context="Stream creation",
                severity="critical"
            )
            raise
    
    @async_retry_on_failure(max_retries=2, delay=0.5)
    async def _safe_handler(self, *args, **kwargs):
        """
        Safe handler wrapper with error handling and retry logic.
        
        Args:
            *args: Handler arguments
            **kwargs: Handler keyword arguments
        
        Yields:
            Handler results
        """
        try:
            if asyncio.iscoroutinefunction(self.handler_func):
                async for result in self.handler_func(*args, **kwargs):
                    yield result
            else:
                for result in self.handler_func(*args, **kwargs):
                    yield result
        except Exception as e:
            error_handler.handle_error(
                e,
                context="Stream handler execution",
                severity="error"
            )
            # Yield a fallback result or re-raise based on your needs
            raise
    
    def create_fastapi_app(self) -> FastAPI:
        """
        Create a FastAPI app with the stream mounted.
        
        Returns:
            Configured FastAPI app
        """
        if not self.stream:
            self.create_stream()
        
        self.app = FastAPI(
            title="FastRTC Production App",
            description="Production-ready FastRTC application",
            version="1.0.0"
        )
        
        # Mount the stream
        self.stream.mount(self.app)
        
        # Add health check endpoint
        @self.app.get("/health")
        async def health_check():
            """Health check endpoint."""
            try:
                stats = performance_monitor.get_stats()
                error_stats = error_handler.get_error_stats()
                
                return {
                    "status": "healthy",
                    "performance": stats,
                    "errors": error_stats
                }
            except Exception as e:
                error_handler.handle_error(e, context="Health check", severity="warning")
                raise HTTPException(status_code=500, detail="Health check failed")
        
        # Add metrics endpoint
        @self.app.get("/metrics")
        async def metrics():
            """Metrics endpoint for monitoring."""
            try:
                return {
                    "performance": performance_monitor.get_stats(),
                    "errors": error_handler.get_error_stats(),
                    "recent_errors": error_handler.get_recent_errors(limit=10)
                }
            except Exception as e:
                error_handler.handle_error(e, context="Metrics", severity="warning")
                raise HTTPException(status_code=500, detail="Metrics unavailable")
        
        return self.app


# Example usage functions
def echo_with_enhancements(audio: tuple[int, np.ndarray]) -> Generator[tuple[int, np.ndarray], None, None]:
    """
    Enhanced echo example with error handling.
    
    Args:
        audio: Input audio tuple
    
    Yields:
        Processed audio tuples
    """
    try:
        # Validate input
        if not validate_audio_format(audio):
            raise AudioProcessingError("Invalid audio format")
        
        # Normalize audio
        normalized_audio = normalize_audio(audio)
        
        # Simple echo effect
        sample_rate, audio_array = normalized_audio
        delay_samples = int(sample_rate * 0.2)  # 200ms delay
        
        # Create echo
        echo_audio = np.pad(audio_array, (delay_samples, 0))[:len(audio_array)]
        echo_result = audio_array + 0.5 * echo_audio
        
        yield (sample_rate, echo_result)
        
    except Exception as e:
        error_handler.handle_error(e, context="Echo processing", severity="error")
        # Return original audio as fallback
        yield audio


async def async_audio_processor(audio: tuple[int, np.ndarray]) -> AsyncGenerator[tuple[int, np.ndarray], None]:
    """
    Async audio processor example.
    
    Args:
        audio: Input audio tuple
    
    Yields:
        Processed audio tuples
    """
    try:
        # Simulate async processing
        await asyncio.sleep(0.01)
        
        # Process audio
        processed_audio = normalize_audio(audio, target_level=0.7)
        
        yield processed_audio
        
    except Exception as e:
        error_handler.handle_error(e, context="Async audio processing", severity="error")
        yield audio


def create_production_echo_app() -> FastAPI:
    """
    Create a production-ready echo application.
    
    Returns:
        Configured FastAPI app
    """
    # Create production-ready stream
    production_stream = ProductionReadyStream(
        handler_func=echo_with_enhancements,
        modality="audio",
        mode="send-receive"
    )
    
    # Create and return FastAPI app
    return production_stream.create_fastapi_app()


def create_async_audio_app() -> FastAPI:
    """
    Create an async audio processing application.
    
    Returns:
        Configured FastAPI app
    """
    # Create production-ready stream
    production_stream = ProductionReadyStream(
        handler_func=async_audio_processor,
        modality="audio",
        mode="send-receive"
    )
    
    # Create and return FastAPI app
    return production_stream.create_fastapi_app()


# Example of using the enhanced stream
def run_enhanced_example():
    """Run an enhanced FastRTC example."""
    try:
        # Create enhanced audio stream
        enhanced_stream = EnhancedAudioStream(
            Stream(
                handler=echo_with_enhancements,
                modality="audio",
                mode="send-receive"
            )
        )
        
        # Launch with error handling
        safe_execute(
            enhanced_stream.stream.ui.launch,
            context="Launching enhanced stream",
            default_return=None
        )
        
        # Print performance stats
        stats = enhanced_stream.get_performance_stats()
        logger.info(f"Performance stats: {stats}")
        
    except Exception as e:
        error_handler.handle_error(e, context="Enhanced example", severity="critical")


if __name__ == "__main__":
    # Run the enhanced example
    run_enhanced_example()
