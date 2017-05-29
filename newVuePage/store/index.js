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

// import plugins from './plugins'

// 导入Store.Modules
/*import HeaderMod from './modules/header';
import FooterMod from './modules/footer';
import MenuMod from './modules/menu';
import NoticeMod from './modules/notice';*/



Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  strict:false
  /*modules: {
    headerM: HeaderMod,
    footerM: FooterMod,
    menuM: MenuMod,
    noticeM: NoticeMod
  }*/
});
