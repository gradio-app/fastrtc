"""
Utility functions and helpers for FastRTC.

This module provides common utility functions, error handling helpers,
and performance optimization utilities for FastRTC applications.
"""

import asyncio
import logging
import time
from contextlib import asynccontextmanager
from functools import wraps
from typing import Any, AsyncGenerator, Callable, Dict, Optional, TypeVar, Union

import numpy as np
from typing_extensions import ParamSpec

logger = logging.getLogger(__name__)

P = ParamSpec("P")
T = TypeVar("T")


def setup_logging(level: int = logging.INFO, format_string: Optional[str] = None) -> None:
    """
    Set up logging configuration for FastRTC applications.
    
    Args:
        level: Logging level (default: INFO)
        format_string: Custom format string for log messages
    """
    if format_string is None:
        format_string = "%(asctime)s - %(name)s - %(levelname)s - %(message)s"
    
    logging.basicConfig(
        level=level,
        format=format_string,
        handlers=[
            logging.StreamHandler(),
        ]
    )


def retry_on_failure(
    max_retries: int = 3,
    delay: float = 1.0,
    backoff_factor: float = 2.0,
    exceptions: tuple = (Exception,)
) -> Callable[[Callable[P, T]], Callable[P, T]]:
    """
    Decorator to retry a function on failure with exponential backoff.
    
    Args:
        max_retries: Maximum number of retry attempts
        delay: Initial delay between retries in seconds
        backoff_factor: Multiplier for delay after each retry
        exceptions: Tuple of exceptions to catch and retry on
    
    Returns:
        Decorated function with retry logic
    """
    def decorator(func: Callable[P, T]) -> Callable[P, T]:
        @wraps(func)
        def wrapper(*args: P.args, **kwargs: P.kwargs) -> T:
            last_exception = None
            current_delay = delay
            
            for attempt in range(max_retries + 1):
                try:
                    return func(*args, **kwargs)
                except exceptions as e:
                    last_exception = e
                    if attempt == max_retries:
                        logger.error(f"Function {func.__name__} failed after {max_retries} retries: {e}")
                        raise
                    
                    logger.warning(f"Function {func.__name__} failed (attempt {attempt + 1}/{max_retries + 1}): {e}")
                    time.sleep(current_delay)
                    current_delay *= backoff_factor
            
            # This should never be reached, but for type safety
            raise last_exception  # type: ignore
        
        return wrapper
    return decorator


def async_retry_on_failure(
    max_retries: int = 3,
    delay: float = 1.0,
    backoff_factor: float = 2.0,
    exceptions: tuple = (Exception,)
) -> Callable[[Callable[P, T]], Callable[P, T]]:
    """
    Async version of retry_on_failure decorator.
    
    Args:
        max_retries: Maximum number of retry attempts
        delay: Initial delay between retries in seconds
        backoff_factor: Multiplier for delay after each retry
        exceptions: Tuple of exceptions to catch and retry on
    
    Returns:
        Decorated async function with retry logic
    """
    def decorator(func: Callable[P, T]) -> Callable[P, T]:
        @wraps(func)
        async def wrapper(*args: P.args, **kwargs: P.kwargs) -> T:
            last_exception = None
            current_delay = delay
            
            for attempt in range(max_retries + 1):
                try:
                    return await func(*args, **kwargs)
                except exceptions as e:
                    last_exception = e
                    if attempt == max_retries:
                        logger.error(f"Async function {func.__name__} failed after {max_retries} retries: {e}")
                        raise
                    
                    logger.warning(f"Async function {func.__name__} failed (attempt {attempt + 1}/{max_retries + 1}): {e}")
                    await asyncio.sleep(current_delay)
                    current_delay *= backoff_factor
            
            # This should never be reached, but for type safety
            raise last_exception  # type: ignore
        
        return wrapper
    return decorator


@asynccontextmanager
async def timeout_context(seconds: float) -> AsyncGenerator[None, None]:
    """
    Async context manager for timeout operations.
    
    Args:
        seconds: Timeout duration in seconds
    
    Yields:
        None
    
    Raises:
        asyncio.TimeoutError: If operation exceeds timeout
    """
    try:
        async with asyncio.timeout(seconds):
            yield
    except asyncio.TimeoutError:
        logger.error(f"Operation timed out after {seconds} seconds")
        raise


def validate_audio_format(audio: tuple[int, np.ndarray]) -> bool:
    """
    Validate audio format for FastRTC.
    
    Args:
        audio: Audio tuple (sample_rate, audio_array)
    
    Returns:
        True if audio format is valid, False otherwise
    """
    if not isinstance(audio, tuple) or len(audio) != 2:
        logger.error("Audio must be a tuple of (sample_rate, audio_array)")
        return False
    
    sample_rate, audio_array = audio
    
    if not isinstance(sample_rate, int) or sample_rate <= 0:
        logger.error("Sample rate must be a positive integer")
        return False
    
    if not isinstance(audio_array, np.ndarray):
        logger.error("Audio array must be a numpy array")
        return False
    
    if audio_array.size == 0:
        logger.error("Audio array cannot be empty")
        return False
    
    return True


def validate_video_format(video: np.ndarray) -> bool:
    """
    Validate video format for FastRTC.
    
    Args:
        video: Video array
    
    Returns:
        True if video format is valid, False otherwise
    """
    if not isinstance(video, np.ndarray):
        logger.error("Video must be a numpy array")
        return False
    
    if video.ndim < 2:
        logger.error("Video array must have at least 2 dimensions")
        return False
    
    if video.size == 0:
        logger.error("Video array cannot be empty")
        return False
    
    return True


