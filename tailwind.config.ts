import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1d4ed8",
        secondary: "#93c5fd",
        accent: "#f43f5e",
        neutral: "#23282f",
        "base-100": "#111827",
        info: "#dbeafe",
        success: "#10b981",
        warning: "#facc15",
        error: "#991b1b",
      },
    },
    daisyui: {
      themes: [
        {
          mytheme: {
            primary: "#1d4ed8",

            secondary: "#93c5fd",

            accent: "#f43f5e",

            neutral: "#23282f",

            "base-100": "#111827",

            info: "#dbeafe",

            success: "#10b981",

            warning: "#facc15",

            error: "#991b1b",
          },
        },
      ],
    },
  },
  plugins: [require("daisyui")],
};
export default config;
