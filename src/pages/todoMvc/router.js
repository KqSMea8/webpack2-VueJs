import Vue from 'vue'
import Router from 'vue-router'
import Layouts from './components/layouts.vue'
Vue.use(Router)
export default new Router({
	routes:[
		{
			name:'layouts',
			path:'/',
			component:Layouts
		}
	]
})
