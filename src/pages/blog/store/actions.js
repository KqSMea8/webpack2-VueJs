/**
 * Created by LinChuQiang.
 */
import * as type from './mutationsTypes'

/*export const setConfig = ({commit}, config) => {
  commit('CONFIG', config)
}
export const setArchives = ({commit}, archives) => {
  commit('ARCHIVES', archives)
}
export const setCategories = ({commit}, categories) => {
  commit('CATEGORIES', categories)
}
export const setTags = ({commit}, tags) => {
  commit('TAGS', tags)
}
export const setPosts = ({commit}, posts) => {
  commit('POSTS', posts)
}
export const setPost = ({commit}, post) => {
  commit('POST', post)
}
export const setPage = ({commit}, page) => {
  commit('PAGE', page)
}
export const setLoading = ({commit}, loading) => {
  commit('LOADING', loading)
}
export const setMessage = ({commit}, message) => {
  commit('MESSAGE', message)
}
export const setMenu = ({commit}, mode) => {
  commit('MENU', mode)
}*/

export default {
  setPosts({ commit }, posts) {
    commit('POSTS', posts)
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
  setPost({ commit }, post) {
    commit('POST', post)
  },
  setPage({ commit }, page) {
    commit('PAGE', page)
  },
  setConfig({ commit }, config) {
    commit('CONFIG', config)
  },
  setMessage({ commit }, message) {
    commit('MESSAGE', message)
  },
  setMenu({ commit }, mode) {
    commit('MENU', mode)
  },
  setLoading({ commit }, mode) {
    commit('LOADING', mode)
  }
}


