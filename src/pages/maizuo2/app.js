// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import FastClick from 'fastclick'
import routerConfig from './routers'
import store from './vuex/store'


window.addEventListener('load', () => {
	FastClick.attach(document.body)
})

Vue.use(VueRouter)
Vue.use(VueResource)
const router = new VueRouter({routes: routerConfig})
/* eslint-disable no-new */
new Vue({
	router,
	store,
	el: '#app',
	render: h => h(App)
})
