/**
 * Created by LinChuQiang.
 */


var config = require('../../config')
var webpack = require('webpack')
var path = require('path')

const TARGET = process.env.npm_lifecycle_event

if (TARGET === 'dev') {
  console.log(`Running the pretest task!`)
}

if (TARGET === 'build') {
  console.log(`DllReferencePlugin正在为静态资源单独打包！`)
  //dllPlugin的静态资源单独打包
  var jsLib = [
    new webpack.DllReferencePlugin({
      //'src/commonDll/production/vue-manifest.json',
      manifest: require(path.resolve(process.cwd(), config.build.dll.dllSourceDir, config.build.dll.manifest1))
    }),
    new webpack.DllReferencePlugin({
      manifest: require(path.resolve(process.cwd(), config.build.dll.dllSourceDir, config.build.dll.manifest2))
    })]
  module.exports = jsLib
}

if (TARGET === 'test') {
  console.log(`Running the test task!`)
}