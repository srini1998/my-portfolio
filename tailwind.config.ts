import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        carbon: {
          950: "#0d0e10",
          900: "#17181c",
          800: "#1e2024",
        },
        asphalt: {
          800: "#232529",
          700: "#2b2d32",
          600: "#35373d",
          500: "#42444b",
          400: "#52545c",
        },
        silver: {
          100: "#f5f5f5",  // near-white emphasis
          200: "#e0e0e0",  // primary body text  — 10:1 on asphalt-800
          300: "#c0c0c0",  // secondary body     —  6.5:1
          400: "#909090",  // metadata / muted   —  4.3:1 (WCAG AA)
          500: "#606060",  // dividers / whispers
        },
        racing: {
          DEFAULT: "#ffffff",
          light: "#f5f5f5",
          dark: "#141414",
          muted: "#ffffff26",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Outfit", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "carbon-grid":
          "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      boxShadow: {
        "glow-sm": "0 0 12px rgba(255,255,255,0.25)",
        glow: "0 0 24px rgba(255,255,255,0.3)",
        "glow-lg": "0 0 60px rgba(255,255,255,0.25)",
        "glow-dark-sm": "0 0 12px rgba(20,20,20,0.15)",
        "glow-dark": "0 0 28px rgba(20,20,20,0.22)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        drift: {
          "0%": { backgroundPosition: "0px 0px" },
          "100%": { backgroundPosition: "280px 280px" },
        },
        ember: {
          "0%": { transform: "translateY(0) translateX(0) scale(0.4)", opacity: "0" },
          "8%": { opacity: "1" },
          "70%": { opacity: "0.85" },
          "100%": { transform: "translateY(-105vh) translateX(var(--drift, 20px)) scale(1)", opacity: "0" },
        },
        "ember-glow": {
          "0%, 100%": { opacity: "0.7", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.08)" },
        },
      },
      animation: {
        marquee: "marquee 22s linear infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        drift: "drift 26s linear infinite",
        ember: "ember linear infinite",
        "ember-glow": "ember-glow 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
