/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {

    container: {
      center: true,
      padding : '16px'
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        aboutBg : '#f7f7f7',
        textBg : '#f68da6',
        btnBg : '#e74d83'
      },

      screens:{
        '2xl' : '1320px',
      }
    },
  },
  plugins: [],
}
