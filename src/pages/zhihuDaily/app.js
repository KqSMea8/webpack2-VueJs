import Vue from 'vue'
import router from './router'
import store from './store'
import App from './app.vue'
// import style file
import './assets/styles/typo.css'
import './assets/styles/animate.scss'
import './assets/styles/grid.scss'
/* eslint-disable no-new */
import { proxyserver } from './common/api'
Vue.mixin({
	data () {
		return {
			proxyserver: proxyserver
		}
	}
})
new Vue({
	el: '#app',
	router,
	store,
	...App
})
router.push('/home')
