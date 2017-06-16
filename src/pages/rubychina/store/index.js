import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules,
  getters
})

if (module.hot) {
	// 使 modules 成为可热重载模块
  module.hot.accept([modules], () => {
    const newModules = modules.default
    // 加载新模块
    store.hotUpdate({
      modules: newModules
    })
  })
}
export default store
