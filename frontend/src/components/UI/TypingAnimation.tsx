"use client";

import { useState, useEffect } from "react";

interface TypingAnimationProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  onComplete?: () => void;
}

export default function TypingAnimation({
  text,
  speed = 100,
  delay = 0,
  className = "",
  style,
  onComplete,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, currentIndex === 0 ? delay : speed);

      return () => clearTimeout(timeout);
    } else if (!isComplete) {
      setIsComplete(true);
      onComplete?.();
    }
  }, [currentIndex, text, speed, delay, isComplete, onComplete, mounted]);

  // Prevent hydration mismatch by showing full text on server
  if (!mounted) {
    return (
      <span className={className} style={style}>
        {text}
      </span>
    );
  }

  return (
    <span className={className} style={style}>
      {displayedText}
      {!isComplete && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
}
