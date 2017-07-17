##vuejs仿写酷狗音乐webapp
- [Issues]()
- [Source](https://github.com/lavyun/vue-demo-kugou)
- [Demo]()

####项目简介
> 

####需求以及文件结构
* 轮播图


####技术栈
> vue + vue-router + vuex + vue-resource
> [mint-ui](http://mint-ui.github.io/#!/zh-cn) 基于 Vue.js 的移动端组件库

####技术亮点
1. rank.vue从http://m.kugou.com/ 提取HTML中的数据结果构建到本地页面
2. 拖放进度条
3. 歌词跟滚
4. 根据index排序来显示多种的区分样式

####Css
1. 

####Js
1. setAudio 
- state.audio = {...(state.audio), ...audio} 
- 起到一个覆盖的作用，后面的audio对象键值对可以取代前者
- state.audio = {...(state.audio), lrc} 
- 前者对象添加一个lrc的键值对对象

####vue
1. mt-swipe 轮播图
2. mixins 解决多个通用模块引用


####vue-router
1. 


####vuex
1. 


####Server
1.  API过期，通过http://cs003.m2828.com/apis/proxy.php代理提取HTML中的数据结果并构建到本地页面


####Issues
1. API欠缺，用的是本地JSON数据
2. 没有歌单下一首的功能
3. "style" is a reserved attribute and cannot be used as component prop.(不能用于组件间传递style)
