const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const webpackConfig = merge(baseWebpackConfig, {
  devtool:  require('./webpack_config/devtool.js').build,
  output : require('./webpack_config/output.js').build,
  module : {
    rules: require('./webpack_config/module.js').build,
  },
  plugins: require('./webpack_config/plugins.js').build,
})

module.exports = webpackConfig