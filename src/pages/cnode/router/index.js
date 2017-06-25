import Vue from 'vue'
import VueRouter from 'vue-router'
// todo-vuerouter:完成了组件的异步引入
const Home = resolve => {
	require.ensure(['../views/index.vue'], () => {
		resolve(require('../views/index.vue'))
	}, 'cnode_index')
}
const List = resolve => {
	require.ensure(['../views/list.vue'], () => {
		resolve(require('../views/list.vue'))
	}, 'cnode_list')
}
const routes = [
	// 广告中转站
	{
		path     : '/',
		component: Home,
		name     : 'home'
	},
	// 主题列表
	{path: '/list', component: List, name: 'list'},

	// menu.vue 登录
	{
		path: '/login',
		name: 'login',
		component (resolve) {
			require.ensure(['../views/login.vue'], () => {
				resolve(require('../views/login.vue'))
			}, 'cnode_login')
		}
	},

	{
		path: '/user/:loginname',
		name: 'user',
		component (resolve) {
			require.ensure(['../views/user.vue'], () => {
				resolve(require('../views/user.vue'))
			}, 'cnode_user')
		}
	},
	// 主题详情
	{
		path: '/topic/:id',
		name: 'topic',
		component (resolve) {
			require.ensure(['../views/topic.vue'], () => {
				resolve(require('../views/topic.vue'))
			}, 'cnode_topic')
		}
	},
	// header.vue -> /add 新建主题按钮
	{
		path: '/add',
		name: 'add',
		component (resolve) {
			require.ensure(['../views/new.vue'], () => {
				resolve(require('../views/new.vue'))
			}, 'cnode_new')
		},
		// 需要登陆后进入
		meta: {requiresAuth: true}
	},
	// menu.vue
	{
		path: '/message',
		name: 'message',
		component (resolve) {
			require.ensure(['../views/message.vue'], () => {
				resolve(require('../views/message.vue'))
			}, 'cnode_message')
		},
		meta: {requiresAuth: true}
	},
	// menu.vue
	{
		path: '/about',
		name: 'about',
		component (resolve) {
			require.ensure(['../views/about.vue'], () => {
				resolve(require('../views/about.vue'))
			}, 'cnode_about')
		}
	},
	{path: '*', redirect: '/'}
	// {path: '/cnodevue', component: Home, name: 'cnodevue'},
]
Vue.use(VueRouter)
export default new VueRouter({
	mode: 'history',
	routes
})
