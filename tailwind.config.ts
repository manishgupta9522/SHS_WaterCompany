import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        infinite_scroll: {
          "100%": { transform: "translateX(calc(-50% - 0.5rem))" },
        },
      },
      animation: {
        infinite_scroll: "infinite_scroll 10s linear infinite",
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
      },
    },
  },
  plugins: [],
};
export default config;
