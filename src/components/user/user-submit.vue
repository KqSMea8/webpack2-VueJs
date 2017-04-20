/**
* Created by LinChuQiang on 2017/4/20.
*/

<template>
	<div class="row">
	<div class = "form-group">
		<div class = "col-sm-10 col-sm-offset-2">
			<button type = "button" class = "btn btn-default" @click = "test">提交</button>
		</div>
	</div>
	</div>
</template>

<script>
	export default{
		methods : {
			test(){
				//console.log( this.username );
				//在user-submit组件里，去访问user-name组件的data对象
				//console.log(this.$parent.$refs.username.$data.username);
				//拿到父组件定义的属性username，也就是user-name触发change事件发送过来的数据
				console.log(this.$parent.$data.username);
			}
		}
	}
</script>