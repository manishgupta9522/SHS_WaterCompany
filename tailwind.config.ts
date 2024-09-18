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
        background: "var(--background)",
        foreground: "var(--foreground)",
        headerYellow: "#fffde9",
        body: "#03152e",
        bluegrey: "#607D8B",
        darkblue: "#243445",
        transper: "rgba(255, 255, 255, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
