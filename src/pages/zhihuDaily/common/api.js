const host = 'https://bird.ioliu.cn/v1/?url=http://news-at.zhihu.com'
const apiUrl = host + '/api'
const apiVersion = 4
const proxy = require('./proxy.json')

let config = {
	startImage: '/prefetch-launch-images/1080*1920', // 启动界面图像获取
	news      : {
		before : '/news/before/', // 过往消息
		latest : '/news/latest', // 最新消息
		content: '/news' 	// 消息内容获取与离线下载
	},
	themes    : {
		list   : '/themes', // 主题日报列表查看
		content: '/theme' // 主题日报内容查看
	}
}
// 给config中的API添加以下前缀
// http://news-at.zhihu.com/api/4
function addPrestr (data, prestr) {
	for (let key in data) {
		if (typeof data[key] === 'object') {
			addPrestr(data[key], prestr)
		} else {
			// console.log(data[key], prestr)
			if (key === 'startImage') {
				data[key] = apiUrl + '/7' + data[key]
			} else {
				data[key] = prestr + data[key]
			}
		}
	}
}
// 递归复制config对象
function deepCopy (target, source) {
	for (let key in source) {
		if (typeof source[key] === 'object') {
			target[key] = {}
			deepCopy(target[key], source[key])
		} else {
			target[key] = source[key]
		}
	}
}
// 导出数据接口
export const getApi = () => {
	let _config = {}
	deepCopy(_config, config)
	addPrestr(_config, apiUrl + '/' + apiVersion)
	// This var is enable api proxy , see more https://github.com/moonou/api-proxy-server
	// const proxyEnable = true
	// proxyEnable ? addPrestr(_config, proxy.host) : ''
	return _config
}
// 导出代理接口
export const proxyserver = proxy.host

