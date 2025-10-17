/**
 * Enhanced Theme Toggle Component with improved accessibility and animations
 */

"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

interface ThemeToggleProps {
  variant?: "default" | "minimal" | "floating";
  showLabel?: boolean;
  className?: string;
}

export default function ThemeToggle({ 
  variant = "default", 
  showLabel = false,
  className = "" 
}: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Prevent hydration mismatch by showing a placeholder
    return (
      <div className={`w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 animate-pulse ${className}`} />
    );
  }

  const getNextTheme = () => {
    return theme === "light" ? "dark" : "light";
  };

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    // Apply theme class to HTML element
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme-preference', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme-preference', 'light');
    }
  };

  const getCurrentIcon = () => {
    return theme === "dark" ? (
      <SunIcon className="h-5 w-5" />
    ) : (
      <MoonIcon className="h-5 w-5" />
    );
  };

  const getCurrentLabel = () => {
    return theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
  };

  const variants = {
    default: "relative p-3 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 dark:from-blue-500 dark:to-sky-400 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:shadow-xl transition-all duration-300 cursor-pointer",
    minimal: "p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer hover:scale-105 text-gray-600 dark:text-gray-400",
    floating: "fixed bottom-6 right-6 z-50 p-4 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 cursor-pointer"
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <motion.button
        whileHover={{ scale: 1.05, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleThemeChange(getNextTheme())}
        className={variants[variant]}
        aria-label={getCurrentLabel()}
        title={getCurrentLabel()}
        type="button"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={theme}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {getCurrentIcon()}
          </motion.div>
        </AnimatePresence>
      </motion.button>
      
      {showLabel && (
        <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
          {theme === "dark" ? "Dark" : "Light"}
        </span>
      )}
    </div>
  );
}
