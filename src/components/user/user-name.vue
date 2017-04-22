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
				<input type = "text" class = "form-control" :placeholder = "placeholder" :username = "username" @input = "username=$event.target.value" @change = "userNameChg" @blur = "userNameVaild" v-uname:foo.a.b = "username" v-focus>
				<label class = "label label-danger" v-if = "showErrorLabel">用户不合法</label>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props      : [ "placeholder" ],
		data       : function() {
			return {
				username       : '',
				showErrorLabel : false
			};
		},
		methods    : {
			//文本框change事件调用方法userNameChange
			userNameChg(){
				// 调用父组件的方法
				this.$emit( "iptChange","username",this.username )
			},
			userNameVaild(){
				// 用户名改变的方法里判断 用户名是否复合要求
				if( this.checkUserName( this.username ) ) {
					this.showErrorLabel = false; // 如果验证没有通过就显示错误提示
				} else {
					this.showErrorLabel = true;
				}
			}
		},
		mounted(){}
	}
</script>