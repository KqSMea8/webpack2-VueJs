<template>
	<div class = "login-page">
		<nv-head page-type = "登录"></nv-head>
		<section class = "page-body">
			<div class = "label">
				<input class = "txt" type = "text" placeholder = "Access Token" v-model = "token" maxlength = "36">
			</div>
			<div class = "label">
				<a class = "button" @click = "login">登录</a>
			</div>
		</section>
	</div>
</template>

<script>
  import Zepto from 'webpack-zepto';
  import nvHead from '../components/header.vue';
  
  export default {
    components: {
      nvHead
    },
    data() {
      return {
        token: ''
      };
    },
    methods   : {
      login() {
        if (this.token === '') {
          this.$alert('令牌格式错误,应为36位UUID字符串');
          return false;
        }
        // post /accesstoken 验证 accessToken 的正确性
        Zepto.ajax({
          type    : 'POST',
          url     : 'https://cnodejs.org/api/v1/accesstoken',
          data    : {
            accesstoken: this.token
          },
          dataType: 'json',
          success : (res) => {
            let user = {
              loginname : res.loginname,
              avatar_url: res.avatar_url,
              userId    : res.id,
              token     : this.token
            };
            window.window.sessionStorage.user = JSON.stringify(user);
            this.$store.dispatch('settingUserInfo', user);
            // todo-vuerouter:跳转到在query里面的redirect记录的旧路由地址或者/list
            let redirect = decodeURIComponent(this.$route.query.redirect || '/');
            this.$router.push({
              path: redirect
            });
          },
          error   : (res) => {
            var error = JSON.parse(res.responseText);
            // todo-vue：触发注册在全局上的Vue.prototype.$alert插件
            this.$alert(error.error_msg);
          }
        });
      }
    },
    
  };
</script>
<style lang = "scss">
	.page-body {
		min-height: 400px;
		padding: 50px 15px;
		background-color: #fff;
		.label {
			display: inline-block;
			position: relative;
			
			width: 100%;
			margin-top: 15px;
		
			.txt {
				width: 100%;
				padding: 12px 0;
				border: none;
				border-bottom: 1px solid #4fc08d;
				
				background-color: transparent;
				color: #313131;
				font-size: 14px;
			}
			.button {
				display: inline-block;
				
				width: 99%;
				height: 42px;
				
				border: none;
				border-bottom: 2px solid #3aa373;
				border-radius: 3px;
				
				background-color: #4fc08d;
				color: #fff;
				font-size: 16px;
				line-height: 42px;
				text-align: center;
				vertical-align: middle;
			}
			.file {
				position: absolute;
				top: 0;
				left: 0;
		
				width: 48%;
				height: 42px;
				outline: medium none;
				
				opacity: 0;
			}
		}
	}
</style>
