import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'
import plugins from './plugins'

Vue.use(Vuex)

export const STORAGE_NEWS_KEY = 'news'
export const STORAGE_TOPICS_KEY = 'topics'
export const STORAGE_POSTS_KEY = 'posts'
export const STORAGE_SECTIONS_KEY = 'sections'

// todo-vuex:state从本地读取示例
// 定义状态
// - news: 当日最新文章
// - topics: 主题日报
// - sections: 专栏
// - posts: 下载过的文章
// - topicPosts: 当前主题下的所有文章
// - sectionList: 当前专栏下的所有文章
// - index: 索引
export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    topics: JSON.parse(window.localStorage.getItem(STORAGE_TOPICS_KEY) || '[]'),
    sections: JSON.parse(window.localStorage.getItem(STORAGE_SECTIONS_KEY) || '[]'),
	  news: JSON.parse(window.localStorage.getItem(STORAGE_NEWS_KEY) || '[]'),
    posts: JSON.parse(window.localStorage.getItem(STORAGE_POSTS_KEY) || '[]'),
    topicPosts: {},
    sectionList: {},
    index: 0
  },
  getters,
  mutations,
  actions,
  plugins
})
