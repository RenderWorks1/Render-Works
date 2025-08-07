import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "0% 50%, 0% 50%",
          },
          to: {
            backgroundPosition: "800% 50%, 800% 50%",
          },
        },
      },
      animation: {
        aurora: "aurora 20s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config; 