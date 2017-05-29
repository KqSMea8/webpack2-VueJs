import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/home.vue'
import Post from '../views/post.vue'
import Category from '../views/category.vue'
import Tag from '../views/tag.vue'

import Archives from '../views/archives.vue'
import Categories from '../views/categories.vue'
import Tags from '../views/tags.vue'
import Page from '../views/page.vue'


const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/page/:page', component: Home, name: 'homePage' },
  
  
  { path: '/posts/:id', component: Post, name: 'post' },
  
  {
    path: '/categories/:id',
    component: Category,
    name: 'category',
    children: [
      { path: ':page', component: Category }
    ]
  },
  
  {
    path: '/tags/:id',
    component: Tag,
    name: 'tag',
    children: [
      { path: ':page', component: Tag }
    ]
  },
  
  
  // 主页面导航 menu.vue
  { path: '/archives', component: Archives, name: 'archives' },
  { path: '/archives/:page', component: Archives, name: 'archivesPage' },
  { path: '/categories', component: Categories, name: 'categories' },
  { path: '/tags', component: Tags, name: 'tags' },
  { path: '/pages/:name', component: Page, name: 'page' },
  
  { path: '*', redirect: '/' }
]

const scrollBehavior = (to, from, savedPosition) => {
  return { x: 0, y: 0 }
}

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  scrollBehavior,
  routes
})