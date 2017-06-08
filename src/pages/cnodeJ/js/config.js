const articleTypeMap = {
	top  : '置顶',
	good : '精华',
	ask  : '问答',
	share: '分享',
	job  : '招聘'
}
const articleCategory = {
	ask  : '问答',
	share: '分享',
	job  : '招聘'
}
const http = 'https://cnodejs.org/api/v1/'
const API = {
	// 获取主题
	topics     : `${http}topics`,
	// 编辑主题
	topicUpdate: `${http}topics/update`,
	// 验证 accessToken 的正确性
	interface  : http,
	// 获取未读消息数
	messageCount  : `${http}message/count`,
	// 获取所有的通知（未读 & 已读）
	messages      : `${http}messages`,
	// 批量处理
	messageMarkAll: `${http}message/mark_all`,
	// 主题详情
	topic      : `${http}topic/`,
	// 用户详情
	getUserById : `${http}user/`,
	// 用户所收藏的主题
	topicCollect: `${http}topic_collect/`,
	// 收藏主题
	collect     : `${http}topic_collect/collect`,
	// 取消主题
	deCollect   : `${http}topic_collect/de_collect`,
	// 为评论点赞
	replyUps      : `${http}reply/`

}
export { API, articleTypeMap, articleCategory }
