import { createStore } from 'vuex'
export default createStore({
  state: {
    nowPage: ''
  },
  mutations: {
    updatePage (state, status) {
      state.nowPage = status.nowPage
    }
  }

})
