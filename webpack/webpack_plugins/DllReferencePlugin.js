/**
 * Created by LinChuQiang.
 */


var option = require('../option')
var webpack = require('webpack')
var path = require('path')

const TARGET = process.env.npm_lifecycle_event

if (TARGET === 'dev') {
  console.log(TARGET,`: DllReferencePlugin正在为静态资源单独打包！`)
  //dllPlugin的静态资源单独打包
  var jsLib = [
    new webpack.DllReferencePlugin({
      manifest: require(path.resolve(process.cwd(), option.dev.dll.directory, option.dev.dll.jqueryManifest))
    }),
    new webpack.DllReferencePlugin({
      manifest: require(path.resolve(process.cwd(), option.dev.dll.directory, option.dev.dll.manifest0))
    }),
    new webpack.DllReferencePlugin({
      manifest: require(path.resolve(process.cwd(), option.dev.dll.directory, option.dev.dll.manifest1))
    }),
    new webpack.DllReferencePlugin({
      manifest: require(path.resolve(process.cwd(), option.dev.dll.directory, option.dev.dll.manifest2))
    })
  ]
  module.exports = jsLib
}

if (TARGET === 'build') {
  console.log(TARGET,`: DllReferencePlugin正在为静态资源单独打包！`)
  //dllPlugin的静态资源单独打包
  var jsLib = [
    new webpack.DllReferencePlugin({
      //'src/commonDll/production/vue-manifest.json',
      manifest: require(path.resolve(process.cwd(), option.build.dll.directory, option.build.dll.jqueryManifest))
    }),
    new webpack.DllReferencePlugin({
      manifest: require(path.resolve(process.cwd(), option.build.dll.directory, option.build.dll.manifest0))
    }),
    new webpack.DllReferencePlugin({
      manifest: require(path.resolve(process.cwd(), option.build.dll.directory, option.build.dll.manifest1))
    }),
    new webpack.DllReferencePlugin({
      manifest: require(path.resolve(process.cwd(), option.build.dll.directory, option.build.dll.manifest2))
    })
  ]
  module.exports = jsLib
}

if (TARGET === 'test') {
  console.log(`Running the test task!`)
}