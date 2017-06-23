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
			<menus :groups = "getGroups" :groupid = "getGroupID" @menuDetail = "goMenuDetail"></menus>
		</section>
		<div class = "content-container">
			<router-view></router-view>
			<!--<menuDetail :group = "getGroup"></menuDetail>-->
		</div>
	</section>
</template>
<script>
	import { mapActions, mapGetters } from 'vuex'
	import menus from './menus.vue'
	import menuDetail from './menuDetail.vue'
	export default{
		name      : 'layouts',
		data(){
			return {
				groupID: ''
			};
		},
		components: {
			menus,
			menuDetail
		},
		created(){
			// console.log(`layouts->created->getGroupID： ${this.getGroupID}`);
			this.asyncGroups().then((res) => {
				// console.log(`layouts->created中的asyncGroups异步之后的then:${res}`)
				// console.log(`layouts->created->getGroupID： ${this.getGroupID}`);
				this.$nextTick(() => {
					// console.log('layouts->created中的asyncGroups异步之后的then中的$nextTick')
					// console.log(`layouts->created->getGroupID： ${this.getGroupID}`);
					this.goMenuDetail(this.getGroupID)
				});
			})
		},
		mounted(){
			// console.log(`layouts->mounted->getGroupID： ${this.getGroupID}`);
		},
		beforeMount(){
			// console.log(`layouts->beforeMount->getGroupID： ${this.getGroupID}`);
		},
		beforeUpdate(){
			// console.log(`layouts->beforeUpdate->getGroupID： ${this.getGroupID}`);
		    // this.goMenuDetail(this.getGroupID)
		},
		updated(){
			// console.log(`layouts->updated->getGroupID： ${this.getGroupID}`);
		},
			beforeDestory(){
				// console.log(`layouts->beforeDestory->getGroupID： ${this.getGroupID}`);
				// this.goMenuDetail(this.getGroupID)
			},
		watch     : {
			'$route'(){
				// console.log(`layouts->$route.params.id:${this.$route.params.id}`);
				// 查询所有的待办集合
				// this.asyncGroups().then(res => {
				// console.log('Groups', this.getGroups)
				// console.log(`layouts->getGroupID： ${this.getGroupID}`);
				// this.id=this.getGroupID
				// console.log(this.id)
				// this.asyncGroup(this.id)
				// this.$router.push({name: 'menuDetail', params: {id: this.getGroupID}})
				// })
			}
		},
		computed  : {
			...mapGetters(['getGroups', 'getGroupID', 'getGroup'])
		},
		methods   : {
			...mapActions({
				asyncGroups: 'asyncGroups'
			}),
			goMenuDetail(id){
				this.$router.push({name: 'menuDetail', params: {id: id}})
			}
		}
	}
</script>
