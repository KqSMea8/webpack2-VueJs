import * as types from '../mutations'

const state = {
	// 主题日报列表查看
  data: {},
	// 主题日报内容查看
	content:{}
}

const mutations = {
  [types.UPDATETHEMES] (state, themes) {
    state.data = themes
  },
	[types.UPDATETHEMESCONTENT] (state, themes) {
    state.content = themes
  }
}

export default {
  state,
  mutations
}
