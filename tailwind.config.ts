import { Config } from 'tailwindcss'
import colors from './src/colors'

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors
    }
  },
  plugins: []
} as Config
