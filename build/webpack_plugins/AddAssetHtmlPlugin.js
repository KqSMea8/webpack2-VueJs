/**
 * Created by LinChuQiang.
 */
/**
 * Created by LinChuQiang.
 */

var config = require('../../config')
var path = require('path')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

const TARGET = process.env.npm_lifecycle_event

if (TARGET === 'dev') {
  console.log(`Running the pretest task!`)
}

if (TARGET === 'build') {
  console.log(`AddAssetHtmlPlugin正在为html-webpack-plugin生成的HTML添加JS或CSS资源路径！`)
  var p=path.resolve(process.cwd(), config.build.dll.dllSourceDir, config.build.dll.fileName1);
  // E:\wamp64\www\webpack2_Course\commonDll\production\vue.dllBundle.js
  //console.log('p',p);
  var p1=path.normalize('E:\\wamp64\\www\\Webpack2Vue_Demo\\static\\lib');
  // E:\wamp64\www\Webpack2Vue_Demo\static\lib
  //console.log('p1',p1);
  //为html-webpack-plugin生成的HTML添加JS或CSS资源路径
  //https://github.com/SimenB/add-asset-html-webpack-plugin
  var htmlAsset = new AddAssetHtmlPlugin([
      {
        //The absolute path of the file you want to add to the compilation, and resulting HTML file.
        filepath        : path.resolve(process.cwd(), config.build.dll.dllSourceDir, config.build.dll.fileName1),
        //If true, will add filepath + '.map' to the compilation as well.
        includeSourcemap: false,
        //?5aeaaf2149bd220e3dd4
        hash            : false,
        // 在服务器上的目录 static/lib
        //If set, will be used as the output directory of the file.
        outputPath      : path.join(config.build.dll.dir, config.build.dll.outputPath),
        //outputPath      : path.normalize('E:\\wamp64\\www\\Webpack2Vue_Demo\\static\\lib'),
        // 注入在HTML页面引入的地址
        //If set, will be used as the public path of the script or link tag.
        //publicPath      : path.posix.join(config.build.dll.dir, config.build.dll.publicPath)
        publicPath      : path.posix.join(config.build.dll.dir, config.build.dll.publicPath)
      },
      {
        filepath        : path.resolve(process.cwd(), config.build.dll.dllSourceDir, config.build.dll.fileName2),
        includeSourcemap: false,
        hash            : false,
        outputPath      : path.join(config.build.dll.dir, config.build.dll.outputPath),
        publicPath      : path.posix.join(config.build.dll.dir, config.build.dll.publicPath)
      }
    ])
  module.exports = htmlAsset
}

if (TARGET === 'test') {
  console.log(`Running the test task!`)
}