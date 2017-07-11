const articleTypeMap = {
	top  : '置顶',
	good : '精华',
	ask  : '问答',
	share: '分享',
	job  : '招聘',
	dev  : '测试'
}
const articleCategory = {
	ask  : '问答',
	share: '分享',
	job  : '招聘',
	dev  : '测试'
}
const http = 'https://cnodejs.org/api/v1/'
const API = {
	// --主题--
	// get /topics 主题列表 || post /topics 新建主题
	topics     : `${http}topics`,
	// post /topics/update 编辑主题
	topicUpdate: `${http}topics/update`,
	// get /topic/:id 主题详情
	topic      : `${http}topic/`,
	
	// --用户--
	// post /accesstoken 验证 accessToken 的正确性
	interface  : http,
	// get /user/:loginname 用户详情
	getUserById : `${http}user/`,

	// --评论--
	// post /reply/:reply_id/ups 为评论点赞
	replyUps      : `${http}reply/`,
	// post /topic/:topic_id/replies 新建评论-未开发
	addReply: `${http}topic/`,

	// --消息通知--
	// get /message/count 获取未读消息数
	messageCount  : `${http}message/count`,
	// get /messages 获取所有的通知（未读 & 已读）
	messages      : `${http}messages`,
	// post /message/mark_all 标记全部已读
	messageMarkAll: `${http}message/mark_all`,
	// post /message/mark_one/:msg_id 标记单个消息为已读-未开发
	messageMarkOne: `${http}message/mark_one`,

	// --收藏--
	// post /topic_collect/collect 收藏主题
	collect     : `${http}topic_collect/collect`,
	// post /topic_collect/de_collect 取消主题
	deCollect   : `${http}topic_collect/de_collect`,
	// get /topic_collect/:loginname 用户所收藏的主题
	topicCollect: `${http}topic_collect/`
}
export { API, articleTypeMap, articleCategory }
