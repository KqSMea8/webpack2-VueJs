/**
 * Created by LinChuQiang.
 */
import * as type from './mutationsTypes'

const getters={
  config(state) {
    return state.config
  },
  archives: state => state.archives,
  categories: state => state.categories,
  tags: state => state.tags,
  posts: state => state.posts,
  post(state) {
    return state.post
  },
  page: state => state.page,
  loading: state => state.loading,
  menu: state => state.menu,
  message: state => state.message
}

export default {
  getters
}