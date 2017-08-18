// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/css/reset.css'
import './static/iconfont/material-icons.css'

import './assets/css/common.css'
import 'animate.css'

Vue.use(VueMaterial)
Vue.use(VueAwesomeSwiper)
Vue.material.registerTheme({
  default: {
    primary: {
      color: 'red',
      hue: 700
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
