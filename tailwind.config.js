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
        titleFont:[ "Oswald"," sans-serif"]
      },
      colors:{
        Bg:"#F2F0F1",
        black:"#000000",
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}