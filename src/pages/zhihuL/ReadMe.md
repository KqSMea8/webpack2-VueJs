##ZhiHu-Daily (知乎日报)
- [Issues]()
- [Source](https://github.com/moonou/zhihu-daily-vue)
- [Demo]()
- [知乎日报 API 分析](https://github.com/izzyleung/ZhihuDailyPurify/wiki/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5-API-%E5%88%86%E6%9E%90)

####项目简介
> 

####需求以及文件结构
* 


####技术栈
> vue + vue-router + vuex-router-sync + vuex + axios

> [vue-lazyload](https://www.npmjs.com/package/vue-lazyload#installation)

####技术亮点
1. 边缘跟随点赞样式


####Css
1. float.vue中的返回顶部悬浮按钮是由一个上三角型的DIV以及长方形的DIV组合而成的，返回主页是由一个上三角型的DIV以及II型的DIV组合而成的

####Js
1. 'http://119.29.68.183:8088/'.concat('news') = "http://119.29.68.183:8088/news"

####vue
1. float.vue组件插入后，可引入goTop外部函数addEventListener绑定DOM事件
2. 在数据加载方面，主要做了以下优化 
- 加载数据时增加过渡动画
- 使用v-lazyload插件实现图片懒加载
- 使用vue的watch属性响应数据变化后的请求
- 使用本地缓存存储过往消息
3. SectionList.vue [track-by 已经替换为 key](https://cn.vuejs.org/v2/guide/migration.html#track-by-%E6%9B%BF%E6%8D%A2)
4. swiper slider.vue中通过$nextTick激活Swiper 以及 v-lazy加载IMG
   ```
   this.$nextTick(() => {
       new Swiper('.swiper-container', {
         direction: 'horizontal',
         loop: true,
         autoplay: 2500,
         pagination: '.swiper-pagination',
         paginationClickable: true,
         autoplayDisableOnInteraction: false,
         preventClicks: false
       })
   })
   ```
####vue-router
1.在vuex状态中没有保存具体的文章内容，因此在切换到文章内容页前调用
beforeRouteEnter这一[导航钩子](https://router.vuejs.org/zh-cn/advanced/navigation-guards.html)来完成文章内容的请求
2. [vuex-router-sync](https://segmentfault.com/q/1010000006063302)
```
以下3个可以从vuex取得并使用
store.state.route.path   // current path (string)
store.state.route.params // current params (object)
store.state.route.query  // current query (object)
```


####vuex
1. vuex的state在初始化时先访问localStorage
``` js
news: JSON.parse(window.localStorage.getItem(STORAGE_NEWS_KEY) || '[]'),
topics: JSON.parse(window.localStorage.getItem(STORAGE_TOPICS_KEY) || '[]'),
sections: JSON.parse(window.localStorage.getItem(STORAGE_SECTIONS_KEY) || '[]'),
posts: JSON.parse(window.localStorage.getItem(STORAGE_POSTS_KEY) || '[]'),
```
2. 在 mutations 内高效率地更新news数据，比对之后再更新差异部分
3. 状态增加localStorage缓存
对于变化较少的news，topics，posts，sections增加本地缓存策略
``` js
const localStoragePlugin = store => {
 store.subscribe((mutation, { news }) => {
   window.localStorage.setItem(STORAGE_NEWS_KEY, JSON.stringify(news))
 })
 store.subscribe((mutation, { topics }) => {
   window.localStorage.setItem(STORAGE_TOPICS_KEY, JSON.stringify(topics))
 })
 store.subscribe((mutation, { posts }) => {
   window.localStorage.setItem(STORAGE_POSTS_KEY, JSON.stringify(posts))
 })
 store.subscribe((mutation, { sections }) => {
   window.localStorage.setItem(STORAGE_SECTIONS_KEY, JSON.stringify(sections))
 })
}
```
4. 使用了plugin功能，store.subscribe

####Server
1. 代理加载 img 跨域读取图片
```
export const imgProxy = (imgUrl) => {
  return imgUrl && imgUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
}
```


####Issues
1. 点击专栏总览以及主题日报，显示下拉列表时，其它区域没有遮幕，取消选择功能
