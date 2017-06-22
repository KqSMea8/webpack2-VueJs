/**
 * Created by LinChuQiang.
 */
import axios from 'axios' // 导入axios模块

// 增加单个待办集合,返回group数据
export const addTodoGroup = params => {
	return axios.post(`/todo/addgroup`, params).then(res => res.data)
}
// 删除指定待办集合,返回groups数据
export const delTodoGroup = params => {
	return axios.post(`/todo/delgroup`, params).then(res => res.data)
}
// 查找所有的待办集合,返回groups数据
export const getTodoGroups = params => {
	// 注意：此处没有.then(res => res.data)
	return axios.get(`/todo/groups`, {
		params: params
	})
}
// 查找指定待办集合,返回group数据
export const getTodoGroup = params => {
	// console.log('params', params)
	return axios.get(`/todo/group`, {
		params: params
	}).then(res => res.data)
}
// 更新指定待办集合,返回groups数据
export const updateTodoGroup = params => {
	return axios.post(`/todo/updategroup`, params).then(res => res.data)
}

// 指定待办集合中增加新项目,返回groups数据
export const addItem = params => {
	return axios.post(`/todo/addItem`, params).then(res => res.data)
}
// 更新指定待办集合中的项目,返回groups数据
export const updateItem = params => {
	return axios.post(`/todo/updateItem`, params).then(res => res.data)
}


