/* eslint-disable */
import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './app.vue'
import store from './store'
import router from './router'

require('bootstrap')
import 'font-awesome/css/font-awesome.min.css'

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router)
//array getters.groupNodes
Array.prototype.group = function (key) {
	var result = {}
	this.map(item => ({section: key(item), value: item})).forEach(item => {
		result[item.section] = result[item.section] || []
		result[item.section].push(item.value)
	})
	return Object.keys(result).map(item => ({section: item, data: result[item]}))
}
if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
	navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
		console.log('Service worker registered : ', registration.scope)
	}).catch(function (err) {
		console.log('Service worker registration failed : ', err)
	})
}
// create the app instance.
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.
new Vue({
	el: '#app',
	router,
	store,
	...App
})
router.push({ path: '/'})


