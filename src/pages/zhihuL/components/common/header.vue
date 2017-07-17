<template>
	<div class = "head">
		<h1 class = "logo">
			<router-link tag = "a" to = "/" class = "link-logo">知乎日报</router-link>
		</h1>
		<!--点击弹出下拉列表框-->
		<span @click = "type = type === 'topic' ? '' : 'topic'" :class="{clk:type === 'topic'}">主题日报</span>
		<span @click = "type = type === 'section' ? '' : 'section'" :class="{clk:type === 'section'}">专栏总览</span>
		<list :items = "items" :type = "type" v-show = "type"></list>
	</div>
</template>

<script type = "text/ecmascript-6">
	import list from './list'
	import { mapGetters } from 'vuex'
	export default {
		data () {
			return {
				type: ''
			}
		},
		computed  : {
			...mapGetters(['topics', 'sections']),
			items () {
				return this.type ? (this.type === 'topic' ? this.topics : this.sections) : []
			}
		},
		components: {
			list
		}
	}
</script>

<style lang = "scss" rel = "stylesheet/scss">
	.head {
		position: relative;
		height: 80px;
		padding: 0 10px;
		line-height: 80px;
	

		.logo {
			display: inline-block;
			
			width: 220px;
			overflow: hidden;
			background: transparent url(http://daily.zhihu.com/img/new_home_v3/top_logo.png) no-repeat 0 13px;
			.link-logo {
				display: block;
				height: 78px;
				font-size: 0;
				text-indent: -150%;
			}
		}
		& > span {

			float: right;

			color: #008bed;
			font-size: 1.8rem;
			
			cursor: pointer;
			&:nth-of-type(1) {
				margin-left: 20px;
			}
			&.clk{
				background-color: #d0e9c6;
			}
		}
	}
</style>
