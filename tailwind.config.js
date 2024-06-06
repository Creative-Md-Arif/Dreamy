/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        headingFont:["Bebas Neue", "sans-serif"],
        headingFontTwo:["Playfair Display", "serif"],
        titleFont:[ "Oswald"," sans-serif"],
        paragraphFont:["Montserrat", "sans-serif"]
      },
      colors:{
        Bg:"#F2F0F1",
        black:"#000000",
        black_rgba: 'rgba(0, 0, 0, 0.4)', 
        Black: "#1E2832",
        primaryBG: "#1e28320d",
      },
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' }
        }
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}