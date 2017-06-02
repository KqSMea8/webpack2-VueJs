/**
 * Created by LinChuQiang.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

import StoreMoudule_productList from './modules/productList'
import StoreMoudule_cart from './modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  mutations,
  actions,
  modules: {
    StoreMoudule_productList,
    StoreMoudule_cart
  }
})
