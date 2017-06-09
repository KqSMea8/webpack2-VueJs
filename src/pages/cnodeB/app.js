import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home'
import themeDetails from './components/themeDetails'
import userData from './components/userData'
import noob from './components/Noob'
import about from './components/About'
import login from './components/login'
import api from './components/API'
import forgetPassword from './components/forgetPassword'

import store from './store'

import App from './app.vue'

import './less/reset.less'

/* eslint-disable no-new */
Vue.use(VueRouter);
const routes = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/topic/:id',
		component: themeDetails
	},
	{
		path: '/user/:name',
		component: userData
	},
	{
		path: '/getstart',
		component: noob
	},
	{
		path: '/about',
		component: about
	},
	{
		path: '/api',
		component: api
	},
	{
		path: '/login',
		component: login
	},
	{
		path: '/search_pass',
		component: forgetPassword
	}
];

const router = new VueRouter({
	routes
})

new Vue({
	el: '#app',
	store,
	router,
	template: '<App/>',
	components: { App }
})
