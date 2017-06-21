/**
* Created by LinChuQiang on 2017/6/20.
*/
<style lang = "less">
	@import "../common/style/layouts.less";
	@import "../common/style/icon.less";
</style>
<template>
	<section class = "container">
		<section class = "menu">
			<menus :groups = "getGroups" :groupid = "getGroupID"></menus>
		</section>
		<section class = "content-container">
			<menuDetail :group = "getGroup"></menuDetail>
		</section>
	</section>
</template>
<script>
	import { mapActions, mapGetters } from 'vuex'
	import menus from './menus.vue'
	import menuDetail from './menuDetail.vue'
	export default{
		name      : 'layouts',
		components: {
			menus,
			menuDetail
		},
		created(){
			// 查询所有的待办集合
			this.asyncGroups().then(res => {
				// console.log('Groups', this.getGroups)
				// console.log('getGroupID', this.getGroupID)
			    // this.id=this.getGroupID
			    // console.log(this.id)
				// this.asyncGroup(this.id)
			})
		},
		watch     : {
			$router(){
				// 查询所有的待办集合
			    console.log(`router is change!`);
			}
		},
		mounted(){
			// console.log(this.getGroup);
		},
		computed  : {
			...mapGetters(['getGroups', 'getGroupID', 'getGroup'])
		},
		methods   : {
			...mapActions({
				asyncGroups: 'asyncGroups'
			})
		}
	}
</script>
