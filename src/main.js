import { createApp } from 'vue'
import 'bootstrap'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate'
import rules from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n'
import TW from './util/i18n/VeeValidateI18n'
import PrimeVue from 'primevue/config'
import Rating from 'primevue/rating'
import PrimeIcons from 'primeicons/primeicons.css'
import ToastService from 'primevue/toastservice'
import Toast from 'primevue/toast'
import './assets/scss/helpers/prime-style.css'
import 'primevue/resources/primevue.min.css'

// 引入全領域方法
import Public from './util/public'
import store from './store/store'

// Veevalidate 加入所有規則
Object.keys(rules).forEach((rule) => {
  defineRule(rule, rules[rule])
})
configure({
  generateMessage: localize({ zh_TW: TW }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
})

localize('./zh_TW', TW)

const app = createApp(App)
app.config.globalProperties.$public = Public
app.use(router)
app.component('Loading', Loading)
// app.use($)
app.use(PrimeVue)
app.use(PrimeIcons)
app.component('Rating', Rating)
app.component('Toast', Toast)
app.use(store)
app.use(VueAxios, axios)
app.component('VForm', Form)
app.component('VField', Field)
app.component('ErrorMessage', ErrorMessage)
app.use(ToastService)
app.mount('#app')
