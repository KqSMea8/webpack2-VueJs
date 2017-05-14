/**
 * Created by LinChuQiang.
 */

const glob = require('glob')
const option = require('../option')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TARGET = process.env.npm_lifecycle_event

var html = []
if (TARGET === 'dev') {
  console.log(TARGET, `: HtmlWebpackPlugin正在生成HTML！`)
  html = [new HtmlWebpackPlugin({
    // filename: The file to write the HTML to. Defaults to index.html. You can specify a subdirectory here too (eg: assets/admin.html).
    // 渲染输出html文件名,路径相对于 output.path 的值
    filename: 'index.html',
    // template: Webpack require path to the template. Please see the docs for details.
    // 渲染源，模版文件
    template: 'index.html',
    inject: true,
    // 跟CommonsChunkPlugin选项的name相挂钩
    chunks: ['manifest.commonChunk', 'vendor.commonChunk', 'app'],
    chunksSortMode: 'dependency'
  })]
  var htmlConf
  var match = glob.sync('./src/pages/**/*.html')
  console.log('match: ', match)
  match.forEach(path => {
    const chunk = path.split('./src/pages/')[1].split('/app.html')[0]
    console.log(chunk)
    const filename = chunk + '.html'
    htmlConf = {
      filename: filename,
      template: path,
      inject: true,
      hash: process.env.NODE_ENV === 'production',
      chunks: ['manifest.commonChunk', 'vendor.commonChunk', chunk]
    }
    html.push(new HtmlWebpackPlugin(htmlConf))
  })
  module.exports = html
} else if (TARGET === 'build') {
  console.log(TARGET, `: HtmlWebpackPlugin正在生成HTML！`)
  // 4.5 生成HTML
  // generate dist index.html with correct asset hash for caching.
  // you can customize output by editing /index.html
  // see https://github.com/ampedandwired/html-webpack-plugin
  html = [
    new HtmlWebpackPlugin({
      // E:\\wamp64\\www\\Webpack2Vue_Demo\\index.html
      filename: option.build.index,
      template: 'index.html',
      /* 向template或者templateContent中注入所有静态资源，不同的配置值注入的位置不经相同。
       1、true或者body：所有JavaScript资源插入到body元素的底部
       2、head: 所有JavaScript资源插入到head元素中
       3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
       */
      inject: true,
      minify: {
        removeComments: false,
        collapseWhitespace: false,
        removeAttributeQuotes: false
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      }
      // 允许插入到模板中的一些chunk，不配置此项默认会将entry中所有的thunk注入到模板中。在配置多个页面时，每个页面注入的thunk应该是不相同的，需要通过该配置为不同页面注入不同的thunk；
      // chunks: ['manifest', 'vendor', 'app'],
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      // Allows to control how chunks should be sorted before they are included to the html.
      // chunksSortMode: 'dependency'
    })
  ]
  module.exports = html
}

if (TARGET === 'test') {
  console.log(`Running the test task!`)
}
