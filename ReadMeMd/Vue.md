#### 1.require.ensure

```JS
// 同步加载：var moment = require('moment'); console.log(moment().format());
// 按需加载（异步）模块，加载中生成异步文件，其路径是与index.tml同目录的
// 给require.ensure传递第三个参数，可以在output.chunkFilename中的[name]接收
// moment.js会被打包成一个单独的chunk文件，未被列在entry中，却又需要被打包出来的文件命名配置。
// []不为空 预加载懒执行
// webpack解惑：require的五种用法
// http://www.cnblogs.com/laneyfu/p/6158715.html

// require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
// see https://webpack.js.org/guides/code-splitting-async/#require-ensure-

function determineDate () {
  require.ensure([], function (require) {
    var moment = require('moment/moment.js')
    console.log(moment().format())
  }, 'moment')
}

// vue 异步组件 
// 工厂函数接收一个 resolve 回调
// see https://cn.vuejs.org/v2/guide/components.html#异步组件

Vue.component('async-example', function (resolve, reject) {
  setTimeout(function () {
    // Pass the component definition to the resolve callback
    resolve({
      template: '<div>I am async!</div>'
    })
  }, 1000)
})

// 路由懒加载
// see https://router.vuejs.org/zh-cn/advanced/lazy-loading.html

const Foo = resolve => {
  // require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
  // （代码分块）
  require.ensure(['./Foo.vue'], () => {
    resolve(require('./Foo.vue'))
  })
}

```


#### 2.vm.$emit
* vm.$emit( event, […args] )触发当前实例上的事件，附加参数都会传给监听器回调。
* this.$emit('searchshow')，触发组件参数中注册的事件

#### 3.v-if、v-show 的区别
- v-if 是“真正的”条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
- v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
- 相比之下， v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
- 一般来说， v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。
- 因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件不太可能改变，则使用 v-if 较好。