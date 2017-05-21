/**
 * Created by LinChuQiang.
 */

var utils = require('../utils')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path')
const TARGET = process.env.npm_lifecycle_event

// 4.3 分离CSS
/*
 https://www.npmjs.com/package/extract-text-webpack-plugin
 It moves all the require("style.css")s in entry chunks into a separate single CSS file. So your styles are no longer inlined into the JS bundle, but separate in a CSS bundle file (styles.css).
 */

if (TARGET === 'dev') {
  console.log(`${TARGET}: ExtractTextPlugin正在分离CSS文件！`)

  var cssExtract = new ExtractTextPlugin({
    // href="/static/css/app.css"
    // [name]对应的是各个entry的key
    filename: utils.assetsPath('css/[name].css')
  })
  module.exports = cssExtract
}

if (TARGET === 'build') {
  console.log(`${TARGET}: ExtractTextPlugin正在分离CSS文件！`)
  const extractVueCSS = new ExtractTextPlugin({
    filename: utils.assetsPath('css/[name].vue.css'),
    allChunks: true
  });
  const extractStyleCSS = new ExtractTextPlugin({
    filename:path.posix.join('static', 'css/[name].style.css')
  });
  var cssExtract = [
    extractVueCSS,
    extractStyleCSS
  ]
  module.exports = cssExtract
}

if (TARGET === 'test') {
  console.log(`${TARGET}: ExtractTextPlugin正在分离CSS文件！`)
}
