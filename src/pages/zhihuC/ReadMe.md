##ZhiHu-Daily (知乎日报)
- [Issues]()
- [Source](https://github.com/cs1707/vue-zhihudaily-2.0)
- [Demo]()
- [知乎日报 API 分析](https://github.com/izzyleung/ZhihuDailyPurify/wiki/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5-API-%E5%88%86%E6%9E%90)

####项目简介
> 

####需求以及文件结构
* 


####技术栈
> vue + vue-router + vuex-router-sync + Vuex + lodash + axios

####技术亮点
1. 自定义了轮播图carousel组件，父子组件slot嵌套


####Css
1. 

####Js
1. 滚动下拉加载运用到了lodash节流函数_.throttle

####vue
1. transition + keep-alive + router-view，再加上指定:enter-active-class="enterActiveClass"结合animate.css完成了路由页面的转场功能
2. [当组件在 <keep-alive> 内被切换，它的 activated 和 deactivated 这两个生命周期钩子函数将会被对应执行](https://cn.vuejs.org/v2/api/#activated)
3. beforeRouteLeave 函数中记录离开页面时滚动的距离window.sessionStorage.setItem('scrollTop', document.body.scrollTop)

####vue-router
1. scrollBehavior



####vuex
1. 


####Server
1. API代理 https://bird.ioliu.cn/v1/?url=http://news-at.zhihu.com/api
2. 图片代理 https://images.weserv.nl/?url=$2
3. axois中的transformResponse方法可对结果data预处理
4. [Vue服务端渲染和Vue浏览器端渲染的性能对比-list.vue preFetch](http://www.cnblogs.com/tiedaweishao/p/6644267.html)，服务端渲染可以解决SEO，首屏过慢等问题
####Issues
1. 
