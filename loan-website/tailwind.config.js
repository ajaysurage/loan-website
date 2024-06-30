/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        customBlue: '#3a7cdd',  // Add your custom color here
        customGreen: '#24c8a6',  // Add your custom color here
        navbg: 'rgb(40, 44, 60)',  // Add your custom color here
      },
    },
  },
  plugins: [],
}