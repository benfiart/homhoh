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
        cream: {
          50: "#FEFCF6",
          100: "#F9F3E8",
          200: "#EDE4D3",
        },
        brown: {
          600: "#6B4226",
          700: "#5A3520",
          800: "#3D2114",
          900: "#2A1610",
        },
        green: {
          700: "#2D5A3D",
          800: "#1E3F2B",
        },
        "text-secondary": "#6B5B4E",
        "text-muted": "#7A6B5D",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
