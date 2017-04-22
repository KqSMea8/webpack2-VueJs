/**
* Created by LinChuQiang on 2017/4/20.
*/

<template>
	<div class="row">
	<div class = "form-group">
		<label class = "col-sm-2">密码</label>
		<div class = "col-sm-10">
			<input type = "text" class = "form-control" :placeholder = "plahol" :userpass = "passwrd" @input = "passwrd=$event.target.value" @change="passchg">
		</div>
	</div>
	</div>
</template>

<script>
	export default{
		//声明接收利用从父组件user-login中获得的参数plahol
		props : [ "plahol" ],
		data  : function() {
			return { passwrd : '' };
		},
		methods:{
			passchg(){
				//this.$emit("iptChange","userpass",this.passwrd)
				this.$store.state.password = this.passwrd;
			}
		}
		
	}
</script>