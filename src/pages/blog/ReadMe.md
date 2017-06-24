##Vue JSON 博客(AcyOrt/Vue/Vuex/Webpack)
- [Issues](https://github.com/LoeiFy/Recordum/issues/18)
- [Source](https://github.com/acyortjs/aksdj4)
- [Demo](http://aksdj4.am0200.com/)

[TOC]

###技术栈
1. vue + vue-router + vuex + axois

###技术亮点
1. 通过webpack->dev-server->express，Mock本地JS文件，返回API接口以及数据
2. views + components 的文件分类结构
 - views 储存路由页面
 - components 存储页面中的组件页面
3. 


###Issues
1.从主站跳转到分站时，URL指向不合理



###Css
1. 通过 transform: translateY(-100%) 隐藏菜单栏
2. markdown的CSS样式
###Js
1. [rest-参数 ...](http://es6.ruanyifeng.com/#docs/function#rest-参数)


###vue
1. 监控数据变化 [watch](https://cn.vuejs.org/v2/api/#watch)
2. header.vue 中，toggle(e)，使用e来判断原生状态，比如 e.target.tagName != 'A' 时
3. 设置 Vue.config.devtools = true 来启动Chrome-F12-Vue调试
4. v-if 和 v-show 的[区别](https://cn.vuejs.org/v2/guide/conditional.html#lt-template-gt-中-v-if-条件组)

###vue-router
1. 滚动行为 [scrollBehavior](https://github.com/vuejs/vue-router/blob/next/examples/scroll-behavior/app.js) 
2. transition + router-view，通过transition使得路由页面的转场效果更加顺滑，要配合自定义的CSS过度样式来使用
3. 通过router-link直接跳转页面

###vuex
1. 此DEMO只做了简单的使用
2. 本地的JSON数据异步填充到Vuex-State

###Axois
1. 通过 Vue.use(plugin) 全局注册了 Vue.prototype.$load 实例方法，可直接全局调用 this.$load
2. [用 axios.all 同时处理多个并发请求](https://github.com/mzabriskie/axios)
