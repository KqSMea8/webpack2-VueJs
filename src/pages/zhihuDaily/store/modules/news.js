import * as types from '../mutations'

const state = {
  news: []
}

const mutations = {
  [types.UPDATENEWS] (state, news) {
    let flag = true
    // 比对时间来替换新旧消息
    state.news.forEach((v) => {
      if (v.date === news.date) {
        v.stories = news.stories
        flag = false
      }
    })
    if (flag) {
      state.news.push(news)
    }
  }
}

export default {
  state,
  mutations
}
