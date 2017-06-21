/**
 * Created by LinChuQiang.
 */
import axios from 'axios' // 导入axios模块

// 查询所有的待办集合及其单项
export const getTodoGroups = params => {
	return axios.get(`/todo/groups`, {
		params: params
	})
}
// 新增待办集合
export const addTodoGroup = params => {
	return axios.post(`/todo/addgroup`, params).then(res => res.data)
}
// 查询单个待办集合
export const getTodoGroup = params => {
	// console.log('params', params)
	return axios.get(`/todo/group`, {
		params: params
	}).then(res => res.data)
}
// 更改某个待办集合的项目
export const updateItem = params => {
	return axios.post(`/todo/updateItem`, params).then(res => res.data)
}

