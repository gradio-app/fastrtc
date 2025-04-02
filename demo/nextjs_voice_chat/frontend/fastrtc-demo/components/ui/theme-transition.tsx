"use client";

import { useTheme } from "@/components/theme-provider";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ThemeTransitionProps {
  className?: string;
}

export function ThemeTransition({ className }: ThemeTransitionProps) {
  const { theme, setTheme } = useTheme();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);
  const [pendingTheme, setPendingTheme] = useState<string | null>(null);
  const [visualTheme, setVisualTheme] = useState<string | null>(theme);

  // Track mouse/touch position for click events
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        setPosition({ x: e.touches[0].clientX, y: e.touches[0].clientY });
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  // Listen for theme toggle requests
  useEffect(() => {
    // Custom event for theme toggle requests
    const handleThemeToggle = (e: CustomEvent) => {
      if (isAnimating) return; // Prevent multiple animations
      
      const newTheme = e.detail.theme;
      if (newTheme === theme) return;
      
      // Store the pending theme but don't apply it yet
      setPendingTheme(newTheme);
      setIsAnimating(true);
      
      // The actual theme will be applied mid-animation
    };

    window.addEventListener('themeToggleRequest' as any, handleThemeToggle as EventListener);
    
    return () => {
      window.removeEventListener('themeToggleRequest' as any, handleThemeToggle as EventListener);
    };
  }, [theme, isAnimating]);

  // Apply the theme change mid-animation
  useEffect(() => {
    if (isAnimating && pendingTheme) {
      // Set visual theme immediately for the animation
      setVisualTheme(pendingTheme);
      
      // Apply the actual theme change after a delay (mid-animation)
      const timer = setTimeout(() => {
        setTheme(pendingTheme as any);
      }, 400); // Half of the animation duration
      
      // End the animation after it completes
      const endTimer = setTimeout(() => {
        setIsAnimating(false);
        setPendingTheme(null);
      }, 1000); // Match with animation duration
      
      return () => {
        clearTimeout(timer);
        clearTimeout(endTimer);
      };
    }
  }, [isAnimating, pendingTheme, setTheme]);

  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          className="fixed inset-0 z-[9999] pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className={`absolute rounded-full ${visualTheme === 'dark' ? 'bg-slate-950' : 'bg-white'}`}
            initial={{ 
              width: 0, 
              height: 0,
              x: position.x,
              y: position.y,
              borderRadius: '100%' 
            }}
            animate={{ 
              width: Math.max(window.innerWidth * 3, window.innerHeight * 3),
              height: Math.max(window.innerWidth * 3, window.innerHeight * 3),
              x: position.x - Math.max(window.innerWidth * 3, window.innerHeight * 3) / 2,
              y: position.y - Math.max(window.innerWidth * 3, window.innerHeight * 3) / 2,
            }}
            transition={{ 
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1]
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
} 