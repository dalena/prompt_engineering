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
      'bluez': {
        DEFAULT: '#5CACF6',
        50: '#FFFFFF',
        100: '#F7FFFD',
        200: '#D0FCFC',
        300: '#A9EEFA',
        400: '#83D3F8',
        500: '#5CACF6',
        600: '#276EF3',
        700: '#0C31D6',
        800: '#090BA1',
        900: '#15066C',
        950: '#160451'
      },
      'redz': {
        DEFAULT: '#F65C5C',
        50: '#FFFFFF',
        100: '#FFF7FC',
        200: '#FCD0E6',
        300: '#FAA9C4',
        400: '#F88396',
        500: '#F65C5C',
        600: '#F34927',
        700: '#D64F0C',
        800: '#A15509',
        900: '#6C4A06',
        950: '#513E04'
      },
      'greenz': {
        DEFAULT: '#5CF68D',
        50: '#FFFFFF',
        100: '#F9FFF7',
        200: '#D8FCD0',
        300: '#ABFAA9',
        400: '#83F894',
        500: '#5CF68D',
        600: '#27F38A',
        700: '#0CD68F',
        800: '#09A185',
        900: '#066C6A',
        950: '#044C51'
      },
      'purpz': {
        DEFAULT: '#955cf6',
        50: '#f7f3ff',
        100: '#f1e9fe',
        200: '#e5d6fe',
        300: '#d0b5fd',
        400: '#b48bfa',
        500: '#955cf6',
        600: '#7c3aed',
        700: '#6928d9',
        800: '#5821b6',
        900: '#491d95',
        950: '#2f1065',
      }
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
