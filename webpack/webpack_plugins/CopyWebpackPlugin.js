/**
 * Created by LinChuQiang.
 */

const path = require('path');
const option = require('../option');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;

if (TARGET === 'dev') {
  console.log(`Running the pretest task!`);
}

if (TARGET === 'build') {
  console.log(`CopyWebpackPlugin正在复制自定义静态资源文件！`);
  //4.7 复制自定义静态资源
  // https://github.com/kevlened/copy-webpack-plugin
  // 复制 webpack2_Course的static 文件夹下的资源到 to中的地址
  var copy = new CopyWebpackPlugin([
    {
      // 从右往左被处理的，后面每个 path 被依次解析，直到构造完成一个绝对路径
      // path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif')
      // 如果当前工作目录为 /home/myself/node，
      // 则返回 '/home/myself/node/wwwroot/static_files/gif/image.gif'
      // webpack2_Course/static
      // 相对于本目录解析地址
      from  : path.resolve(__dirname, '../../static'),
      // webpack2_Course/dist/static
      //to: config.build.assetsSubDirectory,
      to    : path.resolve(option.build.assetsRoot, 'static'),
      ignore: ['.*'],
      debug : 'debug',
    },
    {
      context: path.resolve(process.cwd(), 'commonDll/production/static/fonts/'),
      from: '*',
      to: path.resolve(option.build.assetsRoot, 'static','fonts'),
    },
    {
      context: path.resolve(process.cwd(), 'commonDll/production/static/img/'),
      from: '*',
      to: path.resolve(option.build.assetsRoot, 'static','img'),
    },
  ]);
  module.exports = copy;
}

if (TARGET === 'test') {
  console.log(`Running the test task!`);
}