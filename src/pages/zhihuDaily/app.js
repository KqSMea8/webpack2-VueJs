import Vue from 'vue'
import router from './router'
import store from './store'
import App from './app.vue'
// import style file
import './assets/styles/typo.css'
import './assets/styles/animate.scss'
import './assets/styles/grid.scss'
/* eslint-disable no-new */
// 旧图片代理API设置
import { proxyserver } from './common/api'
Vue.mixin({
	data () {
		return {
			proxyserver: proxyserver
		}
	}
})

// 新图片API代理设置
Vue.filter('imageUrlPrefix', (value) => {
	if (value !== undefined) {
		const url = value.substr(7)
		const prefix = 'https://images.weserv.nl/?url='
		return prefix + url
	}
})

new Vue({
	el: '#app',
	router,
	store,
	...App
})
// router.push('/home')
// 启动界面图像获取已经失效 BootPage.vue
router.push('/')
