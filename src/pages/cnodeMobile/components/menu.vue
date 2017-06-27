<template>
	<nav class = "menu-bar" :class = "{'show': show}">
		<user-info></user-info>
		<ul class = "menu-list">
			<li class = "menu-item">
				<router-link class = "" :to = "{name: 'list', query: {tab: 'all'}}">
					<i class = "iconfont icon-quanbu"></i>全部
				</router-link>
			</li>
			<li class = "menu-item">
				<router-link :to = "{name: 'list', query: {tab: 'good'}}">
					<i class = "iconfont icon-jinghua"></i>精华
				</router-link>
			</li>
			<li class = "menu-item">
				<router-link :to = "{name: 'list', query: {tab: 'share'}}">
					<i class = "iconfont icon-share"></i>分享
				</router-link>
			</li>
			<li class = "menu-item">
				<router-link :to = "{name: 'list', query: {tab: 'ask'}}">
					<i class = "iconfont icon-wenda"></i>问答
				</router-link>
			</li>
			<li class = "menu-item">
				<router-link :to = "{name: 'list', query: {tab: 'job'}}">
					<i class = "iconfont icon-zhaopin"></i>招聘
				</router-link>
			</li>
			<li class = "menu-item">
				<router-link :to = "{name: 'list', query: {tab: 'dev'}}">
					<i class = "iconfont icon-zhaopin"></i>客户端测试
				</router-link>
			</li>
			<li class = "menu-item">
				<router-link :to = "{name: 'login'}">
					<i class = "iconfont icon-wenda"></i>登录
				</router-link>
			</li>
			<li class = "menu-item">
				<router-link :to = "{name: 'message'}" style = "position: relative">
					<i class = "iconfont icon-xiaoxi"></i>消息
					<span class = "message-count" v-text = "`+${messageCount}`" v-if = "messageCount"></span>
				</router-link>
			</li>
			<li class = "menu-item">
				<router-link :to = "{name: 'about'}">
					<i class = "iconfont icon-guanyu"></i>关于
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<style lang = "less">
	.message-count {
		position: absolute;
		left: 40px;
		top: 15px;
		
		color: red;
		
	}
</style>

<script>
	import { mapState } from 'vuex';
	import '../styles/menu.less';
	import UserInfo from './userInfo';
	import { messageCount } from '../apis/publicApi';
	export default {
		props     : {
			show: Boolean
		},
		components: {
			UserInfo
		},
		data() {
			return {
				messageCount: 0
			}
		},
		mounted() {
			this.getMessageCount();
		},
		methods   : {
			getMessageCount() {
				if (this.userInfo.loginname) {
					messageCount({accesstoken: this.userInfo.accesstoken}).then((res) => {
						if (res.success) {
							this.messageCount = res.data;
						}
					})
				}
			}
		},
		computed: {
			...mapState(['userInfo'])
		}
	}

</script>
