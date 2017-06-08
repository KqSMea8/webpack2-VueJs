import Message from './message'

export default {
  install (Vue, options) {
    Vue.prototype.$message = Message
  }
}
