/**
 * Created by LinChuQiang.
 */
import Vue from 'vue'
import App from './App.vue'
import store from './store'

store.commit('increment')
store.commit('increment')
store.commit('increment')
store.commit('increment')
store.commit('increment')

new Vue({
  el: '#el',
  store,
  render: c => c(App)
})

store.commit('increment')
store.commit('increment')
store.commit('increment')
store.commit('increment')
store.commit('increment')
