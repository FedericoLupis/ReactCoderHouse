/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'PT-serif':['"PT Serif"', 'serif'],
        'Roboto': ['"Roboto"', 'sans-serif']
      }
    },
  },
  plugins: [],
}

