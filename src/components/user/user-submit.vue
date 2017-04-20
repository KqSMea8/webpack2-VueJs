/**
* Created by LinChuQiang on 2017/4/20.
*/

<template>
	<div class = "form-group">
		<div class = "col-sm-10 col-sm-offset-2">
			<button type = "button" class = "btn btn-default" @click = "test">提交</button>
		</div>
	</div>
</template>

<script>
	export default{
		methods : {
			test(){
				//console.log( this.username );
				//在user-submit组件里，去访问user-name组件的data对象
				console.log(this.$parent.$refs.username.$data.username);
			}
		}
	}
</script>