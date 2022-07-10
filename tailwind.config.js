/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,vue}'],
  theme: {
    extend: {
      colors: {
        'neutral-2': 'rgb(96, 96, 96)',
        'neutral-1': 'rgb(63, 63, 63)',
        'neutral-0': 'rgb(41, 41, 41)',
        accent: 'rgb(125, 161, 9)'
      }
    }
  },
  plugins: []
}
