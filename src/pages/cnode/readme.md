##基于vue.js重写Cnodejs.org社区的webapp
- [Source](https://github.com/shinygang/Vue-cnodejs)
- [Api接口](https://cnodejs.org/api)
- 登录Token： 3bd2d872-7a56-4d47-8b03-b3f33dbdbb4e

####项目简介
> 使用cnode社区的API完成的页面

####需求以及文件结构
* 首页的广告展览三秒
* 自动跳转到所有主题列表页，点击查看主题详情，回复主题以及层主
* 点击汉堡按钮，显示左侧菜单栏
* 登录查看用户信息、最近回复以及最新发布主题
* 新建主题，回到顶部按钮，无限滚动加载主题列表
* views存放路由引入的页面 components存放组件 css为手写样式
* utils 辅助函数包括了从文本中提取出 @username 标记的用户名数组、将 Date 转化为指定格式的String、调用Timeago库显示到现在的时间、格式化日期或时间、节流函数
* plugin Vue插件包括了格式化时间、弹出框


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
4. 该站的页面加载图标loading是提前设置在body的背景图像之中的

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
9. [watch](https://cn.vuejs.org/v2/api/#watch) [参数说明](https://cn.vuejs.org/v2/api/#vm-watch) 观察表达式
10. 回复该主题的层主编辑框 topic.vue [sync-修饰符](https://cn.vuejs.org/v2/guide/components.html#sync-修饰符)

####vue-router
1. router.beforeEach 处理需要登录的页面而没有登录的情况直接跳转登录
2. 完成了组件的异步引入
3. beforeRouteEnter && beforeRouteLeave -list.vue 完成了切换主题列表和主题详情时的位置记录
4. [this.$route.path](https://router.vuejs.org/zh-cn/api/route-object.html) 字符串，对应当前路由的路径，总是解析为绝对路径，如 "/foo/bar"

####vuex
1. 简单应用


####Server
1. 直接使用了Zepto进行Ajax异步读取发送


####Issues
1. 刷新页面时，总是会跳回到根路径节点
