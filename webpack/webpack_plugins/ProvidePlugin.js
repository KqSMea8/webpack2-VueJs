/**
 * Created by LinChuQiang.
 */

var webpack = require('webpack')

const TARGET = process.env.npm_lifecycle_event


if (TARGET === 'dev') {
  console.log(TARGET,`: Running the pretest task!`)
  var provideVar =new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
    'window.$': 'jquery',
  })
  module.exports = provideVar
}

if (TARGET === 'build') {
  console.log(TARGET,`: ProvidePlugin正在自动匹配变量！`)
  var provideVar =new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
    'window.$': 'jquery',
  })
  module.exports = provideVar
}

if (TARGET === 'test') {
  console.log(`Running the test task!`)
}