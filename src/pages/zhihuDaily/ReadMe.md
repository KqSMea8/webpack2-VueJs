##ZhiHu-Daily (知乎日报)
- Source：https://github.com/moonou/zhihu-daily-vue

###亮点
1. NProgress,进度条插件与路由组件异步加载相配合
2. 动态组件来切换框 see https://cn.vuejs.org/v2/guide/components.html#动态组件
3. 旧浏览器不支持 Promise，需要使用 polyfill es6-promise
4. NewsList.vue 使用 proxyserver 代理加载 img
5. CSS动态特效 transition
6. particles.js 一个轻量级的创建粒子背景的 javascript 库 比较适合用在无背景的页面，或者说找不到合适的图片来做背景，那么，我们都可以使用这个 see https://codepen.io/VincentGarreau/pen/pnlso
7. SCSS cloum

###需求
1.


###遗憾
1. 路由转场之间，内容并没有发生响应的更新
2. router.back() 回退到上一页了，还在加载以前页码内容

###文档
1. [知乎日报 API 分析](https://github.com/izzyleung/ZhihuDailyPurify/wiki/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5-API-%E5%88%86%E6%9E%90)
2. ...App是什么写法