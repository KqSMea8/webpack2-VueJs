var path = require('path');
var utils = require('./utils');
var config = require('../config');
var vueLoaderConfig = require('./vue-loader.conf');

//环境变量 https://doc.webpack-china.org/guides/production-build/
const isProduction = process.env.NODE_ENV === 'production';

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  entry  : {
    //app: ['webpack-hot-middleware/client?noInfo=true&reload=true','./src/main.js')]
    app: './src/main.js',
  },
  output : {
    //path.normalize('E:\\wamp64\\www\\TestWeb')
    path      : config.build.assetsRoot,
    //filename: '[name].[chunkhash].js'
    filename  : '[name].js',
    publicPath: isProduction ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
  },
  //配置模块如何解析
  resolve: {
    //自动解析确定的扩展
    extensions: ['.js', '.vue', '.json', '.css'],
    //alias优先从resolve.modules中的node_modules下寻找
    alias     : {
      'vue$'   : 'vue/dist/vue.esm.js',
      'vuex$'  : 'vuex/dist/vuex.esm.js',
      '@'      : resolve('src'),
      //    将其指向jquery-vendor.js所在位置
      //'$': resolve('src/js/vendor/jquery-1.10.2.min.js'),
      jq110: resolve('src/js/vendor/jquery-vendor.js'),
    },
    modules: [
      "node_modules"
    ],
    mainFields: ["browser", "module", "main"]
  },
  //externals是会覆盖掉ProvidePlugin的
  externals: {
      // 当某个js模块显式地调用var $ = require('jquery')的时候，就会把window,jQuery返回给它。
      /*'jquery': 'window.jQuery',  */
  },
  module : {
    rules: [
      // 将指定js模块export的变量声明为全局变量
      // 有了ProvidePlugin为嘛还需要expose-loader？问得好，如果你所有的jQuery插件都是用webpack来加载的话，的确用ProvidePlugin就足够了；但理想是丰满的，现实却是骨感的，总有那么些需求是只能用<script>来加载的。
      {
        // 此loader配置项的目标是NPM中的jquery
        test: require.resolve('jquery'),
        // 先把jQuery对象声明成为全局变量`jQuery`，再通过管道进一步又声明成为全局变量`$`
        use: "expose-loader?$!expose-loader?jQuery"
      },
      {
        test: /\.vue$/,
        //loader  : 'vue-loader',
        use : [{loader: 'vue-loader', options: vueLoaderConfig}],
        /*loader  : 'happypack/loader?id=happypackVueJs',
         options : vueLoaderConfig*/
      },
      {
        test   : /\.js$/,
        include: [
          // 只去解析运行目录下的 src 和 demo 文件夹
          path.join(process.cwd(), './src'),
          //resolve( 'src' )
          //path.join(process.cwd(), './demo')
        ],
        exclude: function(path) {
          // 路径中含有 node_modules 的就不去解析。
          var isNpmModule = !!path.match(/node_modules/);
          return isNpmModule;
        },
        //loader  : 'babel-loader'
        loader : 'happypack/loader?id=happypackBabelJs',
      },
      //处理资源名称
      {
        test   : /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader : 'url-loader',
        options: {
          //大小小于 10kb
          limit: 10000,
          name : utils.assetsPath('img/[name].[hash:7].[ext]'),
        },
      },
      {
        test   : /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader : 'url-loader',
        options: {
          limit: 10000,
          name : utils.assetsPath('fonts/[name].[hash:7].[ext]'),
        },
      },
    ],
  },
  plugins: [],
};
