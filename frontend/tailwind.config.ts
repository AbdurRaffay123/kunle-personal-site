import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563EB",
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
          950: "#172554",
        },
        accent: {
          DEFAULT: "#38BDF8",
          50: "#F0F9FF",
          100: "#E0F2FE",
          200: "#BAE6FD",
          300: "#7DD3FC",
          400: "#38BDF8",
          500: "#0EA5E9",
          600: "#0284C7",
          700: "#0369A1",
          800: "#075985",
          900: "#0C4A6E",
        },
        light: {
          bg: "#f8f9fa",
          card: "#ffffff",
          text: "#111111",
          textSecondary: "#374151",
          textMuted: "#6b7280",
          border: "#e5e7eb",
          surface: "#ffffff",
          surfaceHover: "#f9fafb",
        },
        dark: {
          bg: "#0d1b2a",
          card: "#1b263b",
          text: "#e0e0e0",
          textSecondary: "#cbd5e1",
          textMuted: "#94a3b8",
          border: "#2c3e50",
          surface: "#1e293b",
          surfaceHover: "#334155",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Lora", "Georgia", "serif"],
        mono: ["Fira Code", "Monaco", "Courier New", "monospace"],
      },
      maxWidth: {
        "screen-2xl": "1536px",
      },
      boxShadow: {
        "blue-glow": "0 0 20px rgba(37, 99, 235, 0.3)",
        "blue-glow-lg": "0 0 40px rgba(37, 99, 235, 0.4)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(to right, #172554, #1E40AF, #1E3A8A)",
        "hero-gradient-dark": "linear-gradient(to right, #0F172A, #1E3A8A, #0F172A)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "scale-in": "scaleIn 0.4s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
