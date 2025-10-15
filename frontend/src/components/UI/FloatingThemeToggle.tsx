/**
 * Floating Theme Toggle - A persistent theme toggle that floats on the page
 * Useful for quick access to theme switching from anywhere on the site
 */

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function FloatingThemeToggle() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the floating toggle after a delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0, x: 100 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        exit={{ opacity: 0, scale: 0, x: 100 }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 30,
          delay: 0.5 
        }}
        className="fixed bottom-6 right-6 z-50"
      >
        <div className="relative group">
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            <div className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg">
              Quick theme toggle
              <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900 dark:border-l-gray-100"></div>
            </div>
          </div>
          
          {/* Floating Toggle */}
          <ThemeToggle variant="floating" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
