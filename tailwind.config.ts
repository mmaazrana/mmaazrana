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
      transitionProperty: {
        filter: "filter",
      },
      boxShadow: {
        services: "var(--service-shadow)",
        "services-hover": "var(--service-shadow-hover)",
        testimonial: "var(--testimonial-shadow)",
        "testimonial-hover": "var(--testimonial-shadow-hover)",
        frosted: "var(--frosted-shadow)",
      },
      dropShadow: {
        about: "var(--about-shadow)",
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out",
        fadeOut: "fadeOut 0.5s ease-out",
      },
      screens: {
        xs: "365px",
        about: "445px",
      },
      width: {
        "8xl": "10rem",
      },
      maxWidth: {
        "8xl": "100rem",
      },
      colors: {
        primary: "var(--primary)",
        "primary-hover": "var(--primary-hover)",
        "primary-accent": "var(--primary-accent)",
        "primary-accent-25": "var(--primary-accent-25)",
        "primary-invert": "var(--primary-invert)",
        "primary-invert-25": "var(--primary-invert-25)",
        error: "var(--error)",
        golden: "var(--golden)",
        secondary: "var(--secondary)",
        "secondary-hover": "var(--secondary-hover)",
        "secondary-hover-10": "var(--secondary-hover-10)",
        "frosted-gradient": "var(--frosted-gradient)",
        "frosted-gradient-hover": "var(--frosted-gradient-hover)",
      },
    },
  },
  plugins: [],
};
export default config;
