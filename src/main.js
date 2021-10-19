import { createApp } from 'vue'
import 'bootstrap'
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.component('Loading', Loading)
app.mount('#app')
