import Vue from 'vue'
import axios from 'axios'

// 导入路由
import router from './router/index'
// 导入数据
import vuexStore from './store/index'
// 导入插件
import plugin from './plugin/index'

// 导入组件
import app from './app.vue'

// 导入样式
require('./app.css')

const isDevelopment = process.env.NODE_ENV === 'development'

Vue.config.devtools = isDevelopment
Vue.config.productionTip = false
Vue.use(plugin)

new Vue({
  router,
  store:vuexStore,
  render: h => h(app)
}).$mount('#app')