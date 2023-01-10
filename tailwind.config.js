/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      spacing: {
        485: '485px'
      },
      colors: {
        primary: '#7ea10a',
        'primary-light': '#9cc321',
        second: '#395daa',

        black: '#fff',
        'neutral-dark': '#292929',
        neutral: '#333333',
        'neutral-alt': '#3f3f3f',
        'neutral-secondary': '#444444',
        'neutral-secondary-alt': '#4d4d4d',
        'neutral-thertiary': '#606060',
        'neutral-thertiary-alt': '#727272',
        'neutral-light': '#939393',
        'neutral-lighter': '#fdfdfd',
        white: '#fff'
      }
    }
  },
  plugins: []
}
