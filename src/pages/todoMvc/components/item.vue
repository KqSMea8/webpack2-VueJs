/**
* Created by LinChuQiang on 2017/6/20.
*/
<template>
	<!-- 最外层容器-->
	<div class = "list-item editingClass editing" v-show = "!item.isDelete">
		<!--自定义的多选框-->
		<label class = "checkbox">
			<!--item.isChked-->
			<input type = "checkbox" v-model = "item.isChked" :disabled = "isLock" @change = "onChange(item.isChked)">
			<span class = "checkbox-custom"></span>
		</label>
		<!--绑定item.text-->
		<input type = "text" v-model = "item.text" placeholder = '写点什么。。。' :disabled = "item.isChked || isLock">
		<!--删除图标-->
		<a class = "delete-item" v-if = "item.isChked && !isLock" @click = "onDel">
			<span class = "icon-trash"></span>
		</a>
	</div>
</template>
<script>
	import { mapMutations } from 'vuex'
	export default {
		name   : 'item',
		data(){
			return {};
		},
		props  : ['item', 'isLock'],
		methods: {
			...mapMutations(['setGroupCount']),
			onChange(data){
				this.setGroupCount(data)
			},
			onDel(data){
				this.$emit('delItem')
			}
		}
	};
</script>
<style lang = "less">
	@import '../common/style/list-items.less';
</style>


