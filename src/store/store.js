import { createStore } from 'vuex'
export default createStore({
  state: {
    nowPage: '',
    token: '',
    isLoading: false
  },
  mutations: {
    updatePage (state, status) {
      state.nowPage = status.nowPage
    },
    updateToken (state, token) {
      state.token = token
    },
    setLoading (state, payload) {
      state.isLoading = payload
    }
  },
  actions: {
    setLoading (context, payload) {
      context.commit('setLoading', payload)
    }
  }
})
