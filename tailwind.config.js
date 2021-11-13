module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../src/images/kiri-hero.jpeg')",

       },
      maxHeight: {
        'hero': '500px',

       },
      colors: {
        'kiri-1': '#BEE7F7',
        'kiri-2': '#FFE6CC',
        'kiri-blue': '#242A45',
      },
      fontFamily: {
        Roboto : ["Roboto, sans-serif"]
      },
      container:{
        center: true,
        padding: "1rem",
        screens: {
          lg: "1124px",
          xl: "1124px",
          "2xl": "1124px",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
