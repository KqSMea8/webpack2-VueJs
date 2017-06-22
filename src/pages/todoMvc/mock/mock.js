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
		// 增加单个待办集合,返回group数据
		mock.onPost('/todo/addgroup').reply(config => {
			let group = {
				id      : Mock.Random.guid(),
				title   : 'newsList',
				isDelete: false,
				isLock  : false,
				count   : 0,
				items   : []
			}
			Groups.push(group)
			return new Promise((resolve, reject) => {
				setTimeout(() => { resolve([200, {group: group}]) }, 200)
			})
		})
		// 删除指定待办集合,返回groups数据,带Items
		mock.onPost('/todo/delgroup').reply(config => {
			// console.log(config)
			let {id} = JSON.parse(config.data)
			let index = Groups.findIndex(group => {
				return group.id === id
			})
			Groups.splice(index, 1)
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200, {groups: Groups}])
				}, 200)
			})
		})
		// 查找所有的待办集合,返回groups数据,没有Items
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
		// 查找指定待办集合,返回group数据
		mock.onGet('/todo/group').reply(config => {
			// console.log('config', config)
			let id = config.params
			// console.log('id', id)
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
			if (group.items) {
				group.count = group.items.filter(item => {
					if (item.isChked == false) {
						return true
					}
					return false
				}).length
			} else {
				group.count = 0
			}
			return new Promise((resolve, reject) => {
				setTimeout(resolve([200, {group: group}]), 200)
			})
		})
		// 更新指定待办集合,返回groups数据,带Items
		mock.onPost('/todo/updategroup').reply(config => {
			// console.log(config)
			let {id, title, isDelete, isLock, count} = JSON.parse(config.data)
			// console.log(JSON.parse(config.data))
			// console.log(id)
			// console.log(title)
			// console.log(isDelete)
			// console.log(isLock)
			// console.log(count)
			Groups.some((group) => {
				if (group.id === id) {
					group.title = title
					group.isDelete = isDelete
					group.isLock = isLock
					group.count = count
					return true
				}
			})
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200, {groups: Groups}])
				}, 200)
			})
		})


		// 指定待办集合中增加新项目,返回groups数据,带Items
		mock.onPost('/todo/addItem').reply(config => {
			// console.log(config)
			let {id, text} = JSON.parse(config.data)
			let item = {
				text    : text,
				isDelete: false,
				isChked : false
			}
			Groups.some((group) => {
				if (group.id === id) {
					group.items.push(item)
					return true
				}
			})
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200], {groups:Groups})
				}, 200)
			})
		})
		// 更新指定待办集合中的项目,返回groups数据
		mock.onPost('/todo/updateItem').reply(config => {
			// console.log(config)
			let {id, items, index} = JSON.parse(config.data)
			// console.log(Groups)
			Groups.some((group) => {
				if (group.id === id) {
					group.items[index] = items
					return true
				}
			})
			// console.log(Groups)
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200], {groups: Groups})
				}, 200)
			})
		})
	}
}
