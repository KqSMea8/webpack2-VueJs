/**
 * Created by LinChuQiang.
 */

import Vue from 'vue';
import Vuex from 'vuex';

// 导入Store

import * as state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

// import Cnode from './modules/cnode'

// unknown getter config 已解决，注意引入方式，引入的应该是对象
/*console.log(state);
console.log(getters);
console.log(mutations);
console.log(actions);*/

Vue.use(Vuex);

const cnodeStore = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  /*modules: {
    Cnode
  },*/
  strict:false
});

export default cnodeStore
