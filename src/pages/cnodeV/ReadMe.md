##基基于vue+vue-router+vuex+axios+webpack开发的vue2.x Cnode社区
- Source：hhttps://github.com/vincentSea/vue2.x-Cnode

###亮点
1. 分模块的VuexStore
2. 通过路由的beforeRouteEnter来触发store事件

```
next((vm) => {
	vm.user = {}
	vm.userData(vm)
})
```
3. Me.vue 的slot插槽技术
4. Cell.vue 通过computed来注册点击事件
5. axios 加载




###需求
1.回到顶部按钮


###遗憾
1. 下拉主题详情总是显示加载图标-Detail.vue
2. 没有点赞以及回复评论功能
