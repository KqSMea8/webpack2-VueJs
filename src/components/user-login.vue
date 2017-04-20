/**
* Created by LinChuQiang on 2017/4/20.
*/

<template>
	<div class = "row">
		<div id = "user-login" class = "col-md-8 col-md-offset-2">
			<h2 class = "text-center">用户登录</h2>
			<form class = "form-horizontal" role = "form">
				<!--updateUserName是一个自定义事件名称-->
				<user-name ref = "username" :placeholder = "placeholder" @updateUserName="setUserName"></user-name>
				<user-pass plahol = "请输入用户密码"></user-pass>
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
	import usersubmit from "./user/user-submit.vue";
	export default{
		props      : [ 'placeholder' ],
		data() {
			return {
				username : '',
				userpass : ''
			};
		},
		methods    : {
			setUserName(iptname){
				this.username = iptname
			}
		},
		components : {
			"user-name"   : username,
			"user-pass"   : userpass,
			"user-submit" : usersubmit
		}
	}
</script>