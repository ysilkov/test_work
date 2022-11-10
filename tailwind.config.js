/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,jsx,ts,tsx}"],
    theme: {
      extend: {},
      screens: {
        'sm': {'min': '375px', 'max': '699px'},
        'lg': {'min': '700px', 'max': '1500px'},
      },
    },
    plugins: [],
  }