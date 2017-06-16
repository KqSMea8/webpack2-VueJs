import { fetchNodesList } from './api'
import types from '../mutation-types'
// 分类导航数据
export const refreshNodes = ({commit}) => {
	commit(types.REFRESH_NODES)
}
// 获取分类导航数据成功
export const receiveNodes = ({commit}, {response: json}) => {
	// TODO:这里的{ response: json } 接收方式奇怪
	commit(types.RECEIVE_NODES_SUCCESS, {
		nodes: json.nodes
	})
}
// 获取分类导航数据中
export const fetchNodes = ({commit, dispatch}) => {
	commit(types.REQUEST_NODES)
	fetchNodesList().then((response) => {
		dispatch('receiveNodes', {response})
	}).catch((error) => {
		commit(types.RECEIVE_NODES_FAILURE, {error})
	})
}
// 是否已存在分类导航数据
const shouldFetchNodes = (state) => {
	const lists = state.lists
	if (lists.items.length === 0) {
		return true
	}
	return lists.didInvalidate
}
// 获取分类导航数据
export const fetchNodesIfNeeded = ({dispatch, state}) => {
	if (shouldFetchNodes(state)) {
		dispatch('fetchNodes')
	}
}
