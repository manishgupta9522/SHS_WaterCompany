import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxs: "0px",
      xs: "350px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1800px",
    },
    extend: {
      keyframes: {
        infinite_scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        infinite_scroll: "infinite_scroll 12s linear infinite",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        headerYellow: "#fffde9",
        body: "#03152e",
        bluegrey: "#607D8B",
        darkblue: "#243445",
        transper: "rgba(255, 255, 255, 0.3)",
        bg: "#f2f2f2",
        text: "#333",
        button: "#fff",
        bgbutton: "#243445",
      },
    },
  },
  plugins: [],
};
export default config;
