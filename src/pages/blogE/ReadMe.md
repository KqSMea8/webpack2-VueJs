##一个前端基于Vue2.0全家桶，后端基于Express+Mongodb的前后端分离博客
- [Source](https://github.com/elva2596/vueBlog)
- [Demo](http://www.dailu.site/home)

####项目简介
>  前后端未分离的博客项目

####需求以及文件结构
* 


####技术栈
> vue + vue-router + vuex + axois + express + element-ui

####技术亮点
1. store.js 是一个兼容所有浏览器的 LocalStorage 包装器，不需要借助 Cookie 或者 Flash。store.js 会根据浏览器自动选择使用 localStorage、globalStorage 或者 userData 来实现本地存储功能。[官网](https://www.npmjs.com/package/store2) [替代](http://brian.io/lawnchair/api/)
2. element-ui [CSS框架](http://element.eleme.io/#/zh-CN/component/installation)
3. 前后端分离

####Css
1. 

####Js
1. 

####vue
1. v-cloak


####vue-router
1. [全局路由钩子beforeEach](http://www.shouce.ren/api/view/a/11762) 拦截需要验证登录的页面以及登陆之后跳过登录和注册的页面
2. 路由配置项中的hidden:true是自定义的属性，目的是在遍历菜单时，过滤不需要的菜单项
3. iconCls就是配置图标的意思，'el-icon-message'就是一个图标的样式class类名
4. 


####vuex
1. 


####Issues
1. 前后端分离，需要涉及到webpack->config->index:proxyTable

