/**
 * Enhanced theme hook with additional utilities
 */

"use client";

import { useTheme as useNextTheme } from "next-themes";
import { useEffect, useState } from "react";

export function useTheme() {
  const { theme, setTheme, systemTheme, resolvedTheme } = useNextTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  const getThemeIcon = () => {
    if (theme === "system") {
      return "💻";
    }
    return theme === "dark" ? "🌙" : "☀️";
  };

  const getThemeLabel = () => {
    if (theme === "system") {
      return `System (${systemTheme})`;
    }
    return theme === "dark" ? "Dark Mode" : "Light Mode";
  };

  const isDark = resolvedTheme === "dark";
  const isLight = resolvedTheme === "light";
  const isSystem = theme === "system";

  return {
    theme,
    setTheme,
    systemTheme,
    resolvedTheme,
    mounted,
    toggleTheme,
    getThemeIcon,
    getThemeLabel,
    isDark,
    isLight,
    isSystem,
  };
}
