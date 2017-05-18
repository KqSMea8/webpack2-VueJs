// 导入组件

import Todo from '../components/Todo.vue'

import Home from '../components/Home.vue'

import About from '../components/About.vue'

import News from '../components/News.vue'

// import userLogin from "./../components/user-login.vue";
const UserLogin = resolve => {
  // 成功之后的回调
  resolve(require('../components/UserLogin.vue')) // 这就是异步加载的方式
}

// import newsDetail from "../components/news-detail.vue";
const NewsDetail = resolve => {
  // 成功之后的回调
  resolve(require('../components/NewsDetail.vue')) // 这就是异步加载的方式
}



const Blank = {
  template: `
    <router-view></router-view>
  `,
  watch: {
    '$route' (to, from) {
      console.log(to)
      console.log(from)
    }
  }
}

export default [
  {
    path: '/vuespa',
    component: Blank,
    children: [
      {path: '', component: About},
      {path: 'todo', component: Todo},
      {path: 'news', component: News},
      {path: 'login', component: UserLogin},
      {path: 'home', component: Home}
    ]
  },
  {path: '/data', component: Home, name: 'Home'},
  {path: '/news', component: News, name: 'News'},
  {path: '/news/:newsid', component: NewsDetail, name: 'NewsDetail'},
  {path: '/login', component: UserLogin, name: 'UserLogin'},
  {path: '/about', component: About, name: 'About'}
]
