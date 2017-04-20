/**
 * Created by LinChuQiang.
 */
//会去node_modules\vue\types\
import Vue from "vue";

// 导入组件
import about_me from "./../components/aboutme.vue";
import userlogin from "./../components/user-login.vue";

new Vue({
	el:".container",
	//Vue 实例的数据对象
	data:{},
	// 挂载组件,about_me就是组件名称
	components:{
		// <me_component> 将只在父模板可用
		"me_component":about_me,
		"user_login": userlogin
	}
	
})
