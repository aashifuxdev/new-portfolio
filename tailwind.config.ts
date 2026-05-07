import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5EDE3",
        salmon: "#F5A07A",
        "salmon-dark": "#E8855A",
        "dark-warm": "#1A1008",
        "brown-warm": "#2C1A0E",
        muted: "#8C8072",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(5rem, 12vw, 14rem)", { lineHeight: "0.9" }],
        "display-lg": ["clamp(3rem, 7vw, 9rem)", { lineHeight: "0.95" }],
        "display-md": ["clamp(2rem, 4vw, 5rem)", { lineHeight: "1" }],
      },
    },
  },
  plugins: [],
};
export default config;
