/**
 * Created by LinChuQiang.
 */
const path = require('path');
const option = require('../option');
const utils = require('../utils');
const isProduction = process.env.NODE_ENV === 'production';

/**********
 初始环境
 **********/

module.exports.base = {
  //path.normalize('E:\\wamp64\\www\\TestWeb')
  path      : option.build.assetsRoot,
  //filename: '[name].[chunkhash].js'
  filename  : '[name].js',
  publicPath: isProduction ? option.build.assetsPublicPath : option.dev.assetsPublicPath,
};

/**********
 开发环境
 **********/

module.exports.dev = {};

/**********
 生产环境
 **********/

module.exports.build = {
  filename     : utils.assetsPath('js/[name].[chunkhash].js'),
  chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
};

/**********
 DLL环境
 **********/

const isDev = process.env.NODE_ENV === 'development';
const outputPath = isDev ? path.resolve(process.cwd(),'commonDll/development'): path.resolve(process.cwd(),'commonDll/production');
module.exports.dll = {
  path    : outputPath,
  filename: '[name].dllBundle.js',
    /*
     * output.library
     * [name]_[hash]将会定义为 window.moment_1ab8e7beaa7091def553
     * 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与插件DllPlugin的name参数保持一致
     */
  library : '[name]_library',
}

