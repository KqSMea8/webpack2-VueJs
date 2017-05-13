/**
 * Created by LinChuQiang.
 */

var webpack = require('webpack')
const os = require('os');
const UglifyJsParallelPlugin = require('webpack-parallel-uglify-plugin');
const TARGET = process.env.npm_lifecycle_event


if (TARGET === 'dev') {
  console.log(`Running the pretest task!`)
}

if (TARGET === 'build') {
  console.log(`UglifyJsParallelPlugin正在压缩JS文件！`)
  //4.2 压缩JS
  /*var compressJs = new webpack.optimize.UglifyJsPlugin({
    compress : {
      warnings: false
    },
    sourceMap: true
  })*/
  var compressJs = new UglifyJsParallelPlugin({
    cacheDir: '.UglifyJsCache/',
    uglifyJS:{
      output: {
        comments: false
      },
      compress: {
        warnings: false
      }
    }
  })
  module.exports = compressJs
}

if (TARGET === 'test') {
  console.log(`Running the test task!`)
}