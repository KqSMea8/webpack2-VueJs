// 导入组件
import About from '../views/About.vue'
import Todo from '../views/Todo.vue'
import News from '../views/News.vue'
import Home from '../views/Home.vue'
// import userLogin from "./../views/user-login.vue";
// 异步加载的方式
const UserLogin = resolve => {
	// 成功之后的回调
	resolve(require('../views/UserLogin.vue'))
}
// import newsDetail from "../views/news-detail.vue";
const NewsDetail = resolve => {
	resolve(require('../views/NewsDetail.vue'))
}

const Blank = {
	/* todo-vueRouter:此处的<router-view>是/vuespa的子路由容器 */
	template: `
    <keep-alive>
       <router-view></router-view>
    </keep-alive>
  `,
	watch   : {
		'$route' (to, from) {
			console.log(`网址从 ${from.fullPath} 路径到 ${to.fullPath} 路径！`)
		}
	}
}
export default [
	{
		path     : '/vuespa',
		component: Blank,
		children : [
			{path: 'about', component: About},
			{path: 'todo', component: Todo},
			{path: 'news', component: News},
			{path: 'login', component: UserLogin},
			{path: 'home', component: Home}
		]
	},
	{path: '/data', component: Home, name: 'Home'},
	{path: '/news', component: News, name: 'News'},
	{path: '/news/:newsid', component: NewsDetail, name: 'NewsDetail'},
	{path: '/login', component: UserLogin, name: 'UserLogin'},
	{path: '/about', component: About, name: 'About'}
]
