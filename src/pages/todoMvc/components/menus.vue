/**
* Created by LinChuQiang on 2017/6/20.
*/
<template>
	<!--菜单容器-->
	<div class = "list-todos">
		<!--单个菜单容器-->
		<a class = "list-todo activeListClass list" v-for = "group in groups" :class = "{'active':group.id == groupid}" @click = "goGroupDetail(group.id)">
			<!--锁的图标-->
			<span class = "icon-lock" v-if = "group.isLock"></span>
			<!--数字-->
			<span class = "count-list" v-if = "group.count">{{ group.count }}</span> {{ group.title }}
		</a>
		<!--新增菜单-->
		<a class = "link-list-new" @click = "asyncAddGroup">
			<span class = "icon-plus"></span> 新增
		</a>
	</div>
</template>
<script>
	import { mapMutations, mapActions } from 'vuex'
	export default {
		name   : 'groups',
		props  : ['groups', 'groupid'],
		methods: {
			...mapMutations({
				setGroupID: 'setGroupID'
			}),
			...mapActions({
				asyncAddGroup: 'asyncAddGroup',
				asyncGroup   : 'asyncGroup',
			}),
			goGroupDetail(id){
				// console.log(this.getGroupID)
				this.setGroupID(id)
				// this.$nextTick()
				// console.log(this.getGroupID)
				this.asyncGroup()
			}
		}
	};
</script>
<style lang = "less">
	@import '../common/style/menu.less';
</style>
	
