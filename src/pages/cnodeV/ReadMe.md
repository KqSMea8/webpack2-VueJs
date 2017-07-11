##基于vue+vue-router+vuex+axios+webpack开发的vue2.x Cnode社区
- [Issues]()
- [Source](https://github.com/vincentSea/vue2.x-Cnode)
- [Demo]()
- [Api接口](https://cnodejs.org/api)

####项目简介
> 

####需求以及文件结构
* 响应式菜单
* mask 遮幕层
* 路由拦截监测登录情况
* 滚动加载
* 用户登录
* 发布主题
* 消息消失框，验证提示

####技术栈
> vue + vue-router + vuex + axois + express + nodeJs(glob.sync)

####技术亮点
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



####Css
1. 

####Js
1. 

####vue
1. 全局注册过滤器  Vue.filter(k, filters[k])



####vue-router
1. 通过beforeRouteEnter来加载内容


####vuex
1. 通过modules来分类的vuex


####Server
1. localStorage


####Issues
1. 下拉主题详情总是显示加载图标-Detail.vue
2. 没有点赞以及回复评论功能
