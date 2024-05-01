// In your Tailwind CSS configuration file (tailwind.config.js)
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        extrasmallscreens:'300px',
        smallscreens: "510px",
        smallerscreens: "430px",
        tabletscreen: "824px",
        bigscreens: '1920px'
      },
      textShadow: {
        custom: '2px 4px 3px rgba(0,0,0,.3)'
      },
      gridTemplateColumns: {
        'fit': 'repeat(auto-fill, minmax(200px, 1fr))'
      },
      fontFamily: {
        'sans': ['Söhne', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Ubuntu', 'Cantarell', 'Noto Sans', 'sans-serif', 'Helvetica Neue', 'Arial', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
        'custom': ['Helvetica, Arial, sans-serif']

      }
    },
  },
  plugins: [],
}
