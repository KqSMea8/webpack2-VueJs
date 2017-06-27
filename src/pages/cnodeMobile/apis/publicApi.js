import fetchApi from './index'

// Todo-server:cnodeAPI详细解释

/* 主题 */

// get /topics 主题首页
// 接收 get 参数
// page Number 页数
// tab String 主题分类。目前有 ask share job good
// limit Number 每一页的主题数量
// mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。
export const topicList = (data) => {
  return fetchApi({
    url: '/v1/topics',
    body: data
  })
}

// get /topic/:id 主题详情
// 接收 get 参数
// mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。
// accesstoken String 当需要知道一个主题是否被特定用户收藏以及对应评论是否被特定用户点赞时，才需要带此参数。会影响返回值中的 is_collect 以及 replies 列表中的 is_uped 值。
export const topicInfo = (id) => {
  return fetchApi({
    url: '/v1/topic/' + id
  })
}

// post /topics 新建主题
// accesstoken String 用户的 accessToken
// title String 标题
// tab String 目前有 ask share job dev。开发新客户端的同学，请务必将你们的测试帖发在 dev 专区，以免污染日常的版面，否则会进行封号一周处理。
// content String 主体内容
export const addTopic = (data) => {
	return fetchApi({
		url: `v1/topics`,
		method: 'post',
		body: data
	})
}

/* 消息通知 */

// get /message/count 获取未读消息数
// 接收 get 参数
// accesstoken String
export const messageCount = (data) => {
  return fetchApi({
    url: `v1/message/count`,
    body: data
  })
}

// get /messages 获取已读和未读消息
// 接收 get 参数
// accesstoken String
// mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。
export const messages = (data) => {
  return fetchApi({
    url: `v1/messages`,
    body: data
  })
}

/* 评论 */

// post /reply/:reply_id/ups 为评论点赞
// 接受 post 参数
// accesstoken String
// 接口会自动判断用户是否已点赞，如果否，则点赞；如果是，则取消点赞。点赞的动作反应在返回数据的 action 字段中，up or down。
// 返回值示例
// {"success": true, "action": "down"}
export const upReply = (data, id) => {
  return fetchApi({
    url: `v1/reply/${id}/ups`,
    method: 'post',
    body: data
  })
}

// post /topic/:topic_id/replies 新建评论
// accesstoken String 用户的 accessToken
// content String 评论的主体
// reply_id String 如果这个评论是对另一个评论的回复，请务必带上此字段。这样前端就可以构建出评论线索图。
export const reply = (data, id) => {
	return fetchApi({
		url: `v1/topic/${id}/replies`,
		method: 'post',
		body: data
	})
}

/* 用户 */

// get /user/:loginname 用户详情
export const getUserInfo = (loginname) => {
  return fetchApi({
    url: `v1/user/${loginname}`
  })
}
// post /accesstoken 验证 accessToken 的正确性
export const login = (data) => {
	console.log(`action login:`, data)
	return fetchApi({
		url: 'v1/accesstoken',
		method: 'post',
		body: data
	})
}
