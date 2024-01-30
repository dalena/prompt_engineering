import type { Config } from "tailwindcss";
// const colors = require('tailwindcss/colors')


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'purpz': {
        '50': '#f7f3ff',
        '100': '#f1e9fe',
        '200': '#e5d6fe',
        '300': '#d0b5fd',
        '400': '#b48bfa',
        '500': '#955cf6',
        '600': '#7c3aed',
        '700': '#6928d9',
        '800': '#5821b6',
        '900': '#491d95',
        '950': '#2f1065',
    },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
  ],
};
export default config;
