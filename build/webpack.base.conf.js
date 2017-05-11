var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

//环境变量 https://doc.webpack-china.org/guides/production-build/
const isProduction = process.env.NODE_ENV === 'production'

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry  : {
    //app: ['webpack-hot-middleware/client?noInfo=true&reload=true','./src/main.js')]
    app: './src/main.js'
  },
  output : {
    //path.normalize('E:\\wamp64\\www\\TestWeb')
    path      : config.build.assetsRoot,
    //filename: '[name].[chunkhash].js'
    filename  : '[name].js',
    publicPath: isProduction ? config.build.assetsPublicPath : config.dev.assetsPublicPath
  },
  //配置模块如何解析
  resolve: {
    //自动解析确定的扩展
    extensions: ['.js', '.vue', '.json', '.css'],
    //alias优先从resolve.modules中的node_modules下寻找
    alias     : {
      'vue$': 'vue/dist/vue.esm.js',
      'vuex$': 'vuex/dist/vuex.esm.js',
      '@'   : resolve('src')
    }
  },
  module : {
    rules: [
      {
        test: /\.vue$/,
        //loader  : 'vue-loader',
        use : [{loader: 'vue-loader', options: vueLoaderConfig}]
        /*loader  : 'happypack/loader?id=happypackVueJs',
         options : vueLoaderConfig*/
      },
      {
        test   : /\.js$/,
        include: [
          // 只去解析运行目录下的 src 和 demo 文件夹
          path.join(process.cwd(), './src')
          //resolve( 'src' )
          //path.join(process.cwd(), './demo')
        ],
        exclude: function (path) {
          // 路径中含有 node_modules 的就不去解析。
          var isNpmModule = !!path.match(/node_modules/)
          return isNpmModule
        },
        //loader  : 'babel-loader'
        loader : 'happypack/loader?id=happypackBabelJs'
      },
      //处理资源名称
      {
        test   : /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader : 'url-loader',
        options: {
          //大小小于 10kb
          limit: 10000,
          name : utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test   : /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader : 'url-loader',
        options: {
          limit: 10000,
          name : utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: []
}
