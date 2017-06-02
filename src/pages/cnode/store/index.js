/**
 * Created by LinChuQiang.
 */

import Vue from 'vue'
import Vuex from 'vuex'

// 导入Store
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
// import Cnode from './modules/cnode'

Vue.use(Vuex)

const cnodeStore = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  /* modules: {
    Cnode
  }, */
  strict: true
})

export default cnodeStore
