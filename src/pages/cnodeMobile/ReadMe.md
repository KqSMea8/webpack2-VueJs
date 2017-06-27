##基于vue.js重写Cnodejs.org社区的webapp
- [Source](https://github.com/shinygang/Vue-cnodejs)
- [Api接口](https://cnodejs.org/api)

####项目简介
> 使用cnode社区的API完成的页面

####需求以及文件结构
* 回到顶部按钮
* 无限下拉加载主题列表
* 主题列表可按类加载
* 主题详情的层主评论、点赞层主以及回复楼主
* 新建主题
* 登录
* 用户详情
* 用户信息

####技术栈
> vue + vue-router + vuex + isomorphic-fetch + less

####Css
1. 采用less手写样式并且跟组件分离
2. Flex完成伸缩布局 [flex](http://www.css88.com/book/css/properties/flex/flex.htm) flex是复合属性，设置或检索弹性盒模型对象的子元素如何分配空间。根据第三个参数 flex-basis ，来计算空间，溢出时，分别计算缩小空间；剩余时，分别计算拓展空间。

####Js
1. [delete操作符是用来删除对象属性的](http://www.css88.com/archives/4633)
2. backTop.vue 实现了缓冲型回到顶部功能
3. rest参数 
```

const data = {
	accesstoken: this.userInfo.accesstoken,
	...{
       tab    : 'share',
       title  : '',
       content: ''
    }
}
转化为：
data={
	accesstoken: this.userInfo.accesstoken,
	tab    : 'share',
	title  : '',
	content: ''
}

```
4. 无限滚动加载数据

####vue
1. todo-vue:可以直接设置template内的 item 内容，无需data

####vue-router
1. router.replace(location) 应用于login.vue的beforerouterenter，已登录则跳过此页面
- 跟 router.push 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。

####vuex
1. 简单应用


####Server
1. API分离出去并自带cnodeAPI详细解释，统一触发
2. [isomorphic-fetch](https://www.npmjs.com/package/isomorphic-fetch)支持同构JavaScript应用指的是用JavaScript编写的应用，能够同时运行于客户端和服务器。因此，你只需编写一次代码，在服务器上执行它来实施静态页面，同时执行于客户端以允许快速的交互。
3. [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)


####Issues
1. 
