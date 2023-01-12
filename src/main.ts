import App from '@/App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'tailwindcss/tailwind.css'
import { createApp } from 'vue'

createApp(App)
  .component('FontAwesomeIcon', FontAwesomeIcon)
  .mount('main[vue]')
