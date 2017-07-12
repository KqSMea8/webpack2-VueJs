import Vue from 'vue'
import VueRouter from 'vue-router'

/* todo-vuerouter:异步加载路由组件示例 */
const Index = resolve => {
  // https://router.vuejs.org/zh-cn/advanced/lazy-loading.html
  // require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
  require.ensure(['../views/index'], () => {
    resolve(require('../views/index'))
  })
}
const Rage = resolve => {
  require.ensure(['../views/rage'], () => {
    resolve(require('../views/rage'))
  })
}
const SongList = resolve => {
  require.ensure(['../views/songList'], () => {
    resolve(require('../views/songList'))
  })
}
const LeaderBoard = resolve => {
  require.ensure(['../views/leaderBoard'], () => {
    resolve(require('../views/leaderBoard'))
  })
}
const HotSinger = resolve => {
  require.ensure(['../views/hotSinger'], () => {
    resolve(require('../views/hotSinger'))
  })
}
const PlayerDetail = resolve => {
  require.ensure(['../views/playerDetail'], () => {
    resolve(require('../views/playerDetail'))
  }, 'group-player')
}
const PlayListDetail = resolve => {
  require.ensure(['../views/playListDetail'], () => {
    resolve(require('../views/playListDetail'))
  }, 'group-player')
}

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/index',
      component: Index,
      meta: {keepAlive: true},
      children: [
        // 时下流行 进入 playListDetail 迷你列表
        {
          path: 'rage',
          component: Rage,
          meta: {keepAlive: true}
        },
        // 歌单
        {
          path: 'songList',
          component: SongList,
          meta: {keepAlive: true}
        },
        // 排行榜
        {
          path: 'leaderBoard',
          component: LeaderBoard,
          meta: {keepAlive: true}
        },
        // 热门歌手
        {
          path: 'hotSinger',
          component: HotSinger,
          meta: {keepAlive: true}
        }
      ]
    },
    // 进入详细播放器
    {
      name: 'playerDetail',
      path: '/playerDetail/:id',
      component: PlayerDetail,
      meta: {keepAlive: true}
    },

    // 从推荐歌单 进入歌单详情列表
    {
      path: '/playListDetail/:id',
      name: 'playListDetail',
      component: PlayListDetail,
      meta: {keepAlive: true}
    },

    {
      path: '*', redirect: '/index/rage'
    }
  ]
})

export default router
