<template>
    <div>
        <nv-head title="登录"></nv-head>
        <section class="login">
            <div class="login-token">
                <input class="txt" type="text" placeholder="Access Token" v-model="token" maxlength="36">
                <button class="btn btn-login" @click="handleLogin">登录</button>
            </div>
        </section>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    import nvHead from '../components/header';
    import '../styles/login.less';
    import {LOGIN} from '../constants/mutationTypes';
    export default {
        data() {
            return {
                token: ''
            }
        },

        methods: {
            handleLogin() {
                const data = {
                    accesstoken: this.token
                }
                this.$store.dispatch(LOGIN, data).then(() => {
                	// 跳转回登录前页面 或者 默认页面
                    const redirect = decodeURIComponent(this.$route.query.redirect  || 'list');
                    console.log(`redirect:`, redirect)
                    this.$router.push({name: redirect});
                })
            }
        },

        computed: {
            ...mapState(['userInfo'])
        },

        components:{
            nvHead
        },
		// 进入该路由之前，如果用户名已存在，则返回到默认页面
        beforeRouteEnter(to, from, next) {
            next((vm) => {
                if (vm.userInfo.loginname) {
                	// todo-vuerouter:vm.$router.replace
                    vm.$router.replace({name: 'list'});
                }
            });
        }
    }

</script>
