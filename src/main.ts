import 'virtual:uno.css'
import { createApp } from 'vue'
import App from './App.vue'

if (import.meta.env.DEV) {
  console.log(`RWR_SERVER_LIST: ${import.meta.env.RWR_SERVER_LIST} RWR_NOTICE_URI: ${import.meta.env.RWR_NOTICE_URI} RWR_ADVANCED_INFO_URI: ${import.meta.env.RWR_ADVANCED_INFO_URI ?? ''}`)
}

createApp(App).mount('#app')
