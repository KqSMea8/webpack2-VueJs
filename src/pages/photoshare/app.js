import Vue from 'vue'
import router from './router/router'
import store from './store/store'

require('./static/css/icon/iconfont.css')

// 开启debug模式
Vue.config.debug = true
window.log = console.log

Vue.prototype.post = function (url, params, fn) {
	var xhr = new XMLHttpRequest()
	xhr.open('POST', url, true)
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
	xhr.onreadystatechange = function () {
		var XMLHttpReq = xhr
		if (XMLHttpReq.readyState == 4) {
			if (XMLHttpReq.status == 200) {
				var text = XMLHttpReq.responseText
				var res = JSON.parse(text)
				fn(res)
			}
		}
	}
	xhr.send(params)
}

// 创建一个app实例，并且挂载到选择符#app匹配的元素上
new Vue({
	router,
	store
}).$mount('#app')
