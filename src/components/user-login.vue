/**
* Created by LinChuQiang on 2017/4/20.
*/

<template>
	<div class = "row">
		<div id = "user-login" class = "col-md-8 col-md-offset-2">
			<h2 class = "text-center">用户登录</h2>
			<form class = "form-horizontal" role = "form">
				<user-name :placeholder = "placeholder"></user-name>
				<user-pass plahol = "请输入用户密码"></user-pass>
				<user-area></user-area>
				<user-fav></user-fav>
				<user-submit></user-submit>
			</form>
		</div>
	</div>
</template>

<style>
	@import "./../css/bootstrap.min.css";
	
	#user-login {
		margin-top: 50px;
	}
</style>

<script>
	import username from "./user/user-name.vue";
	import userpass from "./user/user-pass.vue";
	import userarea from "./user/user-area.vue";
	import userfav from "./user/user-fav.vue";
	import usersubmit from "./user/user-submit.vue";
	
	export default{
		
		props      : [ 'placeholder' ],
		data() {
			return {};
		},
		methods    : {
			//将子组件user-area变化的值，更新到本组件的data数据中
			setValue(key,value){
				this.$data[key]=value
			}
		},
		components : {
			"user-name"   : username,
			"user-pass"   : userpass,
			"user-area"   : userarea,
			"user-fav"   : userfav,
			"user-submit" : usersubmit
		},
		created(){
			//alert("created: "+this.$children.length); //结果为0,说明子组件并没有挂载
		},
		mounted(){
			//alert("mounted: "+this.$children.length); //结果为4,说明子组件到这里已经挂载上了
			//四个子组件
			//因为forEach 里的this 并不是外面的this，所以后面用bind(this)。
			this.$children.forEach(function( value,key) {
				//console.log(value,key);
				value.$on('iptChange',this.setValue);
			}.bind(this))
		},
		beforeMount(){
			//alert("beforeMount: "+this.$children.length); //结果为0,说明子组件并没有挂载
		},
	}
</script>