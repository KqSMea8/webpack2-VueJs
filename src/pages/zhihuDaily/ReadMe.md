##ZhiHu-Daily (知乎日报)
- [Issues]()
- [Source](https://github.com/moonou/zhihu-daily-vue)
- [Demo]()
- [知乎日报-API-分析](https://github.com/izzyleung/ZhihuDailyPurify/wiki/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5-API-%E5%88%86%E6%9E%90)

####项目简介
> 

####需求以及文件结构
* 


####技术栈
> vue + vue-router + vuex + whatwg-fetch + es6-promise

> animate.scss


####技术亮点
1. 


####Css
1. HOME.vue中通过webkit-scrollbar-thumb完成了滚动条的颜色变化
```
&:hover {
	&::-webkit-scrollbar-thumb {
		background: rgba(100, 100, 100, 1);
	}
}
```


####Js
1. [particles.js](https://codepen.io/VincentGarreau/pen/pnlso) 一个轻量级的创建粒子背景的 javascript 库 比较适合用在无背景的页面，或者说找不到合适的图片来做背景，那么，我们都可以使用这个。

####vue
1. 用[动态组件](https://cn.vuejs.org/v2/guide/components.html#动态组件) 完成了标签页切换功能
```
<transition :name = "list_animation">
	<!-- 组件在 vm.activeView 变化时改变！ -->
	<component v-bind:is = "activeView" class = "view"></component>
</transition>
```


####vue-router
1. NProgress，进度条插件与路由组件异步加载相配合
2. 

####vuex
1. 旧浏览器不支持 Promise，需要使用 polyfill es6-promise


####Server
1. NewsList.vue 使用 proxyserver 代理加载 img图片
```
Vue.filter('imageUrlPrefix', (value) => {
	const url = value.substr(7)
	const prefix = 'https://images.weserv.nl/?url='
	return prefix + url
})
```



####Issues
1. 代理API失效 已替换
2. 启动界面图像获取已经失效 BootPage.vue 已更新代理网址
3. content.vue this.$router.go(-1) 右键后退，网页错误，没有记录位置
