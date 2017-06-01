/**
 * Created by LinChuQiang.
 */
import * as type from '../mutationsTypes'

const state = {
  password: ''
}
const getters = {}
const actions = {

}
const mutations = {
  // 当触发一个类型为 showPassword 的 mutation 时，调用此函数。
  [type.showPassword]: state => alert(state.password)
}

export default {
  state,
  getters,
  actions,
  mutations
}
