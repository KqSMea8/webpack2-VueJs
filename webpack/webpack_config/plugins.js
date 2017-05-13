/**
 * Created by LinChuQiang.
 */
const option = require('../option');
const utils = require('../utils');
const path = require('path');
const isProduction = process.env.NODE_ENV === 'production';

const webpack = require('webpack');

// 插件列表

const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const globalVar = require('../webpack_plugins/DefinePlugin');
const provideVar = require('../webpack_plugins/ProvidePlugin');

const html = require('../webpack_plugins/HtmlWebpackPlugin');
const htmlAsset = require('../webpack_plugins/AddAssetHtmlPlugin');

const cssExtract = require('../webpack_plugins/ExtractTextPlugin');
const compressCss = require('../webpack_plugins/OptimizeCssAssetsPlugin');

const jsCommon = require('../webpack_plugins/CommonsChunkPlugin');
const jsLib = require('../webpack_plugins/DllReferencePlugin');
const compressJs = require('../webpack_plugins/UglifyJsPlugin');

const copy = require('../webpack_plugins/CopyWebpackPlugin');

const assets = require('../webpack_plugins/AssetsPlugin');

// 多线程处理插件
const happyPack = require('../webpack_plugins/HappyPackPlugin');


/** ********
 初始环境
 **********/

const basePlugins = [
  // 1.创建一个在编译时可以配置的全局常量
  new webpack.DefinePlugin({
    // NODE_ENV: '"development"'
    // 'process.env': config.dev.env
  }),
];
basePlugins.push(provideVar);
Array.prototype.push.apply(basePlugins, happyPack);
module.exports.base = basePlugins;

/** ****
 开发环境
 ******/

const devPlugins = [
  // 自动实时刷新页面
  // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
  // hot module replacement is somewhat self-explanatory
  new webpack.HotModuleReplacementPlugin(),
  // no errors is used to handle errors more cleanly
  new webpack.NoEmitOnErrorsPlugin(),
  // 优化错误提示
  new FriendlyErrorsPlugin(),
];

devPlugins.push(html);
devPlugins.push(cssExtract);
Array.prototype.push.apply(devPlugins, jsCommon);
Array.prototype.push.apply(devPlugins, jsLib);
devPlugins.push(htmlAsset);
devPlugins.push(copy);
module.exports.dev = devPlugins;

/** ****
生产环境
******/

const buildPlugins = [];
// 注意顺序
buildPlugins.push(globalVar);
// buildPlugins.push(provideVar)

// 数组中添加第二个数组中的元素
// Equivalent to vegetables.push('celery', 'beetroot');
// Array.prototype.push.apply(vegetables, moreVegs);
Array.prototype.push.apply(buildPlugins, jsCommon);
Array.prototype.push.apply(buildPlugins, jsLib);

buildPlugins.push(html);
buildPlugins.push(cssExtract, compressCss);
buildPlugins.push(compressJs);
buildPlugins.push(htmlAsset);
buildPlugins.push(assets);

// Default：false
if (option.build.productionGzip) {
  var GzipCompress = require('../webpack_plugins/CompressionWebpackPlugin');
  buildPlugins.plugins.push(GzipCompress);
}

// 使用 webpack-bundle-analyzer 来分析 Webpack 生成的包体组成并且以可视化的方式反馈给开发者
if (option.build.bundleAnalyzerReport) {
  var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  buildPlugins.plugins.push(new BundleAnalyzerPlugin());
}

if (option.build.Visualizer) {
  // https://github.com/chrisbateman/webpack-visualizer#plugin-usage
  var Visualizer = require('webpack-visualizer-plugin');
  buildPlugins.plugins.push(new Visualizer({
    // 在E:\wamp64\www\Webpack2Vue_Demo 目录下生成
    filename: path.posix.join('Visualizer.html'),
  }));
}

module.exports.build = buildPlugins;

/** ********
 DLL环境
 **********/
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const dllPlugins = [
  new ExtractTextPlugin('[name].css'),
];

const isDev = process.env.NODE_ENV === 'development';
const outputPath = isDev ? path.resolve(process.cwd(), 'commonDll/development') : path.resolve(process.cwd(), 'commonDll/production');

dllPlugins.push(
    new webpack.DllPlugin({
      /**
       * path
       * 定义 manifest 文件生成的位置
       * [name]的部分由entry的名字替换
       * The path to the manifest file which maps between modules included in a bundle and the internal IDs within that bundle
       * 本Dll文件中各模块的索引，供DllReferencePlugin读取使用
       */
      path: path.join(outputPath, '[name]-manifest.json'),
      /**
       * name
       * dll bundle 输出到那个全局变量上
       * 必须和 output.library 一样的值
       * 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下
       */
      name: '[name]',
      // 指定一个路径作为上下文环境，需要与webpack_plugins的DllReferencePlugin的context参数保持一致，建议统一设置为项目根目录
      context: path.resolve(process.cwd()),
    })
);

// 默认不压缩
const isuglify = false;
const UglifyJsParallelPlugin = require('webpack-uglify-parallel');

if (isuglify) {
  dllPlugins.push(
      new UglifyJsParallelPlugin({
        cacheDir: '.UglifyJsCache/',
        uglifyJS: {
          exclude: /\.min\.js$/,
          output: {
            comments: false,
          },
          compress: {
            warnings: false,
          },
        },
      })
  );
}
module.exports.dll = dllPlugins;
