import { createStore } from 'vuex'
export default createStore({
  state: {
    nowPage: '',
    token: ''
  },
  mutations: {
    updatePage (state, status) {
      state.nowPage = status.nowPage
    },
    updateToken (state, token) {
      state.token = token
    }
  }

})
