import Vue from 'vue'
import Router from 'vue-router'
// 首页
import latest from '../components/latest'
// 主题日报
import subject from '../components/subject'
// 我的收藏
import favorites from '../components/favorites'
// 热门文章
import hot from '../components/hot'
// 首页
import story from '../components/story'

Vue.use(Router)
const routes = [
  {path: '/', name: 'index', component: latest},
  {path: '/hot', name: 'hot', component: hot},
  {path: '/subject/:id', name: 'subject', component: subject},
  {path: '/story/:id', name: 'story', component: story},
  {path: '/favorites', name: 'favorites', component: favorites},
  {path: '*', redirect: '/'}
]

export default new Router({
  routes
})
