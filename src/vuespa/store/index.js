/**
 * Created by LinChuQiang.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'
// 导入Store插件
import plugins from './plugins'

// 导入Store - Modules
import UserModule from './modules/UserModules'
import NewsModules from './modules/NewsModules'
import TodoList from './modules/TodoList'

Vue.use(Vuex)

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
})
