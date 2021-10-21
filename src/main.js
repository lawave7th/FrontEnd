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
app.use(router)
app.component('Loading', Loading)
app.use(VueAxios, axios)
app.component('VForm', Form)
app.component('VField', Field)
app.component('ErrorMessage', ErrorMessage)
app.mount('#app')
