import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "media",
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        md: "2rem",
        lg: "3rem",
      },
    },
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        text: "var(--text)",
        muted: "var(--text-muted)",
        border: "var(--border)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
        success: "var(--success)",
        danger: "var(--danger)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Helvetica Neue", "Arial", "sans-serif"],
        body: ["var(--font-body)", "Segoe UI", "Arial", "sans-serif"],
        mono: ["var(--font-mono)", "SFMono-Regular", "Consolas", "monospace"],
      },
      maxWidth: {
        prose: "65ch",
      },
      spacing: {
        18: "4.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
