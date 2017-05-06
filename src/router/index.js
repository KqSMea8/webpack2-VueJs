
// 导入组件
import apps from '../components/app.vue'

import aboutMe from '../components/aboutme.vue'

// import userLogin from "./../components/user-login.vue";
const userLogin = resolve => {
  // 成功之后的回调
  resolve(require('../components/user-login.vue')) // 这就是异步加载的方式
}

import news from '../components/news.vue'

// import newsDetail from "../components/news-detail.vue";
const newsDetail = resolve => {
  // 成功之后的回调
  resolve(require('../components/news-detail.vue')) // 这就是异步加载的方式
}



export default [
  {path: '/home', component: apps, name: 'home'},
  {path: '/news', component: news, name: 'news'},
  {path: '/news/:newsid', component: newsDetail, name: 'newsDetail'},
  {path: '/login', component: userLogin, name: 'userLogin'},
  {path: '/about', component: aboutMe, name: 'aboutMe'}
]
