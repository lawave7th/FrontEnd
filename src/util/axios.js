import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.VUE_APP_API,
  headers: { 'Content-Type': 'application/json' }
})

instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = localStorage.getItem('lawavaToken')
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response
  },
  function (error) {
    console.log(error)
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
