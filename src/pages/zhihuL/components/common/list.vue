<template>
	<div class = "list">
		<ul>
			<li v-for = "item in items" :title = "item.name" @click = "link(item.id)">
				<img :src = "imgProxy(item.thumbnail)" width = "40" height = "40">
				<span>{{ item.name }}</span>
			</li>
		</ul>
	</div>
</template>

<script type = "text/ecmascript-6">
	import { imgProxy } from '../../common/js/utils'
	export default {
		props  : {
			items: Array,
			type : String
		},
		methods: {
			imgProxy,
			link (id) {
				this.$router.push(`/${this.type}/${id}`)
				this.$parent.type = ''
			}
		}
	}
</script>

<style lang = "scss" rel = "stylesheet/scss">
	.list {
		position: absolute;
		top: 80px;
		right: 0;
		background: #fff;
		color: #aaa;;
		z-index: 1001;
		font-size: 1.6rem;
		padding: 2px;
		ul {
			margin: 0;
			padding: 0;
			li {
				display: flex;
				justify-content:space-between;
				align-items:center;
				height: 40px;
				margin: 5px 0;
				cursor: pointer;
				&:hover {
					background: #eee;
					color: #0d519c;
				}
			}
		}
	}
</style>
