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
  setToken () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = `${token}`
  }
}
