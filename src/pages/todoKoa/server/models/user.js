const db = require('../config/db.js')
const userModel = '../schema/user.js' // 引入user的表结构
const TodolistDb = db.Todolist // 引入数据库

const User = TodolistDb.import(userModel) // 用sequelize的import方法引入表结构，实例化了User。

// 通过id查找用户
const getUserById = async function (id) { // 注意是async function 而不是function。对于需要等待promise结果的函数都需要async await。
  const userInfo = await User.findOne({ // 用await控制异步操作，将返回的Promise对象里的数据返回出来。也就实现了“同步”的写法获取异步IO操作的数据
    where: {
      id: id
    }
  })

  return userInfo // 返回数据
}

// 通过name查找用户
const getUserByName = async function (name) {
  const userInfo = await User.findOne({
    where: {
      user_name: name
    }
  })

  return userInfo
}

module.exports = {
  getUserById, // 导出getUserById的方法，将会在controller里调用
  getUserByName
}
