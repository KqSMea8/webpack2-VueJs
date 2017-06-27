<template>
	<!--全局Header-->
	<div>
		<!--遮罩层-->
		<span class = "page-cover" @click = "toggleMenu" v-if = "show"></span>
		<header class = "header-bar">
			<!--控制菜单弹出-->
			<span class = "menu-btn" @click = "toggleMenu"></span>
			<!--LOGO以及标题-->
			<span class = "info">
				<span class = "vue-logo"></span>
				<span>{{title}}</span>
			</span>
			<!--发布新主题-->
			<router-link :to = "{name: 'create'}" class = "publish-btn">
				<i class = "iconfont icon-publish"></i>
			</router-link>
		</header>
		<!--左侧菜单栏-->
		<nv-menu :show = "show"></nv-menu>
	</div>
</template>

<script>
	import '../styles/header';
	import nvMenu from './menu'
	export default {
		data() {
			return {
				// 默认左侧菜单栏和遮罩层隐藏
				show: false
			}
		},
		props: {
			title: {
				type   : String,
				default: ''
			}
		},
		methods: {
			toggleMenu() {
				this.show = !this.show;
			}
		},
		components: {
			nvMenu
		}
	}
</script>
