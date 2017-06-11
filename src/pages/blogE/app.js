import Vue from 'vue'
import ElementUI from 'element-ui'
import router from './routes/index'
import store from './store/index'

import 'element-ui/lib/theme-default/index.css'
import './assets/css/commen.css'// 这里的样式可以覆盖index.css

import App from './app.vue'

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
