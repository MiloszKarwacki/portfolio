import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "gradient-radial": "radial-gradient(ver(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180def at 50% 50%, ver(--tw-gradient-stops))"
      },
      fontFamily: {
        Sora: ['var(--font-sora)', 'sans-serif'],
      }
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
