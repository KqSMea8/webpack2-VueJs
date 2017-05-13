require( './check-versions' )()



//NodeJS
var opn = require( 'opn' )
var path = require( 'path' )

//Express
var express = require( 'express' )
var app = express()

//Webpack
var webpack = require( 'webpack' )
var webpackConfig = require( './webpack.dev.conf' )
var config = require( '../config' )
if( !process.env.NODE_ENV ){
  process.env.NODE_ENV = JSON.parse( config.dev.env.NODE_ENV )
}
var proxyMiddleware = require( 'http-proxy-middleware' )


//调用配置,生成 compiler instance
var compiler = webpack( webpackConfig )
//https://webpack.js.org/guides/development/#webpack-dev-middleware
var devMiddleware = require( 'webpack-dev-middleware' )( compiler,{
  // Same as `output.filename` in most cases.
  filename:webpackConfig.output.filename,
  //isProduction ? config.build.assetsPublicPath : config.dev.assetsPublicPath
  //'/'
  //Same as `output.publicPath` in most cases.
	publicPath : webpackConfig.output.publicPath,
	//publicPath : '/memory',
  compress:false,
	quiet      : false,
	stats      : {
		colors : true,
		chunks : false
	},
  overlay: {
    warnings: true,
    errors: true
  }
} )

var hotMiddleware = require( 'webpack-hot-middleware' )( compiler,{
	log : () =>{},
  noInfo:false,
  quiet:false
} )

// default port where dev server listens for incoming traffic
// 3000
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
// true
var autoOpenBrowser = !!config.dev.autoOpenBrowser

// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
// {}
var proxyTable = config.dev.proxyTable

// force page reload when html-webpack-plugin template changes
// 监听html文件改变事件
compiler.plugin( 'compilation',function( compilation ){
	compilation.plugin( 'html-webpack-plugin-after-emit',function( data,cb ){
		// 发布事件 reload,这个事件会在dev-client.js中接受到，然后刷新
		hotMiddleware.publish( { action : 'reload' } )
		cb()
	} )
} )

// proxy api requests
Object.keys( proxyTable ).forEach( function( context ){
	var options = proxyTable[ context ]
	if( typeof options === 'string' ){
		options = { target : options }
	}
	app.use( proxyMiddleware( options.filter || context,options ) )
} )

// handle fallback for HTML5 history API
app.use( require( 'connect-history-api-fallback' )() )

// serve webpack bundle output 注册中间件
app.use( devMiddleware )

// enable hot-reload and state-preserving
// compilation error display
app.use( hotMiddleware )

// serve pure static assets 使用静态资源
// http://www.expressjs.com.cn/starter/static-files.html
//  path.posix.join('/','static') = '/static'
var staticPath = path.posix.join( config.dev.assetsPublicPath,config.dev.assetsSubDirectory )
//不可以通过带有 "/static" 前缀的地址来访问 /static 目录下面的文件?
app.use( staticPath,express.static( 'public' ) )

var url = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise( resolve =>{
	_resolve = resolve
} )

console.log( '> 开发服务器创建中...' )

devMiddleware.waitUntilValid( () =>{
	console.log( 'devMiddleware 监听地址为 ' + url + '\n' )
	// when env is testing, don't need open it
	if( autoOpenBrowser && process.env.NODE_ENV !== 'testing' ){
		opn( url )
	}
	_resolve()
} )

// 路由实例
// 对网站首页的访问返回 "Hello World!" 字样
// 无效
app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen( port , function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('server 监听地址为 http://%s:%s', host, port);
})

module.exports = {
	ready : readyPromise,
	close : () =>{
		server.close()
	}
}
