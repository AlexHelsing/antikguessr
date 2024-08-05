import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        'spin-with-rotation': {
          'from': { transform: 'rotate(3deg) rotate(0deg)' },
          'to': { transform: 'rotate(3deg) rotate(360deg)' },
        },
      },
      animation: {
        'spin-with-rotation': 'spin-with-rotation 1s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;