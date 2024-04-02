import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      boxShadow: {
        services:
          "0px 1657px 464px 0px rgba(14, 25, 48, 0.02), 0px 1060px 424px 0px rgba(14, 25, 48, 0.15), 0px 596px 358px 0px rgba(14, 25, 48, 0.50), 0px 265px 265px 0px rgba(14, 25, 48, 0.85), 0px 66px 146px 0px rgba(14, 25, 48, 0.98)",
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out",
        fadeOut: "fadeOut 0.5s ease-out",
      },
      screens: {
        xs: "365px",
      },
      width: {
        "8xl": "10rem",
      },
      maxWidth: {
        "8xl": "100rem",
      },
      colors: {
        primary: "var(--primary)",
        "primary-accent": "var(--primary-accent)",
        error: "var(--error)",
        "primary-hover": "var(--primary-hover)",
        secondary: "var(--secondary)",
        "secondary-hover": "var(--secondary-hover)",
      },
    },
  },
  plugins: [],
};
export default config;
