/**
* Created by LinChuQiang on 2017/6/20.
*/
<template>
	<!--菜单容器-->
	<div class = "list-todos">
		<!--单个菜单容器-->
		<transition-group tag = "div" name = "list">
			<a class = "list-todo activeListClass list" v-for = "group in groups" :class = "{'active':group.id == groupid}" @click = "goGroupDetail(group.id)" :key="group.id">
				<!--锁的图标-->
				<span class = "icon-lock" v-if = "group.isLock"></span>
				<!--数字-->
				<span class = "count-list">{{ group.count }}</span> {{ group.title }}
			</a>
		</transition-group>
		<!--新增菜单-->
		<a class = "link-list-new" @click = "onAddMenu">
			<span class = "icon-plus"></span> 新增
		</a>
	</div>
</template>
<script>
	import { mapMutations, mapActions, mapGetters } from 'vuex'
	export default {
		name    : 'groups',
		props   : ['groups', 'groupid'],
		computed: {
			...mapGetters(['getGroupID', 'getGroup'])
		},
		methods : {
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
			},
			onAddMenu(){
				this.asyncAddGroup().then(() => {
					// console.log(this.getGroup)
					// console.log(this.getGroupID)
					this.asyncGroup()
				})
			}
		}
	};
</script>
<style lang = "less">
	@import '../common/style/menu.less';
</style>
	
