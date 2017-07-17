import NProgress from 'nprogress'

/* todo-vueRouter:异步加载组件以及进度条范例 */
const BootPage = r => {
  NProgress.start()
  require.ensure([], () => {
    NProgress.done()
    r(require('../pages/BootPage.vue'))
  }, 'zhihuDaily_boot')
}
const Home = r => {
  NProgress.start()
  require.ensure([], () => {
    NProgress.done()
    r(require('../pages/Home.vue'))
  }, 'zhihuDaily_home')
}
const Theme = r => {
  NProgress.start()
  require.ensure([], () => {
    NProgress.done()
    r(require('../pages/Theme.vue'))
  }, 'zhihuDaily_theme')
}
const Content = r => {
  NProgress.start()
  require.ensure([], () => {
    NProgress.done()
    r(require('../pages/Content.vue'))
  }, 'zhihuDaily_content')
}

export default [
	{
		path: '/',
		component: BootPage
	},
  {
    path: '/home',
    component: Home,
    name: 'home'
  },
  {
    path: '/theme/:id',
    component: Theme,
    name: 'theme'
  },
  {
    path: '/content/:id',
    component: Content,
    name: 'content'
  }
]
