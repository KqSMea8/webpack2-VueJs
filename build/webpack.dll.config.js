/**
 * Created by LinChuQiang.
 */

const path = require('path');
const webpack = require('webpack');
const lib = require('../config/lib.dependencies');
const isDev = process.env.NODE_ENV === 'development';
const outputPath = isDev ? path.join(__dirname, '../commonDll/development') : path.join(__dirname, '../commonDll/production');

/*
* 1.dll预编译出来的模块可以作为静态资源链接库可被重复使用
* 2.dll资源能有效地解决资源循环依赖的问题
* 3.由于externals的配置项需要对每个依赖库进行逐个定制，所以每次增加一个组件都需要手动修改，略微繁琐，而通过dllPlugin则能完全通过配置读取，减少维护的成本
* 4.配置dllPlugin对应资源表并编译文件
* 5. Dynamically Linked Library https://robertknight.github.io/posts/webpack-dll-plugins/
* */

const plugin = [
  new webpack.DllPlugin({
    /**
     * path
     * 定义 manifest 文件生成的位置
     * [name]的部分由entry的名字替换
     * The path to the manifest file which maps between modules included in a bundle and the internal IDs within that bundle
     */
    path: path.join(outputPath, '[name]-manifest.json'),
    /**
     * name
     * dll bundle 输出到那个全局变量上
     * 必须和 output.library 一样的值。
     */
    name: '[name]_library'
    //context: __dirname
  })
];

if (isDev) {
  plugin.push(
    new webpack.DefinePlugin({
      //'process.env.NODE_ENV': JSON.stringify("production")
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        except: ['$', 'exports', 'require']
      },
      exclude: /\.min\.js$/,
      //mangle:true,
      compress: {warnings: false},
      output: {comments: false}
    })
  )
}

module.exports = {
  devtool: '#source-map',
  entry: lib,
  output: {
    filename: '[name].dllBundle.js',
    path: outputPath,
    /*
     * output.library
     * [name]_[hash]将会定义为 window.moment_1ab8e7beaa7091def553
     * The name of the global variable which the library's require() function will be assigned to
     */
    library: '[name]_library'
  },
  plugins: plugin
};