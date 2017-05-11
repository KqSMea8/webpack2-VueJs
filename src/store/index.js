/**
 * Created by LinChuQiang.
 */
import Vue from 'vue';
import Vuex from 'vuex';

import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'
import plugins from './plugins'

// 导入Store - Modules
import UserModule from './modules/UserModules';
import NewsModules from './modules/NewsModules';
import TodoList from './modules/TodoList';



Vue.use(Vuex);

export default new Vuex.Store({
  getters,
  mutations,
  actions,
  modules: {
    users: UserModule,
    news: NewsModules,
    todolist: TodoList
  },
  plugins
});
