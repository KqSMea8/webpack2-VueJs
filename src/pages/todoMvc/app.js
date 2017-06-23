import Vue from 'vue'
import router from './router'
import store from './vuex'
import App from './app.vue'
// 引入mock模块
import Mock from './mock'

Mock.start() // 并且执行初始化函数

Vue.config.productionTip = false

new Vue({
	el:'#app',
	router,
	store,
	template:'<App />',
	components:{App}
})
