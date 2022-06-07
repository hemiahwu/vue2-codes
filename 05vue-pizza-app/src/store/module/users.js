const state = {
  currentUser: localStorage.user || null
}

const getters = {
  currentUser: state => state.currentUser
}

const mutations = {
  // 更改用户的状态信息
  userStatus(state, user) {
    if (user) {
      state.currentUser = user
      state.isLogin = true
    } else {
      state.currentUser = null
      state.isLogin = false
    }
  }
}

const actions = {
  // 应用mutations
  setUser({ commit }, user) {
    commit("userStatus", user)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}