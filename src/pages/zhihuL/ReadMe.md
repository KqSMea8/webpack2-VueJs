##ZhiHu-Daily (知乎日报)
- Source：https://github.com/moonou/zhihu-daily-vue

###亮点
1. [vuex-router-sync](https://segmentfault.com/q/1010000006063302)
```
以下3个可以从vuex取得并使用
store.state.route.path   // current path (string)
store.state.route.params // current params (object)
store.state.route.query  // current query (object)
```
2. JSON.parse(window.localStorage.getItem(STORAGE_NEWS_KEY) || '[]')
3. [vue-lazyload](https://www.npmjs.com/package/vue-lazyload#installation)
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
5. 加入track-by属性：数据修改时，不变数据所在的dom不被重新渲染，已改变的数据所在dom才被重新渲染
6. 通过Vuex.plugin store.subscribe 监听并写入localStorange
###需求
1.


###遗憾
1. 点击切换专栏总览以及主题日报时，其它区域没有遮幕
