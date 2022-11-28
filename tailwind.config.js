/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        maincolor: '#00df9a',
        darkblue: '#012030',
        lightblue: '#13678A',
        turquoise: '#45C4B0',
        darkgreen: '#9AEBA3',
        lightgreen: '#DAFDBA'
      }
    },
  },
  plugins: [],
}