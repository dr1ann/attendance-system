// In your Tailwind CSS configuration file (tailwind.config.js)
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
      textShadow: {
        custom: '2px 4px 3px rgba(0,0,0,.3)'
      }
    },
  },
  plugins: [],
}
