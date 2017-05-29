<template>
	<div class = "user-info">
		<!-- 未登录 -->
		<ul class = "login-no" v-if = "!userInfo.loginname">
			<li class = "login" @click = "goEnter">
				<a>登录</a>
			</li>
		</ul>
		<!-- 已登录 -->
		<div class = "login-yes" v-if = "userInfo.loginname" @click = "goUser">
			<div class = "avertar">
				<img v-if = "userInfo.avatar_url" :src = "userInfo.avatar_url">
			</div>
			<div class = "info">
				<p v-if = "userInfo.loginname" v-text = "userInfo.loginname"></p>
			</div>
		</div>
	</div>
</template>
<script>
  import { mapGetters } from 'vuex';
  
  export default {
    replace : true,
    created(){
      console.log(this.$store);
    },
    computed: {
      ...mapGetters({
        userInfo: 'getUserInfo'
      })
    },
    methods : {
      goEnter() {
        this.$router.push({
          name : 'login',
          query: {
            // https://router.vuejs.org/zh-cn/api/route-object.html
            // $route.path 字符串，对应当前路由的路径，总是解析为绝对路径，如 "/foo/bar"
            redirect: encodeURIComponent(this.$route.path)
          }
        });
      },
      goUser() {
        this.$router.push({
          name  : 'user',
          params: {
            loginname: this.userInfo.loginname
          }
        });
      }
    }
  };
</script>

<style lang = "scss">

</style>
