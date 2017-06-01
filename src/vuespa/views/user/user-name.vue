/**
* Created by LinChuQiang on 2017/4/20.
*/

<template>
	<div class = "row">
		<div class = "form-group">
			<label class = "col-sm-2">用户名</label>
			<div class = "col-sm-10">
				<!--:username 在input上绑定一个username属性 赋值为 组件的data.username -->
				<!--触发 input 事件时，将该元素的值，更新到 组件的data.username-->
				<!--<input type = "text" class = "form-control" :placeholder = "placeholder" :username = "username" @input = "username=$event.target.value" @change = "userNameChg" v-uname:foo.a.b = "username" v-focus>-->
				<!--user-name父组件给子组件validate-text的childchildPlaceholder传childPlaceholder-->
				<!--全局注册validate-text组件-->
				<validate-text :childchildPlaceholder = "childPlaceholder" @childvalueChg="userNameChg"></validate-text>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		//声明并接收父组件user-login的childPlaceholder
		props      : [ "childPlaceholder" ],
		data       : function() {
			return {};
		},
		methods    : {
			//文本框change事件调用方法userNameChange
			userNameChg(username,usernamevalue){
				// 触发本组件注册的iptChange()事件，实际上是在调用父组件UserLogin的方法setValue()
				this.$emit( "iptChange",username,usernamevalue )
			}
		}
	}
</script>
