/**
 * Created by LinChuQiang.
 */
import Vue from 'vue';
import Vuex from 'vuex';

// 导入Store - Modules
import UserModule from './modules/UserModules';
import NewsModules from './modules/NewsModules';



Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users: UserModule,
    news: NewsModules
  }
});
