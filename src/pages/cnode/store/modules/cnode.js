const state={
  userInfo: {}
}
const getters={
  getUserInfo(state) {
    return state.userInfo;
  }
}
const actions={
  setUserInfo({ commit }, user) {
    commit('setUserInfo', user);
  }
}
const mutations={
  setUserInfo(state, userInfo) {
    state.userInfo = userInfo;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}