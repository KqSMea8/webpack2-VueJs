import Vue from 'vue'
import Axios from './utils/diyaxios'
import router from './router/router'
import store from './store'
// 注册为全局组件
import App from './app.vue'
import toast from './components/toast.vue'

// see http://www.muse-ui.org/#/install
import MuseUI from 'muse-ui'
require('muse-ui/dist/muse-ui.css')
require('./assets/theme.less')

Vue.use(MuseUI)
Vue.prototype.$http = Axios // 类似于vue-resource的调用方法，之后可以在实例里直接用this.$http.get()等
Vue.component('Toast', toast)
/* eslint-disable no-new */
new Vue({
  router,
  store,
  components: {
    App
  }
}).$mount('#app')
