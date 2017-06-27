<template>
    <div class="user-info">
        <!-- 未登录 -->
        <div class="login-no" v-if="!userInfo.loginname">
            <router-link :to="{name: 'login'}">
                <i class="iconfont icon-denglu" style="margin-right: 30px;color: #42b983;font-size: 2rem;"></i>登录
            </router-link>
        </div>
        <!-- 已登录 -->
        <div class="login-yes" v-else>
	        <router-link :to = "{name:'user',params:{loginname:userInfo.loginname}}">
		        <img class = "head" :src = "userInfo.avatar_url" />
	        </router-link>
            <span class="login-name" v-text="userInfo.loginname"></span>
            <span class="login-out" @click="handleLoginOut">退出</span>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .login-no a {
	    display: block;
	
	    padding: 24px;
	
	    color: #313131;
        font-size: 2rem;
        font-weight: 700;
    }
    .login-yes {
	    display: flex;
	    align-items: center;
	    
        padding: 20px 15px;
	    
        img {
            width: 40px;
            height: 40px;
	        margin-right: 15px;
	        
            border-radius: 50%;
      
        }
        .login-name {
            flex: 1;
        }
        .login-out {
            color: #337ab7;
        }
    }
</style>

<script>
    import {mapState} from 'vuex';
    import {LOGIN_OUT} from '../constants/mutationTypes';

    export default {
        methods: {
            handleLoginOut() {
                this.$store.commit(LOGIN_OUT);
                this.$router.push({name: 'list'});
            }
        },
        computed: {
            ...mapState(['userInfo']),
        },
    }
</script>
