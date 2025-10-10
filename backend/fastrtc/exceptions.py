"""
Enhanced error handling and exception classes for FastRTC.

This module provides custom exception classes and error handling utilities
for better error management in FastRTC applications.
"""

import logging
import traceback
from typing import Any, Dict, Optional, Union

logger = logging.getLogger(__name__)


class FastRTCError(Exception):
    """Base exception class for FastRTC errors."""
    
    def __init__(self, message: str, error_code: Optional[str] = None, details: Optional[Dict[str, Any]] = None):
        super().__init__(message)
        self.message = message
        self.error_code = error_code
        self.details = details or {}
        self.timestamp = self._get_timestamp()
    
    def _get_timestamp(self) -> str:
        """Get current timestamp for error tracking."""
        from datetime import datetime
        return datetime.now().isoformat()
    
    def to_dict(self) -> Dict[str, Any]:
        """Convert exception to dictionary for serialization."""
        return {
            "error": self.__class__.__name__,
            "message": self.message,
            "error_code": self.error_code,
            "details": self.details,
            "timestamp": self.timestamp,
        }
    
    def __str__(self) -> str:
        if self.error_code:
            return f"[{self.error_code}] {self.message}"
        return self.message


class WebRTCError(FastRTCError):
    """Exception raised for WebRTC-related errors."""
    pass


class AudioProcessingError(FastRTCError):
    """Exception raised for audio processing errors."""
    pass


class VideoProcessingError(FastRTCError):
    """Exception raised for video processing errors."""
    pass


class ConnectionError(FastRTCError):
    """Exception raised for connection-related errors."""
    pass


class AuthenticationError(FastRTCError):
    """Exception raised for authentication errors."""
    pass


class ConfigurationError(FastRTCError):
    """Exception raised for configuration errors."""
    pass


class TimeoutError(FastRTCError):
    """Exception raised for timeout errors."""
    pass


class ResourceError(FastRTCError):
    """Exception raised for resource-related errors."""
    pass


class ValidationError(FastRTCError):
    """Exception raised for validation errors."""
    pass


def handle_exception(
    exception: Exception,
    context: Optional[str] = None,
    log_level: int = logging.ERROR,
    reraise: bool = True
) -> Optional[FastRTCError]:
    """
    Handle and log exceptions with context.
    
    Args:
        exception: The exception to handle
        context: Additional context about where the exception occurred
        log_level: Logging level for the exception
        reraise: Whether to reraise the exception as FastRTCError
    
    Returns:
        FastRTCError instance if reraise is False, None otherwise
    
    Raises:
        FastRTCError: If reraise is True
    """
    error_message = str(exception)
    error_details = {
        "original_exception": exception.__class__.__name__,
        "traceback": traceback.format_exc(),
    }
    
    if context:
        error_details["context"] = context
        error_message = f"{context}: {error_message}"
    
    # Determine appropriate FastRTC error type
    if isinstance(exception, FastRTCError):
        fastrtc_error = exception
    elif "webrtc" in error_message.lower() or "rtc" in error_message.lower():
        fastrtc_error = WebRTCError(error_message, details=error_details)
    elif "audio" in error_message.lower():
        fastrtc_error = AudioProcessingError(error_message, details=error_details)
    elif "video" in error_message.lower():
        fastrtc_error = VideoProcessingError(error_message, details=error_details)
    elif "connection" in error_message.lower() or "connect" in error_message.lower():
        fastrtc_error = ConnectionError(error_message, details=error_details)
    elif "auth" in error_message.lower() or "permission" in error_message.lower():
        fastrtc_error = AuthenticationError(error_message, details=error_details)
    elif "config" in error_message.lower() or "setting" in error_message.lower():
        fastrtc_error = ConfigurationError(error_message, details=error_details)
    elif "timeout" in error_message.lower():
        fastrtc_error = TimeoutError(error_message, details=error_details)
    elif "resource" in error_message.lower() or "memory" in error_message.lower():
        fastrtc_error = ResourceError(error_message, details=error_details)
    elif "valid" in error_message.lower() or "invalid" in error_message.lower():
        fastrtc_error = ValidationError(error_message, details=error_details)
    else:
        fastrtc_error = FastRTCError(error_message, details=error_details)
    
    # Log the error
    logger.log(log_level, f"FastRTC Error: {fastrtc_error}")
    
    if reraise:
        raise fastrtc_error
    
    return fastrtc_error


def safe_execute(
    func,
    *args,
    context: Optional[str] = None,
    default_return: Any = None,
    log_level: int = logging.ERROR,
    **kwargs
) -> Any:
    """
    Safely execute a function with error handling.
    
    Args:
        func: Function to execute
        *args: Positional arguments for the function
        context: Context description for error handling
        default_return: Default value to return on error
        log_level: Logging level for errors
        **kwargs: Keyword arguments for the function
    
    Returns:
        Function result or default_return on error
    """
    try:
        return func(*args, **kwargs)
    except Exception as e:
        handle_exception(e, context=context, log_level=log_level, reraise=False)
        return default_return


async def safe_execute_async(
    func,
    *args,
    context: Optional[str] = None,
    default_return: Any = None,
    log_level: int = logging.ERROR,
    **kwargs
) -> Any:
    """
    Safely execute an async function with error handling.
    
    Args:
        func: Async function to execute
        *args: Positional arguments for the function
        context: Context description for error handling
        default_return: Default value to return on error
        log_level: Logging level for errors
        **kwargs: Keyword arguments for the function
    
    Returns:
        Function result or default_return on error
    """
    try:
        return await func(*args, **kwargs)
    except Exception as e:
        handle_exception(e, context=context, log_level=log_level, reraise=False)
        return default_return


class ErrorHandler:
    """
    Centralized error handler for FastRTC applications.
    """
    
    def __init__(self, application_name: str = "FastRTC"):
        self.application_name = application_name
        self.error_count = 0
        self.error_history: list = []
        self.max_history = 100
    
    def handle_error(
        self,
        exception: Exception,
        context: Optional[str] = None,
        severity: str = "error"
    ) -> FastRTCError:
        """
        Handle an error and update error statistics.
        
        Args:
            exception: The exception to handle
            context: Additional context about the error
            severity: Error severity level
        
        Returns:
            FastRTCError instance
        """
        self.error_count += 1
        
        # Determine log level based on severity
        log_level_map = {
            "debug": logging.DEBUG,
            "info": logging.INFO,
            "warning": logging.WARNING,
            "error": logging.ERROR,
            "critical": logging.CRITICAL,
        }
        log_level = log_level_map.get(severity.lower(), logging.ERROR)
        
        # Handle the exception
        fastrtc_error = handle_exception(
            exception,
            context=context,
            log_level=log_level,
            reraise=False
        )
        
        # Add to error history
        error_entry = {
            "timestamp": fastrtc_error.timestamp,
            "error": fastrtc_error.to_dict(),
            "context": context,
            "severity": severity,
        }
        
        self.error_history.append(error_entry)
        
        # Limit history size
        if len(self.error_history) > self.max_history:
            self.error_history = self.error_history[-self.max_history:]
        
        return fastrtc_error
    
    def get_error_stats(self) -> Dict[str, Any]:
        """Get error statistics."""
        return {
            "total_errors": self.error_count,
            "recent_errors": len(self.error_history),
            "application": self.application_name,
        }
    
    def get_recent_errors(self, limit: int = 10) -> list:
        """Get recent errors."""
        return self.error_history[-limit:]
    
    def clear_history(self) -> None:
        """Clear error history."""
        self.error_history.clear()
        self.error_count = 0


# Global error handler instance
error_handler = ErrorHandler()
