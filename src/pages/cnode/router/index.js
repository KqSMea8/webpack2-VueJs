import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = resolve => {
  require.ensure(['../views/index.vue'], () => {
    resolve(require('../views/index.vue'))
  }, 'cnode_index')
}

const List = resolve => {
  require.ensure(['../views/list.vue'], () => {
    resolve(require('../views/list.vue'))
  }, 'cnode_list')
}

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home'
  },

  {path: '/list', component: List, name: 'list'},

  // menu.vue
  {
    path: '/login',
    name: 'login',
    component (resolve) {
      require.ensure(['../views/login.vue'], () => {
        resolve(require('../views/login.vue'))
      }, 'cnode_login')
    }
  },
  {
    path: '/user/:loginname',
    name: 'user',
    component (resolve) {
      require.ensure(['../views/user.vue'], () => {
        resolve(require('../views/user.vue'))
      }, 'cnode_user')
    }
  },

  {
    path: '/topic/:id',
    name: 'topic',
    component (resolve) {
      require.ensure(['../views/topic.vue'], () => {
        resolve(require('../views/topic.vue'))
      }, 'cnode_topic')
    }
  },

  // header.vue -> /add
  {
    path: '/add',
    name: 'add',
    component (resolve) {
      require.ensure(['../views/new.vue'], () => {
        resolve(require('../views/new.vue'))
      }, 'cnode_new')
    },
    meta: {requiresAuth: true}
  },

  // menu.vue
  {
    path: '/message',
    name: 'message',
    component (resolve) {
      require.ensure(['../views/message.vue'], () => {
        resolve(require('../views/message.vue'))
      }, 'cnode_message')
    },
    meta: {requiresAuth: true}
  },

  // menu.vue
  {
    path: '/about',
    name: 'about',
    component (resolve) {
      require.ensure(['../views/about.vue'], () => {
        resolve(require('../views/about.vue'))
      }, 'cnode_about')
    }
  },

  {path: '*', redirect: '/'}
  // {path: '/cnodevue', component: Home, name: 'cnodevue'},
]

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes
})
