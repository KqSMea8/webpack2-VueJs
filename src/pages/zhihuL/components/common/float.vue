<template>
	<!--回到顶部、返回主页悬浮框-->
	<div class = "float">
		<div class = "gotop" id = 'gotop' title = "返回顶部">
			<div class = "arrow"></div>
			<div class = "stick"></div>
		</div>
		<router-link to = "/">
			<div class = "gohome" v-if = "$route.path!=='/'" title = "返回主页">
				<div class = "arrow"></div>
				<div class = "stick"></div>
			</div>
		</router-link>
	</div>
</template>

<script type = "text/ecmascript-6">
	// todo-vue：外部引入 goTop 返回顶部函数且绑定vue页面DOM事件的示例
	import { goTop } from '../../common/js/utils'
	export default {
		mounted () {
			this.$nextTick(() => {
				goTop('gotop')
			})
		}
	}
</script>

<style lang = "scss" rel = "stylesheet/scss">
	.float {
		position: fixed;
		left: 50%;
		top: 80%;
		margin-left: 400px;
		.gotop {
			width: 38px;
			height: 38px;
			background-color: #F9F9F9;
			border-radius: 3px;
			position: relative;
			cursor: pointer;
			margin: 5px 0;
			.arrow {
				position: absolute;
				top: 0;
				left: 10px;
				border: 9px solid transparent;
				border-bottom-color: #aaa;
				
			}
			.stick {
				position: absolute;
				top: 16px;
				left: 15px;
				
				width: 9px;
				height: 15px;
				background-color: #aaa;
				
			}
			&:hover {
				opacity: 0.7;
			}
		}
		.gohome {
			width: 38px;
			height: 38px;
			background-color: #F9F9F9;
			border-radius: 3px;
			position: relative;
			cursor: pointer;
			margin: 5px 0;
			.arrow {
				position: absolute;
				top: -7px;
				left: 8px;
				border: 12px solid transparent;
				border-bottom-color: #aaa;
				
			}
			.stick {
				position: absolute;
				top: 16px;
				left: 11px;
				
				width: 4px;
				height: 12px;
				border-left: 7px solid #aaa;
				border-right: 7px solid #aaa;
			}
			&:hover {
				opacity: 0.7;
			}
		}
	}
</style>
