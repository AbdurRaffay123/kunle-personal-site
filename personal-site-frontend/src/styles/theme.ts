/**
 * Theme configuration and design tokens
 */

export const colors = {
  primary: "#2563EB",
  primaryDark: "#1D4ED8",
  accent: "#06B6D4",
  neutralLight: "#F8FAFC",
  neutralDark: "#0B1220",
  white: "#FFFFFF",
  black: "#000000",
} as const;

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

export const spacing = {
  section: "5rem",
  container: "1280px",
} as const;

export const animation = {
  duration: {
    fast: "150ms",
    normal: "300ms",
    slow: "500ms",
  },
  easing: {
    default: "cubic-bezier(0.4, 0, 0.2, 1)",
    in: "cubic-bezier(0.4, 0, 1, 1)",
    out: "cubic-bezier(0, 0, 0.2, 1)",
    inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
} as const;

