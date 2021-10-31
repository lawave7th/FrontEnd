export default {
  convertStringToBool (boolStr) {
    return boolStr === 'true'
  },
  setToken (token) {
    localStorage.setItem('lawavaToken', token)
  },
  isLogin () {
    const token = localStorage.getItem('lawavaToken')
    return token !== ''
  }
}
