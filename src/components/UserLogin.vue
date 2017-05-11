/**
* Created by LinChuQiang on 2017/4/20.
*/

<template>
	<div class = "row">
		<div id = "user-login" class = "col-md-8 col-md-offset-2">
			<h2 class = "text-center">用户登录</h2>
			<form class = "form-horizontal" role = "form">
				<!--user-login父组件给子组件user-name的placeholder传data-->
				<user-name :childPlaceholder = "placeholder"></user-name>
				<user-pass plahol = "请输入用户密码"></user-pass>
				<user-area></user-area>
				<user-fav></user-fav>
				<user-submit></user-submit>
			</form>
		</div>
	</div>
</template>

<style>
	#user-login {
		margin-top: 50px;
	}
</style>

<script>
  //import '../css/page/h1h2.scss';
  import username from "@/components/user/user-name.vue";
  import userpass from "@/components/user/user-pass.vue";
  import userarea from "@/components/user/user-area.vue";
  import userfav from "@/components/user/user-fav.vue";
  import usersubmit from "@/components/user/user-submit.vue";
  
  export default{
    data() {
      return {
        placeholder: '请输入用户名称'
      };
    },
    methods   : {
      // 将子组件user-area变化的值，更新到本组件的data数据中
      setValue(key, value) {
        this.$data[key] = value
      }
    },
    components: {
      "user-name"  : username,
      "user-pass"  : userpass,
      "user-area"  : userarea,
      "user-fav"   : userfav,
      "user-submit": usersubmit
    },
    created() {
      // alert("created: "+this.$children.length);
      // 结果为0,说明子组件并没有挂载
    },
    mounted() {
      // alert("mounted: "+this.$children.length); //结果为4,说明子组件到这里已经挂载上了
      // 四个子组件
      // 因为forEach 里的this 并不是外面的this，所以后面用bind(this)。
      this.$children.forEach(function (value, key) {
        // console.log(value,key);
        value.$on('iptChange', this.setValue);
      }.bind(this))
    },
    beforeMount() {
      // 结果为0,说明子组件并没有挂载
      // alert("beforeMount: "+this.$children.length);
    }
  }
</script>