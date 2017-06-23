import Vue from 'vue'
import Router from 'vue-router'
import Layouts from './components/layouts.vue'
import menuDetail from './components/menuDetail.vue'
Vue.use(Router)
export default new Router({
	routes:[
		{
			name:'layouts',
			path:'/',
			component:Layouts,
			children:[
				{
					path:'/todo/:id',
					name:'menuDetail',
					component:menuDetail
				}
			]
		}
	]
})
