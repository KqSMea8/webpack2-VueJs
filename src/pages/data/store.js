/**
 * Created by LinChuQiang.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0
}
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd',
  myfilter: state => state.count === 3 ? 'yes 3' : 'not 3'
}
const mutations = {
  increment (state) {
    state.count++
  },
  decrement (state) {
    state.count--
  }
}
const actions = {
  incrementIfOdd (context) {
    if ((context.state.count + 1) % 2 === 0) {
      context.commit('increment')
    }
  },
  incrementAsync ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 3000)
    })
  }
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
