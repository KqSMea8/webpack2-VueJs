/**
 * 对歌曲相关API做一层封装，方便统一管理，
 */
import axios from 'axios'
import API from './address.js'
let baseURL = 'https://api.imjad.cn/cloudmusic/'
const request = axios.create({
	baseURL: baseURL
})
export default {
	// 获取默认歌单
	getDefaultSonglist: () => request.get(API.getDefaultSonglist),
	// 搜索歌曲
	searchSongs: (param) => request.get(API.searchSongs, {params: {type: 'search', s: param}}),
	// 歌曲地址
	getSongs: (param) => request.get(API.searchSongs, {params: {type: 'url', id: param}}),
	// 根据dfsid获取任意品质音源
	getUrlByDfsId: (param) => request.get(API.getUrlByDfsId, {params: {dfsid: param}}),
	// 获取评论
	getCommments: (param) => request.get(API.getComments, {params: {type: 'comments', id: param}}),
	// 添加歌曲到收藏夹
	addToCollections: () => request.get(API.addToCollections),
	/**
	 * 登录
	 * @param params {object} 格式：{username:xxx, password:xxx}
	 */
	login: (params) => request.post(API.login, params),
	// 获取用户歌
	getUserInfo: () => request.get(API.getUserInfo)
}
