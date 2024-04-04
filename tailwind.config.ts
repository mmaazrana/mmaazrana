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
        services: "var(--service-shadow)",
        "services-hover": "var(--service-shadow-hover)",
        testimonial: "var(--testimonial-shadow)",
        "testimonial-hover": "var(--testimonial-shadow-hover)",
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
        "primary-accent-50": "var(--primary-accent-50)",
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
