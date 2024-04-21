/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        smallscreens: "510px",
        smallerscreens: "430px",
        tabletscreen: "824px",
        bigscreens: '1920px'
        
      },
    },
  },
  plugins: [],
}