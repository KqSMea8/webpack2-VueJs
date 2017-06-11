import * as v from './mutation-types.js'

export default {
	// 按主题类型获取主题数据
	async getHomeData ({commit}, obj) {
		const getData = new Promise((resolve, reject) => {
			// const request = new XMLHttpRequest();
			// request.open('GET', 'https://cnodejs.org/api/v1/topics');
			// request.onreadystatechange = () =>{
			// 	if(request.readyState === 4 && request.status === 200) {
			// 		resolve(request.responseText)
			// 		console.log(JSON.parse(request.responseText));
			// 	}
			// }
			// request.send(null);
			// get /topics 主题首页
			$.get('https://cnodejs.org/api/v1/topics', { tab: obj.tab, limit:'46', page: obj.page }, function (data) {
				resolve(data.data)
			})
		})
		commit(v.GET_HOME_DATA, {
			type: obj.tab,
			data:await getData
		})
	},
	clearData ({commit}) {
		commit(v.CLEAR_DATA)
	},
	changeTime ({commit}) {
		commit(v.CHANGE_TIME)
	},
	// 获取主题详情数据
	async getThemeDetails ({commit}, id) {
		const getData = new Promise((resolve, reject) => {
			$.get(`https://cnodejs.org/api/v1/topic/${id}`, function (data) {
				resolve(data.data)
			})
		})
		commit(v.GET_THEME_DETAILS, await getData)
	},
	// 获取user数据
	async getUserData ({commit}, name) {
		const getData = new Promise((resolve, reject) => {
			$.get(`https://cnodejs.org/api/v1/user/${name}`, function (data) {
				resolve(data.data)
			})
		})
		commit(v.GET_USER_DATA, await getData)
	}
}
