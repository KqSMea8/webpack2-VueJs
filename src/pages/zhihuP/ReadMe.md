##
- [Issues]()
- [Source]()
- [Demo]()
- [Api接口](https://cnodejs.org/api)
- [Api](https://api.imjad.cn/)
- [知乎日报 API 分析](https://github.com/izzyleung/ZhihuDailyPurify/wiki/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5-API-%E5%88%86%E6%9E%90)

####项目简介
> 

####需求以及文件结构
* 


####技术栈
> vue + vue-router + vuex + axios + moment

####技术亮点
1. 


####Css
1. basscss基础布局
2. 通过animation形成从右向左的划过显现动画
```
@keyframes newsLastetTime {
	from {
		transform: translateX(100px);
		opacity: 0;
	}
	to {
		transform: translateX(0px);
		opacity: 1;
	}
}
```
3. q {quotes: "\2018" "\2019" "\201c" "\201d";}
####Js
1. 

####vue
1. Vue.filter('formatDate') 转换日期格式
2. 用了 export default 就不用 import {xxx} from 的大括号引入
3. 过渡动画 transition homeTransition-leave-active App.vue

####vue-router
1. 


####vuex
1. 


####Server
1. 图片URL代理：“http://lovestreet.leanapp.cn/zhihu/resource?url=”
2. API 代理：http://lovestreet.leanapp.cn/

####Issues
1. 监听页面已滑动的位置，当页面滑动了400px之后，显示“返回顶部”按钮，跟固定在顶部的导航栏并没有用节流函数以及回收处理
