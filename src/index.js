/**
 * Created by Administrator on 2017/4/18.
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// 导入路由
import routers from './vuespa/router/index'
// 导入数据
import stores from './vuespa/store/index'
// 导入全局插件
import plugins from './vuespa/plugin/index'

// 导入组件
import NavBar from './layouts/NavBar.vue'

// 导入样式
// bootstrap v3.3.7
require('bootstrap')
require('@/vuespa/css/index.css')

function determineDate () {
  require.ensure([], function (require) {
    var moment = require('moment/moment.js')
    console.log(moment().format())
  }, 'moment')
}
determineDate()

function myJq () {
  require.ensure([], function (require) {
    $('[data-toggle="tooltip"]').tooltip()
    console.log('JQuery 触发 tooltip ！')
  }, 'moment')
}
myJq()

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
// 注册全局插件
Vue.use(plugins)

Vue.component('nav-bar', NavBar)

const router = new VueRouter({
  routes: routers
})

new Vue({
  router: router,
  store: stores
}).$mount('.container')
