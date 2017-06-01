/**
 * Created by LinChuQiang.
 */
import Vue from 'vue'
import * as type from '../mutationsTypes'

// 注意state没有s
const state = {
  newsList: [],
  newsDetl: {}
}
const getters = {
  getNews (state, getters, rootState) {
    // console.log('getters.state: ', state)
    // console.log('getters.rootState: ', rootState)
    if (state.newsList) {
      return state.newsList.filter(news => {
        return !news.isdelected
      })
    }
  }
}
const actions = {
  agree ({ state, commit, rootState }, newsid) {
    // 基于全局Vue对象使用http
    Vue.http.post('./php/agree.php', { newsid: newsid }, { emulateJSON: true }).then(function (res) {
      // 唤醒mutations中的setAgree方法，将从后台获取到的点赞数更新到Store.state
      commit(type.setAgree, res.body.agree)
    }, function (error) {
      console.log(error)
    })
  }
}

const mutations = {
  [type.setAgree] (state, agreeNum) {
    state.newsDetl.agree += agreeNum
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
