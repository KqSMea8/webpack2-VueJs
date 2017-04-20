/**
* Created by LinChuQiang on 2017/4/20.
*/

<template>
	<div class="row">
	<div class = "form-group">
		<label class = "col-sm-2">密码</label>
		<div class = "col-sm-10">
			<input type = "text" class = "form-control" :placeholder = "plahol" :userpass = "passwrd" @input = "passwrd=$event.target.value">
		</div>
	</div>
	</div>
</template>

<script>
	export default{
		props : [ "plahol" ],
		data  : function() {
			return { passwrd : '' };
		}
	}
</script>