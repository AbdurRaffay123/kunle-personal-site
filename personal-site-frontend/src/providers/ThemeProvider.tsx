/**
 * Enhanced Theme provider component with improved persistence and system preference
 */

"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider 
      attribute="class" 
      defaultTheme="light" 
      enableSystem={false}
      disableTransitionOnChange={false}
      storageKey="theme-preference"
      themes={['light', 'dark']}
    >
      {children}
    </NextThemesProvider>
  );
}

