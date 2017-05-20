/**
 * Created by LinChuQiang.
 */
import Vue from 'vue'
import App from './App.vue'
import store from './store'

import bootstrap from 'bootstrap'
import NavBar from '../../layouts/NavBar.vue'
import Counter from './Counter.vue'


store.commit('increment')
store.commit('increment')
store.commit('increment')
store.commit('increment')
store.commit('increment')

Vue.component('nav-bar', NavBar)
Vue.component('counter', Counter)
Vue.component('app', App)
// 注意区分render el $mount
new Vue({
  store
}).$mount('.container')

store.commit('increment')
store.commit('increment')
store.commit('increment')
store.commit('increment')
store.commit('increment')
