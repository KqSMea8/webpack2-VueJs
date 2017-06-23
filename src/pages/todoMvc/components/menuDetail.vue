/**
* Created by LinChuQiang on 2017/6/20.
*/
<template>
	<div class = "page lists-show">
		<!--容器上半部分-->
		<nav>
			<div class = "form list-edit-form" v-show = "isUpdateTtl">
				<input type = "text" v-model = "oldTtl" @keyup.enter = "updateTitle" :disabled = "group.locked" v-focus>
				<div class = "nav-group right">
					<a class = "nav-item" @click = "isUpdateTtl = false">
						<span class = "icon-close"></span>
					</a>
				</div>
			</div>
			
			<h1 class = "title-page" v-show = "!isUpdateTtl" @click="isUpdateTtl = true">
				<!-- 标题-->
				<span class = "title-wrapper">{{group.title}}</span>
				<!-- 数目-->
				<span class = "count-list">{{group.count}}</span>
				<span v-if = "false">{{group.id}}</span>
				<!--<span>{{group.id}}</span>-->
			</h1>
			<!-- 右边的删除，锁定图标容器-->
			<div class = "nav-group right" v-show = "!isUpdateTtl">
				<div class = "options-web">
					<a class = " nav-item" @click = "onLock">
						<!-- 锁定图标-->
						<span class = "icon-lock" v-if = "group.isLock"></span>
						<span class = "icon-unlock" v-else></span>
					</a>
					<a class = " nav-item" @click = "delGroup">
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
			<div v-for = "group.items && (item,index) in group.items">
				<item :item = "item" :isLock = "group.isLock" @delItem = "delItem(item,index)" @chkItem = "chkItem(item,index)"></item>
			</div>
		</div>
	</div>
</template>
<script>
	import { mapActions, mapMutations, mapGetters } from 'vuex'
	import item from './item.vue'
	export default {
		name      : 'groupDetail',
		// props     : ['group'],
		components: {
			item
		},
		data(){
			return {
				text       : '',
				group      : {},
				isUpdateTtl: false,
				oldTtl     : ''
			};
		},
		created(){
			// console.log(`menuDetail->created->getGroupID： ${this.getGroupID}`);
			this.createGroup()
		},
		mounted(){
			// console.log(`menuDetail->mounted->getGroupID： ${this.getGroupID}`);
		},
		beforeMount(){
			// console.log(`menuDetail->beforeMount->getGroupID： ${this.getGroupID}`);
		},
		beforeUpdate(){
			// console.log(`menuDetail->beforeUpdate->getGroupID： ${this.getGroupID}`);
			// this.goMenuDetail(this.getGroupID)
		},
		updated(){
			// console.log(`menuDetail->updated->getGroupID： ${this.getGroupID}`);
		},
		beforeDestory(){
			// console.log(`menuDetail->beforeDestory->getGroupID： ${this.getGroupID}`);
			// this.goMenuDetail(this.getGroupID)
		},
		watch     : {
			'$route.params.id'(val, oldVal) {
				// console.log('menuDetail->$route.params.id->new: %s, old: %s', val, oldVal)
				if (val !== oldVal) {
					this.createGroup(val)
				}
			}
		},
		mounted(){
			// console.log('groupDetail', this.group);
		},
		computed  : {
			...mapGetters(['getGroup', 'getGroupID'])
		},
		directives: {
			focus: {
				inserted: function (el) {
					el.focus();
				}
			}
		},
		methods   : {
			...mapMutations(['setGroupItemDel', 'setGroupCount', 'setGroupID']),
			...mapActions(['asyncGroupsLock', 'asyncUpdateItems', 'asyncAddItem', 'asyncDelGroup', 'asyncGroup','asyncUpdateGroup']),
			createGroup(data){
				this.asyncGroup(data).then((res) => {
					// console.log(`createGroup: `)
					// console.log(res)
					this.group = res
					this.oldTtl = this.group.title
				})
			},
			onAdd(){
				this.asyncAddItem({text: this.text}).then(() => {
					this.text = ''
				})
			},
			onLock(){
				this.asyncGroupsLock(this.group.id);
			},
			delItem(item, index){
				this.setGroupItemDel(index)
				this.asyncUpdateItems({item, index})
			},
			chkItem(item, index){
				// console.log(item);
				// console.log(index);
				this.setGroupCount(item.isChked)
				this.asyncUpdateItems({item, index})
			},
			delGroup(){
				this.asyncDelGroup(this.group.id).then((id) => {
					if (id) {
						// console.log(`存在ID：${id}`);
						this.$router.push({name: 'menuDetail', params: {id: id}})
					} else {
						// console.log(`不存在ID：${id}`);
						// console.log(`获取ID：${this.getGroupID}`);
						this.$router.push({name: 'menuDetail', params: {id: id}})
					}
				})
			},
			updateTitle(){
				if(this.oldTtl !== this.group.title){
					this.group.title = this.oldTtl
				    this.asyncUpdateGroup(this.group)
									this.isUpdateTtl = false
				}
			},
			focusStatus(){
				return true;
			}
		}
	};
</script>
<style lang = "less">
	@import '../common/style/nav.less';
	@import '../common/style/form.less';
	@import '../common/style/todo.less';
</style>
