export default {
  convertStringToBool (boolStr) {
    return boolStr === 'true'
  },
  // 夾帶 cookie
  addCookie (token) {
    let weekDate = new Date()
    weekDate = weekDate.setDate(weekDate.getDate() + 7)
    document.cookie = `lawavaToken=${token};expires=${new Date(weekDate)};`
  },
  getToken () {
    return document.cookie.replace(/(?:(?:^|.*;\s*)lawavaToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
  },
  isLogin () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)lawavaToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    return token !== ''
  }
}
