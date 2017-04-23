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
		password: '',
		newsList:[],
		newsDetl:{}
	},
	//更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
	//不能直接调用一个 mutation.handler()
	//只是事件注册
	//每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方
	mutations: {
		//当触发一个类型为 showPassword 的 mutation 时，调用此函数。
		showPassword: state => alert(state.password),
		//agreeNum为mutation的载荷（Payload）
		//在大多数情况下，载荷应该是一个对象
		setAgree(state,agreeNum){
			state.newsDetl.agree += agreeNum;
		}
	},
	//可以认为是 store 的计算属性
	//数据过滤处理，保留isdeleted为false 的记录
	getters:{
		getNews(state,getters){
			return state.newsList.filter(news =>{
				return !news.isdelected;
			});
		}
	},
	actions:{
		//Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters。
		agree(context,newsid){
			//基于全局Vue对象使用http
			Vue.http.post('../agree.php',{newsid:newsid},{emulateJSON:true}).then( function( res ) {
				//唤醒mutations中的setAgree方法，将从后台获取到的点赞数更新到Store.state
				context.commit("setAgree",res.body.agree);
			},function( error ) {
			
			})
		}
	}
})


const myvue = new Vue( {
	router : router,
	store:vuex_store
} ).$mount( '.container' )
router.push( { name : 'aboutMe' } )

