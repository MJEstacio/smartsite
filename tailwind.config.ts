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
        primaryOrange: "#ff632c",
        primaryBlue: "#0083fe",
        secondary: "#F7F7FF",
        additional: "#2b2d42",
      },
    },
  },
  plugins: [],
};
export default config;
