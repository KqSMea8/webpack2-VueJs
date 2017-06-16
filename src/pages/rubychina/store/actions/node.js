import { fetchNodesList } from './api'
import types from '../mutation-types'

export const refreshNodes = ({ commit }) => {
  commit(types.REFRESH_NODES)
}

// 讨论节点分类导航
export const fetchNodesIfNeeded = ({ dispatch, state }) => {
  if (shouldFetchNodes(state)) {
    dispatch('fetchNodes')
  }
}
// 是否已存在节点分类
const shouldFetchNodes = (state) => {
	const lists = state.lists
	if (lists.items.length === 0) {
		return true
	}
	return lists.didInvalidate
}
// 获取节点分类中
export const fetchNodes = ({ commit, dispatch }) => {
	commit(types.REQUEST_NODES)
	fetchNodesList().then((response) => {
		dispatch('receiveNodes', { response })
	}).catch((error) => {
		commit(types.RECEIVE_NODES_FAILURE, { error })
	})
}
// 获取节点分类成功
export const receiveNodes = ({ commit }, { response: json }) => {
	// 这里的{ response: json } 接收方式奇怪
	commit(types.RECEIVE_NODES_SUCCESS, {
		nodes: json.nodes
	})
}
