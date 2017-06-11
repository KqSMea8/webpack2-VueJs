import * as types from '../mutations'
const state = {
	text: '',
	img : ''
}
const mutations = {
	[types.GETBOOTIMAGE] (state, data) {
		// 图片来源
		state.text = '知乎知乎'
		// 图片地址
		state.img = data.creatives[0].url
	}
}
export default {
	state,
	mutations
}
