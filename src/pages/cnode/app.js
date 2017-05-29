import Vue from 'vue'
import VueRouter from 'vue-router'
import Zepto from 'webpack-zepto'
import FastClick from 'fastclick'

// 导入路由
import router from './router/index'
// 导入数据
import vuexStore from './store/index'
// 导入插件
import plugin from './plugin/index'
// var filters =  require('./plugin/filters')
import * as filters from './plugin/filters'

// 导入组件
console.log(vuexStore);

// 导入样式
// require('./app.css')

const isDevelopment = process.env.NODE_ENV === 'development'

Vue.config.devtools = isDevelopment
Vue.config.productionTip = false
Vue.use(plugin)
// 实例化Vue的filter
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

Zepto.ajaxSettings.crossDomain = true
FastClick.attach(document.body)

// 处理刷新的时候vuex被清空但是用户已经登录的情况
if (window.sessionStorage.user) {
  vuexStore.dispatch('setUserInfo', JSON.parse(window.sessionStorage.user))
}

// 登录中间验证，页面需要登录而没有登录的情况直接跳转登录
router.beforeEach((to, from, next) => {
  // 处理左侧滚动不影响右边
  Zepto('html, body, #page').removeClass('scroll-hide')
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (vuexStore.state.userInfo.userId) {
      next()
    } else {
      next({
        path : '/login',
        query: {redirect: to.fullPath},
      })
    }
  } else {
    next()
  }
})

const cnodeVue = new Vue({
  router,
  store: vuexStore,
})
cnodeVue.$mount('#app')