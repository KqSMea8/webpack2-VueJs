module.exports = {
  entry: require('./webpack_config/entry.js').base,
  output: require('./webpack_config/output.js').base,
  // 配置模块如何解析
  resolve: require('./webpack_config/resolve.js').base,
  // externals的选项会覆盖掉ProvidePlugin的选项
  externals: require('./webpack_config/externals.js').base,
  module: {
    rules: require('./webpack_config/module.js').base
  },
  plugins: require('./webpack_config/plugins.js').base
}
