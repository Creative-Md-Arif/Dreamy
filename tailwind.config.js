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
        headingThree:["Roboto", "sans-serif"],
        titleFont:[ "Oswald"," sans-serif"],
        paragraphFont:["Montserrat", "sans-serif"]
      },
      colors:{
        Bg:"#F2F0F1",
        black:"#000000",
        black_rgba: 'rgba(0, 0, 0, 0.4)', 
        Black: "#1E2832",
        primaryBG: "#1e28320d",
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
      },
     
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}