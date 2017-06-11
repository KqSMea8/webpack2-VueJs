import * as types from './mutations'
import { getApi } from '../common/api'
// 启动界面图像获取
export const getBootImage = ({commit}) => {
	fetch(getApi().startImage).then((data) => {
		return data.json()
	}).then((data) => {
		commit(types.GETBOOTIMAGE, data)
	})
}
// 过往消息
export const getNewsByDate = ({commit}, date) => {
	let url = getApi().news.before + date
	fetch(url).then((data) => {
		return data.json()
	}).then((data) => {
		commit(types.UPDATENEWS, data)
	})
}
// 最新消息
export const getNews = ({commit}) => {
	let url = getApi().news.latest
	fetch(url).then((data) => {
		return data.json()
	}).then((data) => {
		commit(types.UPDATENEWS, data)
	})
}
// 主题日报列表查看
export const getThemes = ({commit}) => {
	fetch(getApi().themes.list).then((data) => {
		return data.json()
	}).then((data) => {
		commit(types.UPDATETHEMES, data)
	})
}
// 主题日报内容查看
export const getThemesContent = ({commit}, data) => {
	let url = getApi().themes.content + '/' + data
	fetch(url).then((data) => {
		return data.json()
	}).then((data) => {
		commit(types.UPDATETHEMESCONTENT, data)
	})
}
