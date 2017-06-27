<template>
	<div>
		<nv-head title = "关于"></nv-head>
		<dl class = "about-info">
			<dt>关于项目</dt>
			<dd>vue-cnode-mobile-master</dd>
			
			<dt>源码地址</dt>
			
			<dd>
				<a href = "https://github.com/soulcm/vue-cnode-mobile">
					https://github.com/soulcm/vue-cnode-mobile
				</a>
			</dd>
			
			<dt>意见反馈</dt>
			<dd>
				<a href = "https://github.com/shinygang/Vue-cnodejs/issues">
					发表意见或者提需求
				</a>
			</dd>
			
			<dt>当前版本</dt>
			<dd>V2.0</dd>
		
		</dl>
	</div>
</template>

<script>
	import nvHead from '../components/header';
	export default {
		components: {
			nvHead
		},
	}
</script>

<style>
	.about-info {
		margin: 10% auto 0 auto;
	}
</style>
