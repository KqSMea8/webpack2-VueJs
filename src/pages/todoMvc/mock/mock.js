import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import Mock from 'mockjs'
import { Groups } from './data/todoList'
export default{
	/**
	 * mock start
	 */
	start () {
		let mock = new MockAdapter(axios)
		// 查询所有的待办集合
		mock.onGet('/todo/groups').reply(config => {
			let mockGroups = Groups.map(group => {
				return {
					id      : group.id,
					title   : group.title,
					isDelete: group.isDelete,
					isLock  : group.isLock,
					// 过滤到items里面 'checked' 为true的数据，因为它们已经被完成了
					count   : group.items.filter((data) => {
						if (data.isChked === false) {
							return true
						}
						return false
					}).length
				}
			}).filter(group => {
				// 过滤掉 'isDelete' 为true，因为已经被删除了
				if (group.isDelete === true) {
					return false
				}
				return true
			})
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					// 返回状态为200，并且返回groups数据
					resolve([200, {groups: mockGroups}])
				}, 200)
			})
		})
		// 新增待办集合
		mock.onPost('/todo/addgroup').reply(config => {
			let group = {
				id      : Mock.Random.guid(),
				title   : 'newsList',
				isDelete: false,
				isLock  : false,
				items   : []
			}
			return new Promise((resolve, reject) => {
				setTimeout(() => { resolve([200, {group: group}]) }, 200)
			})
		})
		// 查询单个待办集合
		mock.onGet('/todo/group').reply(config => {
			// console.log('config', config)
			let id = config.params
			// .log('id', id)
			// console.log('groups', Groups)
			let group = Groups.filter(group => {
				// console.log('group', group)
				if (id && group.id == id) {
					// console.log('id', id)
					return true
				}
				return false
			})[0]
			// console.log('group', group)
			group.count = group.items.filter(item => {
				if (item.isChked == false) {
					return true
				}
				return false
			}).length
			return new Promise((resolve, reject) => {
				setTimeout(resolve([200, {group:group}]), 200)
			})
		})
		// 更改某个待办集合的项目
		mock.onPost('/todo/updateItem').reply(config => {
			// console.log(config)
			let {id, items, index} = JSON.parse(config.data)
			Groups.some((group) => {
				if (group.id === id) {
					group.items[index] = items
					return true
				}
			})
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200])
				}, 200)
			})
		})
	}
}
