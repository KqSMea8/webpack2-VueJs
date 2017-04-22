/**
 * Created by LinChuQiang.
 */
//会去node_modules\vue\types\
import Vue from "vue";
//通过 Browserify 或 Webpack 使用 CommonJS 兼容模块
import VueRouter  from "vue-router";
import VueResource from "vue-resource";
import Vuex from 'vuex';

// 导入组件
import pageNav from "./../components/page-nav.vue";
import aboutMe from "./../components/aboutme.vue";
//import userLogin from "./../components/user-login.vue";
const userLogin = resolve => {
	// 成功之后的回调
	resolve( require( "./../components/user-login.vue" ) ); // 这就是异步加载的方式
}
import news from "./../components/news.vue";
//import newsDetail from "./../components/news-detail.vue";
const newsDetail = resolve => {
	// 成功之后的回调
	resolve( require( "./../components/news-detail.vue" ) ); // 这就是异步加载的方式
}
import validate from "./../components/validate";
// 全局使用插件
Vue.use( VueRouter );
Vue.use( VueResource );
Vue.use( validate );
Vue.use( Vuex );


const routes = [
	{ path : '/news',component : news,name : 'news', },
	{ path : '/news/:newsid',component : newsDetail,name : 'newsDetail', },
	{ path : '/login',component : userLogin,name : 'userLogin', },
	{ path : '/about',component : aboutMe,name : 'aboutMe', },
]
const router = new VueRouter( {
	routes
} )
//注册全局组件，使用 Vue.component(tagName, options)
Vue.component( "nav_component",pageNav )

const vuex_store = new Vuex.Store({
	state: {
		password: ''
	},
	mutations: {
		showPassword: state => alert(state.password)
	}
})


const myvue = new Vue( {
	router : router,
	store:vuex_store
} ).$mount( '.container' )
router.push( { name : 'aboutMe' } )

