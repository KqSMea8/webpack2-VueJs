/**
 * Created by sioxa on 2016/12/25 0025.
 */
import Vue from 'vue'
import API from '../config/api'
function apiFactory (api) {
	return (id = null) => Vue.http.jsonp(
	api.url,
	{
		params: api.params(id),
		jsonp : api.jsonp
	}
	)
}
export default {
	actions: {
		getRankSongs ({commit}, id) {
			return apiFactory(API.rank_songs)(id)
		},
		// 排行榜
		getRankList ({commit}) {
			return apiFactory(API.rank_list)()
		},
		// 专辑信息
		getAlbum ({commit}, id) {
			return apiFactory(API.album)(id)
		},
		// 歌手信息
		getSingerInfo ({commit}, id) {
			return apiFactory(API.singer_info)(id)
		},
		// 搜索框提交搜索
		search ({commit}, key) {
			return apiFactory(API.search)(key)
		},
		// 热门搜索关键词
		getHotKey ({commit}) {
			return apiFactory(API.hotkey)()
		},
		// 获取轮播图、热门歌单、MV列表
		getRecommands ({commit}) {
			return apiFactory(API.first_page_data)()
		},
		getCdList ({commit}, id) {
			return apiFactory(API.cd)(id)
		},
		// 获取歌词文件
		getLyric ({commit}, id) {
			return Vue.http.jsonp('https://api.darlin.me/music/lyric/' + id + '/', {
				jsonp: 'callback'
			})
		}
	}
}
