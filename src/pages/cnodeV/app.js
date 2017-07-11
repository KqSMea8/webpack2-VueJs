import Vue from 'vue'
import App from './app.vue'
import router from './router/routers'
import store from './vuex/store'
import * as filters from './util/filter'

import './assets/css/reset.css'
import './assets/css/common.css'
import 'github-markdown-css'

Object.keys(filters).forEach(k => Vue.filter(k, filters[k])) // 注册过滤器

// TODO-Vue: ...App是	template: '<App/>',components: { App } 的缩写
new Vue({
    el: '#app',
    router,
    store,
    ...App
})