def audio_to_mono(audio: tuple[int, np.ndarray]) -> tuple[int, np.ndarray]:
    """
    Convert stereo audio to mono if needed.
    
    Args:
        audio: Audio tuple (sample_rate, audio_array)
    
    Returns:
        Mono audio tuple
    """
    sample_rate, audio_array = audio
    
    if audio_array.ndim > 1 and audio_array.shape[0] > 1:
        # Convert stereo to mono by averaging channels
        mono_audio = np.mean(audio_array, axis=0)
        return (sample_rate, mono_audio)
    
    return audio


def normalize_audio(audio: tuple[int, np.ndarray], target_level: float = 0.8) -> tuple[int, np.ndarray]:
    """
    Normalize audio to target level.
    
    Args:
        audio: Audio tuple (sample_rate, audio_array)
        target_level: Target normalization level (0.0 to 1.0)
    
    Returns:
        Normalized audio tuple
    """
    sample_rate, audio_array = audio
    
    if audio_array.size == 0:
        return audio
    
    # Calculate current peak level
    current_peak = np.max(np.abs(audio_array))
    
    if current_peak == 0:
        return audio
    
    # Calculate normalization factor
    normalization_factor = target_level / current_peak
    
    # Apply normalization
    normalized_audio = audio_array * normalization_factor
    
    return (sample_rate, normalized_audio)


def resample_audio(audio: tuple[int, np.ndarray], target_sample_rate: int) -> tuple[int, np.ndarray]:
    """
    Resample audio to target sample rate using simple linear interpolation.
    
    Args:
        audio: Audio tuple (sample_rate, audio_array)
        target_sample_rate: Target sample rate
    
    Returns:
        Resampled audio tuple
    """
    sample_rate, audio_array = audio
    
    if sample_rate == target_sample_rate:
        return audio
    
    # Simple linear interpolation resampling
    original_length = audio_array.shape[-1]
    target_length = int(original_length * target_sample_rate / sample_rate)
    
    # Create indices for interpolation
    original_indices = np.linspace(0, original_length - 1, original_length)
    target_indices = np.linspace(0, original_length - 1, target_length)
    
    # Interpolate
    resampled_audio = np.interp(target_indices, original_indices, audio_array)
    
    return (target_sample_rate, resampled_audio)


class PerformanceMonitor:
    """
    Performance monitoring utility for FastRTC applications.
    """
    
    def __init__(self, name: str = "FastRTC"):
        self.name = name
        self.metrics: Dict[str, list] = {}
        self.start_times: Dict[str, float] = {}
    
    def start_timer(self, operation: str) -> None:
        """Start timing an operation."""
        self.start_times[operation] = time.time()
    
    def end_timer(self, operation: str) -> float:
        """End timing an operation and return duration."""
        if operation not in self.start_times:
            logger.warning(f"Timer for operation '{operation}' was not started")
            return 0.0
        
        duration = time.time() - self.start_times[operation]
        
        if operation not in self.metrics:
            self.metrics[operation] = []
        
        self.metrics[operation].append(duration)
        del self.start_times[operation]
        
        logger.debug(f"{self.name} - {operation}: {duration:.4f}s")
        return duration
    
    def get_average_time(self, operation: str) -> float:
        """Get average time for an operation."""
        if operation not in self.metrics or not self.metrics[operation]:
            return 0.0
        
        return sum(self.metrics[operation]) / len(self.metrics[operation])
    
    def get_stats(self) -> Dict[str, Dict[str, float]]:
        """Get performance statistics."""
        stats = {}
        
        for operation, times in self.metrics.items():
            if times:
                stats[operation] = {
                    "count": len(times),
                    "total": sum(times),
                    "average": sum(times) / len(times),
                    "min": min(times),
                    "max": max(times),
                }
        
        return stats
    
    def reset(self) -> None:
        """Reset all metrics."""
        self.metrics.clear()
        self.start_times.clear()


# Global performance monitor instance
performance_monitor = PerformanceMonitor()


def monitor_performance(operation_name: str) -> Callable[[Callable[P, T]], Callable[P, T]]:
    """
    Decorator to monitor function performance.
    
    Args:
        operation_name: Name of the operation to monitor
    
    Returns:
        Decorated function with performance monitoring
    """
    def decorator(func: Callable[P, T]) -> Callable[P, T]:
        @wraps(func)
        def wrapper(*args: P.args, **kwargs: P.kwargs) -> T:
            performance_monitor.start_timer(operation_name)
            try:
                result = func(*args, **kwargs)
                return result
            finally:
                performance_monitor.end_timer(operation_name)
        
        return wrapper
    return decorator


def async_monitor_performance(operation_name: str) -> Callable[[Callable[P, T]], Callable[P, T]]:
    """
    Async decorator to monitor function performance.
    
    Args:
        operation_name: Name of the operation to monitor
    
    Returns:
        Decorated async function with performance monitoring
    """
    def decorator(func: Callable[P, T]) -> Callable[P, T]:
        @wraps(func)
        async def wrapper(*args: P.args, **kwargs: P.kwargs) -> T:
            performance_monitor.start_timer(operation_name)
            try:
                result = await func(*args, **kwargs)
                return result
            finally:
                performance_monitor.end_timer(operation_name)
        
        return wrapper
    return decorator