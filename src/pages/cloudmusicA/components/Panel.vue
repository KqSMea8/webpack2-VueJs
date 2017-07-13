<!-- 顶栏控制面板 -->
<template>
    <div>
        <header class="panel">
            <div class="panel--left">
	            <!--用户登录-->
                <div class="panel__item hover-1" @click="userActions">
                    <span class="fa fa-user-circle"></span>
                    <span v-if="hasLogin">My</span>
                    <span v-else>Login</span>
                </div>
	            <!--歌曲列表-->
                <router-link to="/songlist" class="panel__item hover-1">
                    <span class="fa fa-list"></span>
                    <span>SongList</span>
                </router-link>
	            <!--评论-->
                <router-link to="/comments" class="panel__item hover-1">
                    <span class="fa fa-comments-o"></span>
                    <span>Comments</span>
                </router-link>
            </div>
	        <!--搜索-->
            <div class="panel--right">
                <Search></Search>
            </div>
        </header>
    </div>
</template>
<script>
    import Search from './Search';
    import * as types from "../store/mutation-types";

    export default {
        name: 'panel',
        components: {
            Search
        },
        computed: {
            hasLogin(){
                return this.$store.state.hasLogin;
            }
        },
        methods: {
            userActions(){
                if (this.$store.state.hasLogin) {
                    this.$router.push('/user');
                } else {
                    this.$store.commit(types.LOGIN_SHOW_HIDE, 1);
                }
            }
        }
    }

</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    .panel {
        height: 100%;
        background: #3f3d34;
        display: flex;
        align-items: center;
        justify-content: space-around;
        &--left,
        &--right {
            display: flex;
            align-items: center;
            justify-content: space-around;
        }
        &__item {
            display: inline-block;
            font-size: 1.5rem;
            font-style: italic;
            font-family: fantasy, 'Microsoft YaHei', STXihei, sans-serif;
            font-weight: 900;
            color: #b6423a;
            margin: 0 10px;
            cursor: pointer;
        }
    }

</style>

