/**
 * Created by LinChuQiang.
 */
export default{
  // Vue.js 的插件应当有一个公开方法 install
  // 第一个参数是 Vue 构造器 , 第二个参数是一个可选的选项对象
  install (Vue, options) {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
      // 逻辑...
    }
    // 2. 添加全局资源
    // 注册一个全局自定义指令 v-focus
    Vue.directive('focus', {
      // 被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）。
      inserted: function (el) {
        // 聚焦元素
        el.focus()
      }
    })
    // 注册一个全局自定义指令 v-uname
    Vue.directive('uname', {
      // 只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作。
      // el: 指令所绑定的元素，可以用来直接操作 DOM
      // binding: 一个对象，包含指令名、指令的绑定值等属性
      // vnode: Vue 编译生成的虚拟节点
      bind: function (el, binding, vnode) {
        let s = JSON.stringify
        let str = ''
        str =
          'name: ' + s(binding.name) +
          '\n value: ' + s(binding.value) +
          '\n expression: ' + s(binding.expression) +
          '\n argument: ' + s(binding.arg) +
          '\n modifiers: ' + s(binding.modifiers) +
          '\n vnode keys: ' + Object.keys(vnode).join(', ')

        console.log(str)
        // 使用基础 Vue 构造器，创建一个“子类”。
        let errorTpl = Vue.extend({
          template: '<label class="label label-danger">用户不合法</label>'
        })
        // Vue 实例在实例化时没有收到 el 选项，则它处于“未挂载”状态，没有关联的 DOM 元素。
        // 返回值： vm - 实例自身
        let component = new errorTpl().$mount()
        // 一个HTMLElement元素
        Vue.errorLabel = component.$el
      },
      // 被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新。
      update (el, binding, vnode) {
        console.log(el)
        console.dir(binding)
        console.dir(vnode)
        if (/\w{6,10}/.test(el.value)) {
          // 验证通过
          if (Vue.hasError) {
            el.parentNode.removeChild(Vue.errorLabel)
            Vue.hasError = !Vue.hasError
          }
        } else {
          // 验证没有通过
          if (!Vue.hasError) {
            el.parentNode.appendChild(Vue.errorLabel)
            Vue.hasError = !Vue.hasError
          }
        }
      }
    })
    // 3. 全局注册混合对象。 注意使用！ 一旦使用全局混合对象，将会影响到 所有 之后创建的 Vue 实例。使用恰当时，可以为自定义对象注入处理逻辑。
    Vue.mixin({
      created: function () {
        // 逻辑...
      }
    })
    // 4. 添加实例方法
    // Vue.prototype.$myName = "zhagngsan";
    // errorLabel错误提示模板
    Vue.prototype.errorLabel = null
    // hasError 是辅助属性，方便我们用来判断当前是有错误还是没有错误。
    Vue.prototype.hasError = false
    Vue.prototype.checkUserName = (value) => {
      if (value == '') {
        return true // 如果没有填写,默认为true
      }
      if (/\w{6,20}/.test(value)) {
        return true
      }
      return false
    }
    // 5. 全局注册validate-text组件
    Vue.component('validate-text', {
      template: `
				<div>
					<input type="text" class="form-control" :placeholder = "childchildPlaceholder" :username = "username" @input = "username=$event.target.value" @change = "userNameChg" v-focus/>
					<label v-if="showErrorLabel" class="label label-danger">用户名不合法</label>
				</div>
			`,
      props: ['childchildPlaceholder'],
      data () {
        return {
          username: ''
        }
      },
      // 计算属性
      computed: {
        showErrorLabel () {
          if (/\w{6,20}/.test(this.username) || this.username == '') {
            // 验证通过,不提示错误
            return false
          }
          return true
        }
      },
      methods: {
        // 文本框change事件调用validate-text组件的方法userNameChange
        userNameChg () {
          // 触发本组件注册的childvalueChg()事件，实际上是在调用父组件user-name的方法userNameChg()
          this.$emit('childvalueChg', 'username', this.username)
        }
      }
    })
  }
}
