import axios from 'axios'
import store from '@/store/store.js'

const instance = axios.create({
  baseURL: process.env.VUE_APP_API,
  headers: { 'Content-Type': 'application/json' }
})

instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    store.commit('setLoading', true)
    const token = localStorage.getItem('lawavaToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  function (error) {
    // Do something with request error
    store.commit('setLoading', true)
    return Promise.reject(error)
  }
)
instance.interceptors.response.use(
  function (response) {
    // Do something with response data
    store.commit('setLoading', false)
    return response
  },
  function (error) {
    if (error.response.data.Message !== 'An error has occurred.') {
      window.showToast.showErrorToast(error.response.data.Message)
    } else {
      window.showToast.showErrorToast('伺服器發生了一點錯誤，請您刷新頁面後重新嘗試')
    }
    store.commit('setLoading', false)
    return Promise.reject(error)
  }
)
export default function (method, url, data = null, config) {
  method = method.toLowerCase()
  switch (method) {
    case 'post':
      return instance.post(url, data, config)
    case 'get':
      return instance.get(url, { params: data })
    case 'delete':
      return instance.delete(url, { params: data })
    case 'put':
      return instance.put(url, data)
    case 'patch':
      return instance.patch(url, data)
    default:
      console.log(`未知的 method: ${method}`)
      return false
  }
}
