/**
 * Created by LinChuQiang.
 */
//会去node_modules\vue\types\
import Vue from "vue";
//通过 Browserify 或 Webpack 使用 CommonJS 兼容模块
import VueRouter  from "vue-router";
// 导入组件
import pageNav from "./../components/page-nav.vue";
import aboutMe from "./../components/aboutme.vue";
import userLogin from "./../components/user-login.vue";
import news from "./../components/news.vue";

// 全局使用插件
Vue.use( VueRouter );
const routes = [
	{ path : '/news',component : news,name : 'news', },
	{ path : '/login',component : userLogin,name : 'userLogin', },
	{ path : '/about',component: aboutMe,name : 'aboutMe', },
]
const router = new VueRouter( {
	routes
} )
//注册全局组件，使用 Vue.component(tagName, options)
Vue.component("nav_component",pageNav);
const myvue = new Vue( {
	router:router
} ).$mount( '.container' )


