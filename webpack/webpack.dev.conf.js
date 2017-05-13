const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const webpackConfig = merge(baseWebpackConfig, {
  devtool: require('./webpack_config/devtool.js').dev,
  entry: require('./webpack_config/entry.js').dev,
  module: {
    /*
     [{
       test : /\.css$/,
       use  : [
         {loader  : 'vue-style-loader',},
         {
          loader  : 'css-loader',
          options : {
             minimize  : process.env.NODE_ENV === 'production',
             sourceMap : options.sourceMap
          }
         }
      ]
     }]
     * */
    rules: require('./webpack_config/module.js').dev,
  },
  plugins: require('./webpack_config/plugins.js').dev,
});

module.exports = webpackConfig;