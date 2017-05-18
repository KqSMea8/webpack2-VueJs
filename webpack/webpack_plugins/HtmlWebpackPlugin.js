/**
 * Created by LinChuQiang.
 */

const glob = require('glob')
const path = require('path')
const option = require('../option')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TARGET = process.env.npm_lifecycle_event

// 生成HTML
// see https://github.com/ampedandwired/html-webpack-plugin
/*
* filename: The file to write the HTML to. Defaults to index.html. You can specify a subdirectory here too (eg: assets/admin.html).
* 渲染输出html文件名，与 output.path 结合生成该HTML的输出位置，绝对路径
* filename: 'pages/data/app.html'
*
* inject: true
* 向template或者templateContent中注入所有静态资源，不同的配置值注入的位置不经相同。
* 1、true或者body：所有JavaScript资源插入到body元素的底部
* 2、head: 所有JavaScript资源插入到head元素中
* 3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
*
* template 可以前置加载器，告知要渲染的模版文件
* template: 'html-loader?attrs[]=img:src&attrs[]=img:data-src!' + path.resolve(process.cwd(), 'src/index.ejs')
*
* 为html传参
* https://github.com/jaketrent/html-webpack-template
*
* HTMLminify more options:
* https://github.com/kangax/html-minifier#options-quick-reference
*
* 允许插入到模板中的一些chunk，不配置此项默认会将entry中所有的thunk注入到模板中。在配置多个页面时，每个页面注入的thunk应该是不相同的，需要通过该配置为不同页面注入不同的thunk；跟CommonsChunkPlugin选项的name 以及 entry 入口的key相挂钩
* chunks: ['manifest', 'vendor', 'app'],
*
* necessary to consistently work with multiple chunks via CommonsChunkPlugin
* Allows to control how chunks should be sorted before they are included to the html.
* chunksSortMode: 'dependency'
*/
var html = []
if (TARGET === 'dev') {
  console.log(TARGET, `: HtmlWebpackPlugin正在生成HTML！`)
  html = [
    new HtmlWebpackPlugin({
      title: 'app入口文件',
      filename: 'pages/data/app.html',
      template: path.resolve(process.cwd(), 'src/pages/data/app.ejs'),
      inject: true,
      showErrors: true,
      minify: false,
      chunks: ['pages/data', 'vendor.commonChunk', 'manifest.commonChunk', 'data.commonChunk']
    }),
    // 生成根目录下的入口HTML
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(process.cwd(), 'src/index.ejs'),
      inject: true,
      minify: false,
      chunks: ['index', 'vendor.commonChunk', 'manifest.commonChunk', 'index.commonChunk'],
      // chunks: ['manifest.commonChunk', 'app.commonChunk', 'app.outputSync'],
      // chunksSortMode: 'dependency'
      title: '根目录下的入口HTML',
      mobile: true,
      googleAnalytics: {
        trackingId: 'UA-XXXX-XX',
        pageViewOnLoad: true
      },
      devServer: 3000,
      appMountId: 'container',
      window: {
        env: {
          apiHost: 'http://myapi.com/api/v1'
        }
      }
    })
  ]
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
    // html.push(new HtmlWebpackPlugin(htmlConf))
  })
  module.exports = html
} else if (TARGET === 'build') {
  console.log(TARGET, `: HtmlWebpackPlugin正在生成HTML！`)
  html = [
    new HtmlWebpackPlugin({
      // E:\\wamp64\\www\\Webpack2Vue_Demo\\index.html
      filename: option.build.index,
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: false,
        collapseWhitespace: false,
        removeAttributeQuotes: false
      }
    })
  ]
  module.exports = html
}

if (TARGET === 'test') {
  console.log(`Running the test task!`)
}
