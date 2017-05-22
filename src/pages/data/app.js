/**
 * Created by LinChuQiang.
 */
import Vue from 'vue'
import store from './store'

import bootstrap from 'bootstrap'

import NavBar from '../../layouts/NavBar.vue'

import App from './App.vue'
import Counter from './Counter.vue'

// require ('@/css/page/index.css')
require ('@/css/page/h1h2.scss')

store.commit('increment')
store.commit('increment')
store.commit('increment')
store.commit('increment')
store.commit('increment')

Vue.config.productionTip = false
Vue.component('nav-bar', NavBar)

/*
Vue.component('my-app', Counter)
Vue.component('my-counter', App)
*/

// 注意区分render el $mount
new Vue({
  store,
  components:{
    'my-counter':Counter,
    'my-app':App,
  }
}).$mount('.container')

store.commit('increment')
store.commit('increment')
store.commit('increment')
store.commit('increment')
store.commit('increment')
