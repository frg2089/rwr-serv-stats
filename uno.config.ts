import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify({}),
    presetUno(),
    presetIcons({
      collections: {
        fab: async () => await import('@iconify-json/fa6-brands').then((i) => i.icons),
        far: async () => await import('@iconify-json/fa6-regular').then((i) => i.icons),
        fas: async () => await import('@iconify-json/fa6-solid').then((i) => i.icons)
      },
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle'
      }
    })
  ],
  theme: {
    colors: {
      primary: '#7ea10a',
      'primary-light': '#9cc321',
      second: '#395daa',

      'neutral-dark': '#292929',
      neutral: '#333333',
      'neutral-alt': '#3f3f3f',
      'neutral-secondary': '#444444',
      'neutral-secondary-alt': '#4d4d4d',
      'neutral-thertiary': '#606060',
      'neutral-thertiary-alt': '#727272',
      'neutral-light': '#939393',
      'neutral-lighter': '#fdfdfd'
    }
  }
})
