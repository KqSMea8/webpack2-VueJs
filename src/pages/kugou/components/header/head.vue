<template>
	<div class = "header">
		<!--搜索LOGO栏-->
		<headLogo></headLogo>
		
		<rank-head v-if = "head.toggle" :title = "head.title"></rank-head>
		<!--导航栏-->
		<head-nav v-else></head-nav>
	</div>
</template>

<script type = "es6">
	import headLogo from './head_logo'
	import rankHead from './rank-head'
	import headNav from './head_nav'
	import { mapGetters } from 'vuex'
	export default {
		computed  : {
			...mapGetters(['head'])
		},
		name      : 'k-head',
		components: {headLogo, headNav, rankHead}
	}
</script>
