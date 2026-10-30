import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#101C29",
        charcoal: "#20272B",
        teal: {
          deep: "#284A49",
          DEFAULT: "#284A49",
          light: "#3a6361",
        },
        sage: {
          muted: "#A5A58D",
          DEFAULT: "#A5A58D",
          light: "#b8b8a3",
        },
        gold: {
          sand: "#D6B77A",
          DEFAULT: "#D6B77A",
          hover: "#e2c996",
          dark: "#b89858",
        },
        ivory: {
          warm: "#EAE6DC",
          DEFAULT: "#EAE6DC",
          light: "#f4f1ea",
        },
        terracotta: {
          earth: "#A96F50",
          DEFAULT: "#A96F50",
          hover: "#be8160",
        },
        softwhite: "#F7F5EF",
      },
      fontFamily: {
        heading: ["Space Grotesk", "Plus Jakarta Sans", "sans-serif"],
        serif: ["Cormorant Garamond", "Playfair Display", "serif"],
        sans: ["Inter", "Manrope", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(90deg, #101C29 0%, rgba(16, 28, 41, 0.88) 45%, rgba(16, 28, 41, 0.25) 100%)",
        "gold-shimmer": "linear-gradient(135deg, rgba(214, 183, 122, 0.4), transparent 60%)",
        "editorial-glow": "radial-gradient(circle at 50% 30%, rgba(214, 183, 122, 0.12), transparent 70%)",
      },
      animation: {
        "fog-flow": "fog 28s ease-in-out infinite alternate",
        "slow-zoom": "kenburns 35s ease-out infinite alternate",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 8s ease-in-out infinite",
      },
      keyframes: {
        fog: {
          "0%": { transform: "translateX(-4%) translateY(0) scale(1)", opacity: "0.2" },
          "50%": { transform: "translateX(4%) translateY(-2%) scale(1.04)", opacity: "0.35" },
          "100%": { transform: "translateX(-4%) translateY(0) scale(1)", opacity: "0.2" },
        },
        kenburns: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
