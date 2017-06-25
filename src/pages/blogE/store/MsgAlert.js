import Vue from 'vue'
export default function (message) {
	// Todo-vue:$message调用方式不明
  Vue.prototype.$message({
      message,
      type:'error',
      showClose: true
  })
}
