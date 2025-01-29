/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'md': '850px',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/hero.webp')",
        'hero-contacto': "url('/hero-contacto.jpg')",
        'hero-fixed': "url('/fixed.png')",
        'hero-mobile': "url('/mobile.jpg')",
        'hero-mobile2': "url('/mobile2.jpg')",

      },
      colors: {
        primary: '#000',
        liveColor: '#FF0303',
        mainColor: '#2258ca',
        darkColor: '#2a3c4c',
        grey: '#dadbdc',
        background: '#FFF',
        secundary: '#EEE',
      },
      fontFamily: {
        // custom: ['"Poppins"', 'sans-serif'],
        body: ['Quicksand", serif']
      }
    },
  },

  variants: {
    borderColor: ["hover", "focus"],
    borderStyle: ['hover', 'focus'],

  },
  plugins: []
}