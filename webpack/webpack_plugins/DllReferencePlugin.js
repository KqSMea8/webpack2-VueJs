/**
 * Created by LinChuQiang.
 */

var option = require('../option')
var webpack = require('webpack')
var path = require('path')

const TARGET = process.env.npm_lifecycle_event
var jsLib
if (TARGET === 'dev') {
  console.log(`${TARGET}: DllReferencePlugin正在为静态资源单独打包！`)
  const DIR = option.build.dll.directory
  jsLib = [
    /*new webpack.DllReferencePlugin({
      manifest: require(path.resolve(DIR, option.build.dll.jqueryManifest))
    }),
    new webpack.DllReferencePlugin({
      //context: process.cwd(),
      // manifest: require('/commonDll/production/bootstrap_dll-manifest.json'),
      manifest: require(path.resolve(DIR, option.build.dll.bootstrapManifest)),
      name:'bootstrap_dll'
    }),*/
    new webpack.DllReferencePlugin({
      // context: process.cwd(),
      // manifest: require('/commonDll/production/vue_dll-manifest.json'),
      manifest: require(path.resolve(DIR, option.build.dll.vueManifest)),
      name:'vue_dll'
    })
  ]
  module.exports = jsLib
}

if (TARGET === 'build') {
  console.log(`${TARGET}: DllReferencePlugin正在为静态资源单独打包！`)
  const DIR = option.build.dll.directory
  jsLib = [
    new webpack.DllReferencePlugin({
      manifest: require(path.resolve(DIR, option.build.dll.jqueryManifest))
    }),
    new webpack.DllReferencePlugin({
      manifest: require(path.resolve(DIR, option.build.dll.bootstrapManifest))
    }),
    new webpack.DllReferencePlugin({
      manifest: require(path.resolve(DIR, option.build.dll.vueManifest))
    })
  ]
  module.exports = jsLib
}

if (TARGET === 'test') {
  console.log(`${TARGET}: DllReferencePlugin正在为静态资源单独打包！`)
}
