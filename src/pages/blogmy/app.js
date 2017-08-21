import Vue from 'vue'

import '@/static/css/normalize.css'

import app from './app.vue'
Vue.config.devtools = true
Vue.config.productionTip = true

new Vue({
	el         : '#app',
	render     : h => h(app),
	renderError: (h, err) => { return h('pre', {style: {color: 'red'}}, err.stack) }
})
