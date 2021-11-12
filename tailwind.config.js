module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/133953/pexels-photo-133953.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",

       },
      maxHeight: {
        'hero': '500px',

       },
      colors: {
        'fav-purple': '#5267DF',
        'fav-red': '#FA5959',
        'fav-blue': '#242A45',
        'fav-gray': '#9194A2',
        'fav-white': '#f7f7f7',
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
