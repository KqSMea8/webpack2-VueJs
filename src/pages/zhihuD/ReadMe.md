##知乎日报
- [Issues]()
- [Source](https://github.com/xrr2016/zhihu-daily)
- [Demo]()
- [知乎日报 API 分析](https://github.com/izzyleung/ZhihuDailyPurify/wiki/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5-API-%E5%88%86%E6%9E%90)

####项目简介
> 

####需求以及文件结构
* 


####技术栈
> vue + vue-router + vuex + axois

> [jquery通知提示插件toastr库](https://github.com/CodeSeven/toastr)

> [materialize UI库](http://materializecss.com/)

####技术亮点
1. 首页加载成功弹出问好的弹框 app.js
```
created () {
	toastr.success('Welcome!')
	this.$store.dispatch('getLocalFavoriteStories')
}
```

####Css
1. material-icons 字体
2. data-activates 完成下拉列表形式的模态框


####Js
1. localStorage.setItem 添加收藏

####vue
1. vue内部引入 import logo from  '../assets/imgs/brand.png'插入到HTML中


####vue-router
1. 


####vuex
1. 


####Server
1. 代理API，https://bird.ioliu.cn/v1/?url=http://news-at.zhihu.com
2. 图片代理API，https://images.weserv.nl/?url=


####Issues
1. 响应式中的移动屏页面
2. 首页大图片加载缓慢之际标题却扎堆
