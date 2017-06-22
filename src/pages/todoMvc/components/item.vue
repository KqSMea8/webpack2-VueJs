/**
* Created by LinChuQiang on 2017/6/20.
*/
<template>
	<!-- 最外层容器-->
	<transition name="slide-fade">
	<div class = "list-item editingClass editing" v-show = "!item.isDelete">
		<!--自定义的多选框-->
		<label class = "checkbox">
			<!--item.isChked-->
			<input type = "checkbox" v-model = "item.isChked" :disabled = "isLock" @change = "onChange()">
			<span class = "checkbox-custom"></span>
		</label>
		<!--绑定item.text-->
		<input type = "text" v-model = "item.text" placeholder = '写点什么。。。' :disabled = "item.isChked || isLock">
		<!--删除图标-->
		<a class = "delete-item" v-if = "item.isChked && !isLock" @click = "onDel">
			<span class = "icon-trash"></span>
		</a>
	</div>
	</transition>
</template>
<script>
	export default {
		name   : 'item',
		data(){
			return {};
		},
		props  : ['item', 'isLock'],
		methods: {
			onChange(){
				this.$emit('chkItem')
			},
			onDel(){
				this.$emit('delItem')
			}
		},
		beforeDestory(){
			console.log('beforeDestory');
		}
	};
</script>
<style lang = "less">
	@import '../common/style/list-items.less';
	.slide-fade-enter-active {
		transition: all .3s ease;
	}
	.slide-fade-leave-active {
		transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.slide-fade-enter, .slide-fade-leave-active {
		transform: translateX(10px);
		opacity: 0;
	}
</style>


