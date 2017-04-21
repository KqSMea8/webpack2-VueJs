/**
* Created by LinChuQiang on 2017/4/20.
*/

<template>
	<div class="row">
		<div class="form-group">
			<label class="col-sm-2">用户名</label>
			<div class="col-sm-10">
				<!--:username 在input上绑定一个username属性 赋值为 组件的data.username -->
				<!--触发 input 事件时，将该元素的值，更新到 组件的data.username-->
				<input type="text" class="form-control" :placeholder="placeholder" :username="username" @input="username=$event.target.value" @change="userNameChg">
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:["placeholder"],
		data:function() {
			return {username:''};
		},
		methods:{
			//文本框change事件调用方法userNameChange
			userNameChg(){
				// 调用父组件的方法
				this.$emit("iptChange","username",this.username)
			}
		}
	}
</script>