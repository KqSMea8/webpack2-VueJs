import Vue from 'vue'
import Vuex from 'vuex'
import { getTodoGroups, addTodoGroup, getTodoGroup, updateItem } from '../api/api'

Vue.use(Vuex)
const store = new Vuex.Store({
	state    : {
		// 所有的待办集合
		groups : [],

		// 默认选中的待办集合 id
		groupId: '',

		// 当前的待办集合
		group:{}
	},
	getters  : {
		getGroups (state) {
			return state.groups
		},
		getGroup (state) {
			return state.group
		},
		getGroupID (state) {
			return state.groupId
		},
		getGroupItems (state) {
			return state.group.items
		}
	},
	mutations: {
		setGroups (state, data) {
			state.groups = data
		},
		setGroup (state, data) {
			state.group = data
			// console.log(state.group)
		},
		setGroupID (state, data) {
			state.groupId = data
		},
		addGroup (state, data) {
			state.groups.push(data)
		},
		toggleGroupsLock (state, id) {
			state.group.isLock = !state.group.isLock
			state.groups.filter(group => {
				if (group.id == id) {
					group.isLock = state.group.isLock
				}
			})
		},
		setGroupCount (state, data) {
			if (data) {
				state.group.count--
				state.groups.filter(group => {
					if (group.id == state.groupId) {
						group.count = state.group.count
					}
				})
			} else {
				state.group.count++
				state.groups.filter(group => {
					if (group.id == state.groupId) {
						group.count = state.group.count
					}
				})
			}
		},
		setGroupItemDel (state, index) {
			state.group.items[index].isDelete = true
			// console.log(state.groups)
			// console.log(state.group)
		}
	},
	actions  : {
		asyncGroups ({ state, commit, dispatch }) {
			// 查询所有的待办集合
			getTodoGroups({}).then(res => {
				// console.log(res)
				// console.log(res.data)
				const GROUPS = res.data.groups
				commit('setGroups', GROUPS)
				commit('setGroupID', GROUPS[0].id)
				dispatch('asyncGroup')
			})
		},
		asyncGroup ({ state, commit, rootState }) {
			// console.log('params', params)
			// console.log('state.groupId', state.groupId)
			// 查询单个待办集合
			getTodoGroup(state.groupId).then(res => {
				// console.log(res)
				// console.log(res.data)
				const GROUP = res.group
				commit('setGroup', GROUP)
			})
		},
		asyncAddGroup ({ state, commit, rootState }) {
			// 新增待办集合
			addTodoGroup({}).then(res => {
				// console.log(res)
				// console.log(res.data)
				const GROUP = res.group
				commit('addGroup', GROUP)
				commit('setGroupID', GROUP.id)
			})
		},
		asyncGroupsLock ({ state, commit, dispatch }, id) {
			// console.log(id)
			commit('toggleGroupsLock', id)
		},
		asyncGroupItems ({ state, commit, dispatch, getters }, {item, index}) {
			// console.log('item')
			// console.log(item)
			// console.log(index)
			updateItem({ id:getters.getGroupID, items:item, index:index })
		}
	}
})
export default store
