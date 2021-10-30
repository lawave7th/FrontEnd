import request from './axios'

// 登入註冊 api
export const userLogin = (data) => {
  return request('post', 'api/login', data)
}

export const userRegister = (data) => {
  return request('post', 'api/signUp', data)
}

// 手機驗證 、 信箱驗證

export const userVerifyMail = (data) => {
  return request('post', 'api/mailVeriCode', data)
}

export const userVerifyPhone = (data) => {
  return request('post', 'api/snsVeriCode', data)
}

// 忘記密碼 api

export const userForgetPassword = (data) => {
  return request('post', 'api/resetPwd', data)
}

// 首頁

// 取得儀表板資料

export const getIndexDashboard = () => {
  return request('get', 'api/indexDashboard')
}

// 律師媒合頁

export const getLawyerList = () => {
  return request('get', 'api/lawyerlist/1')
}

// 常見問題頁

export const getCommonProblem = () => {
  return request('get', 'api/faq/1')
}
