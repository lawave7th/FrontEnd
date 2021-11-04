import request from './axios'

// 扣除 formData 格式外的 api 皆透過此頁面管理

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

export const userResetPassword = (data) => {
  return request('post', 'api/resetPwd', data)
}

// 首頁

// 取得儀表板資料

export const getIndexDashboard = () => {
  return request('get', 'api/indexDashboard')
}

// 取得熱門律師

export const getIndexHotLawyer = () => {
  return request('get', 'api/indexhotlawyer')
}

// 取得會員回饋

export const getMemberPraise = () => {
  return request('get', 'api/hotPublic/')
}

// 律師媒合頁

export const getLawyerList = (url) => {
  return request('get', url)
}

// 收藏律師

export const collectLawyer = (url) => {
  return request('post', url)
}

// 律師詳細資訊頁

export const getLawyerDetailed = (url) => {
  return request('get', url)
}

// 律師詳細資料頁評價

export const getLawyerEvaluation = (url) => {
  return request('get', url)
}

// 常見問題頁

export const getCommonProblem = () => {
  return request('get', 'api/faq/1')
}

// 律師會員中心
// 側邊欄
export const getMemberSidebar = () => {
  return request('get', 'mem/lsideInfo')
}
// 會員資料
// 取得
export const getMemberData = () => {
  return request('get', 'mem/Info')
}
// 修改
export const reviseMemberData = (data) => {
  return request('put', 'mem/Info', data)
}

// 會員中心側邊欄位圖像
export const getMemberPhoto = () => {
  return request('get', 'mem/shotPhoto')
}

// 律師驗證圖片 get
export const lawyerCertificationData = () => {
  return request('get', 'lawyer/veriPhoto/')
}

// 律師公開個人檔案

export const lawyerChangePublic = (data) => {
  return request('put', 'mem/publicInfo/', data)
}
