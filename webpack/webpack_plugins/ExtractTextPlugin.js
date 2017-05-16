/**
 * Created by LinChuQiang.
 */

var utils = require('../utils')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

const TARGET = process.env.npm_lifecycle_event

if (TARGET === 'dev') {
  console.log(`dev：ExtractTextPlugin正在分离CSS文件！`)
  var cssExtract = new ExtractTextPlugin({
    // href="/static/css/app.css"
    // [name]对应的是各个entry的key
    filename: utils.assetsPath('css/[name].css')
  })
  module.exports = cssExtract
}

if (TARGET === 'build') {
  console.log(`build：ExtractTextPlugin正在分离CSS文件！`)
  // 4.3 分离CSS
  // https://www.npmjs.com/package/extract-text-webpack-plugin
  // It moves all the require("style.css")s in entry chunks into a separate single CSS file. So your styles are no longer inlined into the JS bundle, but separate in a CSS bundle file (styles.css).
  var cssExtract = new ExtractTextPlugin({
    filename: utils.assetsPath('css/[name].[contenthash].css')
  })
  module.exports = cssExtract
}

if (TARGET === 'test') {
  console.log(`Running the test task!`)
}
