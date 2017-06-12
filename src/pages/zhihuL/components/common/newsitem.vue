<template>
	<router-link :to = "'/news/' + item.id">
		<div class = "news">
			<img v-if = "item.images" v-lazy = "imgProxy(item.images[0])">
			<p>{{ item.title }}</p>
			<em v-if = "item.multipic">多图</em>
		</div>
	</router-link>
</template>

<script type = "text/ecmascript-6">
	import { imgProxy } from '../../common/js/utils'
	export default {
		props  : {
			item: Object
		},
		methods: {
			imgProxy
		}
	}
</script>

<style lang = "scss" rel = "stylesheet/scss">
	.news {
		display: flex;
		justify-content: space-between;
		align-items:center;
		margin: 20px;
		box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
		cursor: pointer;
		position: relative;
		img {
			max-height: 100px;
			max-width: 120px;
		}
		p {
			display: inline-block;
			width: 400px;
			vertical-align: middle;
			font-size: 1.6rem;
		}
		em {
			position: absolute;
			right: 5px;
			bottom: 5px;
			color: #00a2ed;
		}
	}
</style>
