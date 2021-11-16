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
// 查詢是否為律師

export const confirmStatus = () => {
  return request('get', 'mem/isLawyer')
}

// 首頁

// 獲得搜尋框資料

export const getFilterCondition = () => {
  return request('get', 'api/lawyerlist/selectlist')
}

// 獲得搜尋資料

export const getSelectData = (url) => {
  return request('get', url)
}

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

// 律師可供預約時間

export const getAppointmentTime = (url) => {
  return request('get', url)
}

export const postAppointmentTime = (url, data) => {
  return request('post', url, data)
}

// 常見問題頁

export const getCommonProblem = () => {
  return request('get', 'api/faq')
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

// 律師設定可預約時間

export const getLawyerReservationSet = () => {
  return request('get', 'mem/lawyerReservationSet')
}

// 律師更改可預約時間

export const lawyerReservationSet = (data) => {
  return request('put', 'mem/lawyerReservationSet', data)
}

// 會員審核資料/已預約/已完成

export const getReservationData = (url) => {
  return request('get', url)
}

// 審核通過/拒絕

export const putReservationAssent = (data) => {
  return request('put', 'mem/reservationAssent', data)
}

// 封鎖民眾

export const blockMembers = (url) => {
  return request('post', url)
}

// 寄送提醒信

export const sendRemindMail = (data) => {
  return request('post', 'lawyer/remindMail', data)
}

// 獲取封鎖名單

export const getBlacklist = () => {
  return request('get', 'lawyer/blackList/')
}

// 解除封鎖

export const unblock = (url) => {
  return request('post', url)
}

// 諮詢記錄取得評價

export const getScoreData = (url) => {
  return request('get', url)
}

// 民眾會員中心

// 收藏律師

export const getCollection = () => {
  return request('get', 'public/myCollection')
}

// 取消預約

export const cancelAppointment = (url) => {
  return request('delete', url)
}

// 聊天室

// 取得會員資料

export const getChatRoomInformation = (url) => {
  return request('get', url)
}

// 取消資訊

export const getRejectionData = (url) => {
  return request('get', url)
}

// 評分

export const putScore = (url, data) => {
  return request('put', url, data)
}

// 獲得聊天室歷史紀錄

export const getChatHistory = (url) => {
  return request('get', url)
}
