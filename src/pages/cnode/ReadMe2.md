##基于vue.js重写Cnodejs.org社区的webapp
- [Source](https://github.com/shinygang/Vue-cnodejs)
- [Api接口](https://cnodejs.org/api)
- 登录Token： 3bd2d872-7a56-4d47-8b03-b3f33dbdbb4e
####项目简介
> 

####需求以及文件结构
* 


####技术栈
> vue + vue-router + vuex + webpack-zepto + scss
以及
- 
- fastclick

####技术亮点
1. 


####Css
1. 各组件页面的CSS集合在一个文件夹内
2. 菜单栏的隐藏通过transform: translateX(200px);控制
3. 滚动条完全隐藏要指定三处地方

####Js
1. 通过zepto.param序列化URL查找参数 - list.vue [参考](http://www.css88.com/doc/zeptojs_api/#$.param)
2. 监听滚动事件scroll，计算滚动条位置，响应加载主题列表数据，达到无限加载流效果
3. 通过主题数据的编号存放，检测已加载主题的数据重复加载，那么更新旧主题数据即可 - list.vue

####vue
1. 实例化Vue的filter
```
 Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))
```
2. 广告中转倒计时页面
3. 使用 webpack-zepto 构建了一个弹出框插件 Vue.prototype.$alert
4. 使用 webpack-zepto 监听了scroll事件并判断是否显示回到顶部按钮 - backtotop.vue
5. 复合响应式按钮，点击显示菜单栏并带遮罩，禁止滚动页面 - header.vue
6. vue->replace 决定是否用模板替换挂载元素。如果设为 true（这是默认值），模板将覆盖挂载元素，并合并挂载元素和模板根节点的 attributes。如果设为 false 模板将覆盖挂载元素的内容，不会替换挂载元素自身
7. vue中的扩折号命名等于驼峰式命名，例如 page-type = pageType
8. 全局组件header通过传参，决定样式表现

####vue-router
1. router.beforeEach 处理需要登录的页面而没有登录的情况直接跳转登录
2. 完成了组件的异步引入
3. beforeRouteEnter && beforeRouteLeave -list.vue 完成了切换主题列表和主题详情时的位置记录
4. [this.$route.path](https://router.vuejs.org/zh-cn/api/route-object.html) 字符串，对应当前路由的路径，总是解析为绝对路径，如 "/foo/bar"

####vuex
1. 


####Axois
1. 


####Issues
1. 
