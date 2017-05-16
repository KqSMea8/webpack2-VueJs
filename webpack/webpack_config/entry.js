/**
 * Created by LinChuQiang.
 */

const path = require('path')

/** ********
 初始环境
 **********/

const baseEntry = {}
// 单页面SPA应用
// app: ['webpack-hot-middleware/client?noInfo=true&reload=true','./src/main.js')]
// baseEntry.app = './src/main.js'

module.exports.base = baseEntry

/** ********
 开发环境
 **********/

const devEntry = {}
// entry节点对象的Key是别名，是与output中filename属性[name]关联的，因此想要生成什么样的路径，应该在entry的key中配置
devEntry['index'] = './src/index.js'
devEntry['pages/data'] = path.resolve(process.cwd(), 'src/pages/data/app.js')
// devEntry['pages/main'] = path.resolve(process.cwd(), 'src/pages/main/app.js')

// add hot-reload related code to entry chunks
Object.keys(devEntry).forEach(function (name) {
  //  app : ["./webpack/dev-client", "./src/main.js"]
  devEntry[name] = ['./webpack/dev-client'].concat(devEntry[name])
})
console.log(devEntry)
/* { 'pages/data': 'E:\\wamp64\\www\\VueJs_Demo_Github\\src\\pages\\data\\app' } */
module.exports.dev = devEntry

/** ********
 生产环境
 **********/

module.exports.build = {}

/** ********
 DLL环境
 **********/

const dllEntry = {
  jquery: ['jquery'],
  vue: ['vue', 'vue-resource', 'vue-router', 'vuex'],
  bootstrap: ['./src/js/vendor/bootstrap/dist/css/bootstrap.min.css', './src/js/vendor/bootstrap/dist/js/bootstrap.min.js']
}
module.exports.dll = dllEntry
