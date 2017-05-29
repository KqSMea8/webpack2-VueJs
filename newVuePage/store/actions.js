/**
 * Created by LinChuQiang.
 */
import * as type from './mutationsTypes'


export default {
  setConfig({ commit }, config) {
    commit('CONFIG', config)
  },
  setArchives({ commit }, archives) {
    commit('ARCHIVES', archives)
  },
  setCategories({ commit }, categories) {
    commit('CATEGORIES', categories)
  },
  setTags({ commit }, tags) {
    commit('TAGS', tags)
  },
  setPosts({ commit }, posts) {
    commit('POSTS', posts)
  },
  setPost({ commit }, post) {
    commit('POST', post)
  },
  setPage({ commit }, page) {
    commit('PAGE', page)
  },
  setLoading({ commit }, mode) {
    commit('LOADING', mode)
  },
  setMessage({ commit }, message) {
    commit('MESSAGE', message)
  },
  setMenu({ commit }, mode) {
    commit('MENU', mode)
  }
}