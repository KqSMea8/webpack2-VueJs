/**
 * Created by LinChuQiang.
 */
import * as type from './mutationsTypes'

const mutations={
  CONFIG(state, config) {
    state.config = config
  },
  ARCHIVES(state, archives) {
    state.archives = archives
  },
  CATEGORIES(state, categories) {
    state.categories = categories
  },
  TAGS(state, tags) {
    state.tags = tags
  },
  POSTS(state, posts) {
    state.posts = posts
  },
  POST(state, post) {
    state.post = post
  },
  PAGE(state, page) {
    state.page = page
  },
  LOADING(state, mode) {
    state.loading = mode
  },
  MENU(state, mode) {
    state.menu = mode
  },
  MESSAGE(state, message) {
    state.message = message
  }
}

export default {
  mutations
}