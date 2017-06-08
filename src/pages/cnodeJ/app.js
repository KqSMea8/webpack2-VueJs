import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Plugins from './plugins/index'
import routes from './js/routes'

require('./scss/bootstrap.scss')
require('./assets/font-awesome.min.css')

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Plugins)

const router = new VueRouter({ routes })

// jscs:disable
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<router-view></router-view>',
  router
})
