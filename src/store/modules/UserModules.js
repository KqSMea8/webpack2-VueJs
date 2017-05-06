/**
 * Created by LinChuQiang.
 */
export default {
  state: {
    password: ''
  },
  mutations: {
		// 当触发一个类型为 showPassword 的 mutation 时，调用此函数。
    showPassword: state => alert(state.password)
  }
};
