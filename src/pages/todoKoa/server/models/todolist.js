const db = require('../config/db.js')
const todoModel = '../schema/list.js' // 引入todolist的表结构
const TodolistDb = db.Todolist // 引入数据库

const Todolist = TodolistDb.import(todoModel)

// 查找全部的todolist
const getTodolistById = async function (id) {
  const todolist = await Todolist.findAll({
    where: {
      user_id: id
    },
    attributes: ['id', 'content', 'status'] // 只需返回这三个字段的结果即可
  })

  return todolist // 返回数据
}
// 增加todolist
const createTodolist = async function (data) {
  await Todolist.create({
    user_id: data.id,
    content: data.content,
    status: data.status
  })
  return true
}
// 删除todolist
const removeTodolist = async function (id, user_id) {
  await Todolist.destroy({
    where: {
      id,
      user_id
    }
  })
  return true
}
// 更新todolist
const updateTodolist = async function (id, user_id, status) {
  await Todolist.update(
    {
      status
    },
    {
      where: {
        id,
        user_id
      }
    }
  )
  return true
}

module.exports = {
  getTodolistById,
  createTodolist,
  removeTodolist,
  updateTodolist
}
