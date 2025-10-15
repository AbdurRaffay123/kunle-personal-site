/**
 * Theme Selector - A dropdown component for theme selection
 */

"use client";

import { useState, useRef, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { 
  SunIcon, 
  MoonIcon, 
  ComputerDesktopIcon,
  ChevronDownIcon 
} from "@heroicons/react/24/outline";

interface ThemeOption {
  value: string;
  label: string;
  icon: React.ReactNode;
  description: string;
}

const themeOptions: ThemeOption[] = [
  {
    value: "light",
    label: "Light",
    icon: <SunIcon className="h-4 w-4" />,
    description: "Always light mode"
  },
  {
    value: "dark", 
    label: "Dark",
    icon: <MoonIcon className="h-4 w-4" />,
    description: "Always dark mode"
  },
  {
    value: "system",
    label: "System",
    icon: <ComputerDesktopIcon className="h-4 w-4" />,
    description: "Follow system preference"
  }
];

interface ThemeSelectorProps {
  variant?: "default" | "compact";
  className?: string;
}

export default function ThemeSelector({ 
  variant = "default", 
  className = "" 
}: ThemeSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    // Force apply theme class to HTML element
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme-preference', 'light');
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-32 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg animate-pulse ${className}`} />
    );
  }

  const currentOption = themeOptions.find(option => option.value === theme) || themeOptions[2];
  const currentLabel = theme === "system" ? `System (${systemTheme})` : currentOption.label;

  const variants = {
    default: "px-4 py-2 min-w-[140px]",
    compact: "px-3 py-1.5 min-w-[120px] text-sm"
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          ${variants[variant]}
          flex items-center justify-between gap-2
          bg-white dark:bg-gray-800 
          border border-gray-200 dark:border-gray-700
          rounded-lg shadow-sm
          hover:bg-gray-50 dark:hover:bg-gray-700
          focus:outline-none focus:ring-2 focus:ring-blue-500
          transition-all duration-200
        `}
        aria-label="Select theme"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <div className="flex items-center gap-2">
          {currentOption.icon}
          <span className="text-gray-900 dark:text-gray-100 font-medium">
            {currentLabel}
          </span>
        </div>
        <ChevronDownIcon 
          className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-1 z-50"
          >
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden">
              {themeOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    handleThemeChange(option.value);
                    setIsOpen(false);
                  }}
                  className={`
                    w-full px-4 py-3 text-left
                    flex items-center gap-3
                    hover:bg-gray-50 dark:hover:bg-gray-700
                    transition-colors duration-150
                    ${theme === option.value 
                      ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400" 
                      : "text-gray-900 dark:text-gray-100"
                    }
                  `}
                  role="option"
                  aria-selected={theme === option.value}
                >
                  <div className="flex-shrink-0">
                    {option.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium">
                      {option.value === "system" ? `System (${systemTheme})` : option.label}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {option.description}
                    </div>
                  </div>
                  {theme === option.value && (
                    <div className="flex-shrink-0">
                      <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
