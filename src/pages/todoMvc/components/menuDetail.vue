/**
* Created by LinChuQiang on 2017/6/20.
*/
<template>
	<div class = "page lists-show">
		<!--容器上半部分-->
		<nav>
			<!--移动端的菜单图标-->
			<div class = "nav-group">
				<a class = "nav-item">
					<span class = "icon-list-unordered"></span>
				</a>
			</div>
			<h1 class = "title-page">
				<!-- 标题-->
				<span class = "title-wrapper">{{group.title}}</span>
				<!-- 数目-->
				<span class = "count-list">{{group.count}}</span>
				<span>{{group.id}}</span>
			</h1>
			<!-- 右边的删除，锁定图标容器-->
			<div class = "nav-group right">
				<div class = "options-web">
					<a class = " nav-item" @click = "onLock">
						<!-- 锁定图标-->
						<span class = "icon-lock" v-if = "group.isLock"></span>
						<span class = "icon-unlock" v-else></span>
					</a>
					<a class = " nav-item">
						<!-- 删除图标-->
						<span class = "icon-trash"></span>
					</a>
				</div>
			</div>
			<!-- 新增单个待办输入框，监听回车事件，双向绑定text值，监听disabled属性，在todo.locked为true的情况下无法编辑-->
			<div class = " form todo-new input-symbol">
				<input type = "text" v-model = "text" placeholder = '请输入' @keyup.enter = "onAdd" :disabled = "group.isLock" />
				<span class = "icon-add"></span>
			</div>
		</nav>
		<!--容器下半部分-->
		<div class = "content-scrollable list-items">
			<!-- 这里`v-for`会循环我们在 `data`函数 事先定义好的 ’items‘模拟数据，循环后拿到单个对象，在通过prop把数据传输给子组件 item -->
			<div v-for = "(item,index) in group.items">
				<item :item = "item" :isLock = "group.isLock" @delItem = "delItem(item,index)" ></item>
			</div>
		</div>
	</div>
</template>
<script>
	import { mapActions, mapMutations } from 'vuex'
	import item from './item.vue'
	export default {
		name      : 'groupDetail',
		props     : ['group'],
		data(){
			return {
				text: ''
			};
		},
		mounted(){
			// console.log('groupDetail', this.group);
		},
		components: {
			item
		},
		methods   : {
			...mapMutations(['setGroupItemDel']),
			...mapActions(['asyncGroupsLock','asyncGroupItems']),
			onAdd(){},
			onLock(){
				this.asyncGroupsLock(this.group.id);
			},
			delItem(item,index){
				this.setGroupItemDel(index)
				this.asyncGroupItems({item,index})
			}
		}
	};
</script>
<style lang = "less">
	@import '../common/style/nav.less';
	@import '../common/style/form.less';
	@import '../common/style/todo.less';
</style>
