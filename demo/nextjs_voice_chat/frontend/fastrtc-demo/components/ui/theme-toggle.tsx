"use client";

import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useRef } from "react";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleTheme = () => {
    // Instead of directly changing the theme, dispatch a custom event
    const newTheme = theme === "light" ? "dark" : "light";
    
    // Dispatch custom event with the new theme
    window.dispatchEvent(
      new CustomEvent('themeToggleRequest', { 
        detail: { theme: newTheme } 
      })
    );
  };

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className={cn(
        "w-10 h-10 rounded-md flex items-center justify-center transition-colors relative overflow-hidden",
        "bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20",
        className
      )}
      aria-label="Toggle theme"
    >
      <div className="relative z-10">
        {theme === "light" ? (
          <Moon className="h-5 w-5 text-black/70" />
        ) : (
          <Sun className="h-5 w-5 text-white/70" />
        )}
      </div>
      
      {/* Small inner animation for the button itself */}
      <div 
        className={cn(
          "absolute inset-0 transition-transform duration-500",
          theme === "light" 
            ? "bg-gradient-to-br from-blue-500/20 to-purple-500/20 translate-y-full" 
            : "bg-gradient-to-br from-amber-500/20 to-orange-500/20 -translate-y-full"
        )}
        style={{
          transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)"
        }}
      />
    </button>
  );
} 