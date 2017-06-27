import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './configs/routes'
import store from './vuex/index'
import './styles/main.less'
import 'github-markdown-css' // markdown css
// import './styles/iconfont/iconfont.css';
// 注册一个全局自定义指令 v-focus
Vue.directive('focus', {
	// 当绑定元素插入到 DOM 中
	inserted: function (el, binding) {
		// 聚焦元素
		if (binding.value) {
			el.focus()
		}
	}
})
Vue.use(VueRouter)
// 实例化VueRouter
const router = new VueRouter({
	routes,
	mode: 'history',
	scrollBehavior (to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return {x: 0, y: 0}
		}
	}
})
// 处理刷新的时候vuex被清空但是用户已经登录的情况
if (localStorage.getItem('userInfo')) {
	store.commit('LOGIN', JSON.parse(localStorage.getItem('userInfo')))
}
// todo-vuerouter:router.beforeEach 每个路由进入前触发登录验证
router.beforeEach((to, from, next) => {
	/* to.matched:一个数组，包含当前路由的所有嵌套路径片段的路由记录。路由记录就是 routes 配置数组中的对象副本（还有在 children 数组）。 */
	if (to.matched.some(record => record.meta.requiresAuth)) {
		if (store.state.userInfo.loginname) { // 已登录
			next()
		} else { // 未登录
			next({
				name : 'login',
				query: {redirect: encodeURIComponent(to.name)} // 缓存应该跳的页面,方便登录后直接跳转
			})
		}
	} else {
		next()
	}
})
new Vue({
	router,
	store
}).$mount('#app')
router.push('/')
