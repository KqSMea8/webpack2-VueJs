import Vue from 'vue'
import { sync } from 'vuex-router-sync'

import App from './app.vue'
import store from './store'
import router from './router'
import * as filters from './filters'

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router)

// register global utility filters.
Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key])
})

// create the app instance.
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.
new Vue({
	el: '#app',
	router,
	store,
	...App // Object spread copying everything from App.vue
})

router.push('/')
