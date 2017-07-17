<template>
	<div class = "loading">
		<div class = "floating" v-if = "mask"></div>
		<div class = "loading-start"></div>
	</div>
</template>

<script type = "text/ecmascript-6">
	export default {
		props: {
			mask: {
				type   : Boolean,
				default: false
			}
		}
	}
</script>

<style lang = "scss" rel = "stylesheet/scss">
	.loading-start {
		
		position: relative;
		box-sizing: border-box;
		
		width: 30px;
		height: 30px;
		margin: 20px auto;
		border: 2px solid #008BED;
		border-right-color: transparent;
		border-radius: 50%;
		
		animation: rotate-forever 1s infinite linear;
	}
	@keyframes rotate-forever {
		0% {
			transform: rotate(0deg)
		}
		100% {
			transform: rotate(360deg)
		}
	}
</style>
