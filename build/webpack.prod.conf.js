var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')




//插件列表
var globalVar=require('./webpack_plugins/DefinePlugin')
var html=require('./webpack_plugins/HtmlWebpackPlugin')
var htmlAsset=require('./webpack_plugins/AddAssetHtmlPlugin')

var cssExtract=require('./webpack_plugins/ExtractTextPlugin')
var compressCss=require('./webpack_plugins/OptimizeCssAssetsPlugin')

var jsCommon=require('./webpack_plugins/CommonsChunkPlugin')
var jsLib=require('./webpack_plugins/DllReferencePlugin')
var compressJs=require('./webpack_plugins/UglifyJsPlugin')

var copy=require('./webpack_plugins/CopyWebpackPlugin')

var assets=require('./webpack_plugins/AssetsPlugin')

//多线程处理插件
var happyPack=require('./webpack_plugins/HappyPackPlugin')

baseWebpackConfig.plugins.concat(happyPack)

var webpackConfig = merge(baseWebpackConfig, {
  //1.选择source-map
  devtool: config.build.productionSourceMap ? '#cheap-source-map' : false,
  //2.打包目录
  output : {
    //2.1本地PHP+APACHE+SQL服务器文件夹
    path         : config.build.assetsRoot,
    filename     : utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
  //3.模块
  module : {
    //3.1解析文件夹内的各种css格式
    rules: utils.styleLoaders({
      //默认：true
      sourceMap: config.build.productionSourceMap,
      //是否分离css
      extract  : true
    })
  },
  //4.插件
  plugins: []
})

//注意顺序
webpackConfig.plugins.push(globalVar)

// 数组中添加第二个数组中的元素
// Equivalent to vegetables.push('celery', 'beetroot');
// Array.prototype.push.apply(vegetables, moreVegs);
Array.prototype.push.apply(webpackConfig.plugins,jsCommon)
Array.prototype.push.apply(webpackConfig.plugins,jsLib)
Array.prototype.push.apply(webpackConfig.plugins,happyPack)

webpackConfig.plugins.push(html)
webpackConfig.plugins.push(cssExtract,compressCss)
webpackConfig.plugins.push(compressJs)
webpackConfig.plugins.push(htmlAsset)
webpackConfig.plugins.push(copy,assets)


//Default：false
if (config.build.productionGzip) {
  var GzipCompress=require('./webpack_plugins/CompressionWebpackPlugin')
  webpackConfig.plugins.push(GzipCompress)
}

//使用 webpack-bundle-analyzer 来分析 Webpack 生成的包体组成并且以可视化的方式反馈给开发者
if (config.build.bundleAnalyzerReport) {
  var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

if (config.build.Visualizer) {
  //https://github.com/chrisbateman/webpack-visualizer#plugin-usage
  var Visualizer = require('webpack-visualizer-plugin')
  webpackConfig.plugins.push(new Visualizer({
    //在E:\wamp64\www\Webpack2Vue_Demo 目录下生成
    filename: path.posix.join('Visualizer.html')
  }))
}

module.exports = webpackConfig
