import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import vueTap from 'v-tap'
import fastclick from 'fastclick'

import App from './app.vue'
import goods from './components/goods/goods'
import ratings from './components/ratings/ratings'
import seller from './components/seller/seller'

require('./static/css/reset.css')

Vue.use(vueTap)
Vue.use(VueRouter)
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		count: 0
	},
	// 添加的商品元素
	addCartEl: {},
	mutations: {
		increment (state) {
			state.count++
		}
	}
})
const router = new VueRouter({
	routes: [{
		path: '/goods',
		component: goods
	}, {
		path: '/ratings',
		component: ratings
	}, {
		path: '/seller',
		component: seller
	}],
	linkActiveClass: 'active'
})

new Vue({
	router,
	store,
	template: '<App/>',
	components: {
		App
	},
	data: {
		eventHub: new Vue()
	}
}).$mount('#app')

router.push('goods')
