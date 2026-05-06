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
          950: "#080808",
          900: "#0f0f0f",
          800: "#141414",
        },
        asphalt: {
          800: "#1c1c1c",
          700: "#242424",
          600: "#2e2e2e",
          500: "#3a3a3a",
          400: "#4a4a4a",
        },
        silver: {
          100: "#f5f5f5",  // near-white emphasis
          200: "#e0e0e0",  // primary body text  — 10:1 on asphalt-800
          300: "#c0c0c0",  // secondary body     —  6.5:1
          400: "#909090",  // metadata / muted   —  4.3:1 (WCAG AA)
          500: "#606060",  // dividers / whispers
        },
        racing: {
          DEFAULT: "#e60000",
          light: "#ff1a1a",
          dark: "#b30000",
          muted: "#cc000033",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Barlow Condensed", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "carbon-grid":
          "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
    },
  },
  plugins: [],
};

export default config;
