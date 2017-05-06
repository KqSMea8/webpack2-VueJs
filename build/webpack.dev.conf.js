var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

var cssExtract=require('./webpack_plugins/ExtractTextPlugin')
//多线程处理插件
var happyPack=require('./webpack_plugins/HappyPackPlugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  //  app : './src/main.js'
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

var webpackConfig = merge(baseWebpackConfig, {
  module : {
    /*
     [{
     test : /\.css$/,
     use  : [
     {loader  : 'vue-style-loader',},
     {loader  : 'css-loader',
     options : {
     minimize  : process.env.NODE_ENV === 'production',
     sourceMap : options.sourceMap
     }
     }
     ]
     }]
     * */
    rules: utils.styleLoaders({sourceMap: config.dev.cssSourceMap})
  },
  
  // cheap-module-eval-source-map is faster for development
  devtool: 'inline-source-map',
  plugins: [
    //1.创建一个在编译时可以配置的全局常量
    new webpack.DefinePlugin({
      //NODE_ENV: '"development"'
      //'process.env': config.dev.env
    }),
    //2.生成一个HTML文件
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      //filename: The file to write the HTML to. Defaults to index.html. You can specify a subdirectory here too (eg: assets/admin.html).
      //渲染输出html文件名,路径相对于 output.path 的值
      filename: 'index.html',
      //template: Webpack require path to the template. Please see the docs for details.
      //渲染源，模版文件
      template: 'index.html',
      //true: 自动写入依赖文件; false: 不写入依赖，构建多页面非常有用
      inject  : true
    }),
    //3.自动实时刷新页面
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    // hot module replacement is somewhat self-explanatory
    new webpack.HotModuleReplacementPlugin(),
    // no errors is used to handle errors more cleanly
    new webpack.NoEmitOnErrorsPlugin(),
    //4.优化错误提示
    new FriendlyErrorsPlugin()
  ]
})
webpackConfig.plugins.push(cssExtract)
Array.prototype.push.apply(webpackConfig.plugins,happyPack)

module.exports = webpackConfig