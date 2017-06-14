##ZhiHu-Daily (知乎日报)
- Source：https://github.com/moonou/zhihu-daily-vue

###亮点
1. WeUI 是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一。https://weui.io/
2. rxjs http://reactivex.io/rxjs/manual/tutorial.html
```
search.vue中的搜索，单曲结果的操作菜单
```
3. jsonp的API形式
4. vue-lazyload vue-awesome-swiper
5. 歌词安排显示



###需求
1.


###遗憾
1. 

###文档
1. 移动端touch事件和click事件的区别
- 在移动端，手指点击一个元素，会经过：touchstart --> touchmove -> touchend --> click
- http://blog.csdn.net/lululove19870526/article/details/44345759
2. vm.$emit( event, […args] )触发当前实例上的事件，附加参数都会传给监听器回调。this.$emit('searchshow')，触发组件参数中注册的事件
3. v-if-vs-v-show 的区别

```
v-if 是“真正的”条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
相比之下， v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
一般来说， v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。
因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件不太可能改变，则使用 v-if 较好。
```




