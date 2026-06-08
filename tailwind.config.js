/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  darkMode: 'class',

  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],

  daisyui: {
    themes: false,
  },
}

