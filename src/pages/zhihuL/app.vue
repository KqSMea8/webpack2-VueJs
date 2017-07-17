<template>
	<div class="app">
		<v-header></v-header>
		<!--todo-vuerouter:在router-view上绑定事件示例-->
		<loading :mask="false" v-if="isShow"></loading>
		<router-view keep-alive @loadingDone="closeLoading" @loadingStart="startLoading"></router-view>
		<!--回到顶部悬浮框-->
		<float></float>
	</div>
</template>

<script type="text/ecmascript-6">
	import loading from './components/common/loading'
	import vHeader from './components/common/header'
	import float from './components/common/float'
	
	export default {
		data () {
			return {
				isShow: true
			}
		},
		methods: {
			startLoading () {
				this.isShow = true
			},
			closeLoading () {
				this.isShow = false
			}
		},
		components: {
			loading,
			vHeader,
			float
		}
	}
</script>
