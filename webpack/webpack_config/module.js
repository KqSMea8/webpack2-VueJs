/**
 * Created by LinChuQiang.
 */
const option = require('../option')
const utils = require('../utils')
const path = require('path')

const vueLoaderConfig = require('../vue-loader.conf')

/** ********
 初始环境
 **********/

const baseRules = [
  // 将指定js模块export的变量声明为全局变量
  // 有了ProvidePlugin为嘛还需要expose-loader？问得好，如果你所有的jQuery插件都是用webpack来加载的话，的确用ProvidePlugin就足够了；但总有那么些需求是只能用<script>来加载的。
  {
    // 此loader配置项的目标是NPM中的jquery
    // 使用内部的 require() 机制来查找模块的位置，但不会加载模块，只返回解析后的文件名。
    test: require.resolve('jquery'),
    // 先把jQuery对象声明成为全局变量`jQuery`，再通过管道进一步又声明成为全局变量`$`
    use: 'expose-loader?$!expose-loader?jQuery'
  },
  {
    test: /\.vue$/,
    use: [{ loader: 'vue-loader', options: vueLoaderConfig }]
    // loader  : 'vue-loader',
    /* loader  : 'happypack/loader?id=happypackVueJs',
     options : vueLoaderConfig */
  },
  {
    test: /\.js$/,
    include: [
      // 只去解析运行目录下的 src 和 demo 文件夹
      path.join(process.cwd(), './src')
      // resolve( 'src' )
      // path.join(process.cwd(), './demo')
    ],
    exclude: function (paths) {
      // 路径中含有 node_modules 的就不去解析。
      var isNpmModule = !!paths.match(/node_modules/)
      return isNpmModule
    },
    // loader  : 'babel-loader'
    use: [{
      loader: 'happypack/loader?id=happypackBabelJs'
    }]
    // loader: 'happypack/loader?id=happypackBabelJs'
  },
  // 处理资源名称
  {
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    use: [{
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
      }
    }]
    /* loader: 'url-loader',
    options: {
      // 大小小于 10kb
      limit: 10000,
      name: utils.assetsPath('img/[name].[hash:7].[ext]')
    } */
  },
  {
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    use: [{
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
      }
    }]
    /* loader: 'url-loader',
    options: {
      limit: 10000,
      name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
    } */
  },
  /* {
    test: /\.html$/,
    include: [path.join(process.cwd(), './src')],
    use: [ {
      loader: 'html-loader',
      options: {
        minimize: false
      }
    }]
  }, */
  // https://github.com/okonet/ejs-loader
  {
    test: /\.ejs$/,
    use: [{ loader: 'ejs-loader' }]
  }

]
module.exports.base = baseRules

/** ********
 开发环境
 **********/

const devRules = utils.styleLoaders({ sourceMap: option.dev.cssSourceMap })
module.exports.dev = devRules

/** ********
 生产环境
 **********/

const buildRules = utils.styleLoaders({
  // 默认：true
  sourceMap: option.build.productionSourceMap,
  // 是否分离css
  extract: true
})
module.exports.build = buildRules

/** ********
 DLL环境
 **********/

const dllRules = utils.styleLoaders({
  sourceMap: false,
  extract: true
})

module.exports.dll = dllRules
