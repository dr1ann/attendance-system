/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        
        smallscreens: "430px",
        bigscreens: '1920px'
        
      },
    },
  },
  plugins: [],
}