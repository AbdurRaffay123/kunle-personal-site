/**
 * Enhanced Theme provider component with improved persistence and system preference
 */

"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode, useEffect } from "react";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Force light theme application on mount
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme-preference', 'light');
  }, []);

  return (
    <NextThemesProvider 
      attribute="class" 
      defaultTheme="light" 
      enableSystem={false}
      disableTransitionOnChange={false}
      storageKey="theme-preference"
      themes={['light', 'dark']}
      forcedTheme="light"
    >
      {children}
    </NextThemesProvider>
  );
}

