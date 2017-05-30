import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path     : '/index',
      component: require('../views/index'),
      children : [
        // 时下流行 进入 playListDetail 迷你列表
        {
          path     : 'rage',
          component: require('../views/rage'),
        },
        // 歌单
        {
          path     : 'songList',
          component: require('../views/songList'),
        },
        // 排行榜
        {
          path     : 'leaderBoard',
          component: require('../views/leaderBoard'),
        },
        // 热门歌手
        {
          path     : 'hotSinger',
          component: require('../views/hotSinger'),
        },
      ],
    },
    {
      name     : 'playerDetail',
      path     : '/playerDetail/:id',
      component: require('../views/playerDetail'),
    },
    // 进入 playerDetail 播放器详情
    {
      path     : '/playListDetail/:id',
      name     : 'playListDetail',
      component: require('../views/playListDetail'),
    },
    {
      path: '*', redirect: '/index/rage',
    },
  ]
})

export default router
