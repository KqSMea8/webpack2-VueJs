/**
 * Created by LinChuQiang.
 */

var path = require('path')
var webpack = require('webpack')

const TARGET = process.env.npm_lifecycle_event

if (TARGET === 'dev') {
  console.log(TARGET,`: CommonsChunkPlugin正在提取公共JS文件！`)
  var jsCommon = [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commonjs',
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
            module.resource &&
            /\.js$/.test(module.resource) &&
            module.resource.indexOf(
                //连接路径
                //path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')
                // 返回: '/foo/bar/baz/asdf'
                path.join(__dirname, '../node_modules')
            ) === 0
        )
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name  : 'manifest',

    })
  ]
  module.exports = jsCommon
}

if (TARGET === 'build') {
  console.log(TARGET,`: CommonsChunkPlugin正在提取公共JS文件！`)
  //4.6 提取公共模块
  //更多优化请见：https://doc.webpack-china.org/guides/caching/
  //建立一个独立文件(又称作 chunk)的功能，这个文件包括多个入口 chunk 的公共模块。通过将公共模块拆出来，最终合成的文件能够在最开始的时候加载一次，便存起来到缓存中供后续使用。这个带来速度上的提升，因为浏览器会迅速将公共的代码从缓存中取出来，而不是每次访问一个新页面时，再去加载一个更大的文件。
  var jsCommon = [
    //将entry下所有 node_modules 中的模块公共部分提取到一个通用的chunk vendor 中
    //参考：https://segmentfault.com/a/1190000007891318?utm_source=tuicool&utm_medium=referral
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commonjs',
      // 如果没有设置filename选项，那么由output.chunkFilename决定公共文件的放置路径和名称
      //filename : 'static/js/vendor-chunk.js',
      
      // 如果模块是一个路径，而且在路径中有 ".js" 这个结尾文件出现，
      // 并且是node_modules目录下的文件，那请将它拆分到
      // 另一个分开的 chunk 中，chunk 的 keyname 是 "vendor"，而文件名是 "vendor-chunk.js"
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            //连接路径
            //path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')
            // 返回: '/foo/bar/baz/asdf'
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name  : 'manifest',
      // 最终生成文件的路径是根据webpack配置中的ouput.path和CommonsChunkPlugin的filename参数来拼的
      //filename: '[name].bundle.js',
      //表示需要在哪些chunk（也可以理解为webpack配置中entry的每一项）里寻找公共代码进行打包。不设置此参数则默认提取范围为所有的chunk。
      //chunks: ['vendor']
    })
  ]
  module.exports = jsCommon
}

if (TARGET === 'test') {
  console.log(`Running the test task!`)
}