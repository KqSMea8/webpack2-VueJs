/**
 * Created by LinChuQiang.
 */
var webpack = require( "webpack" )
var HtmlWebpackPlugin = require( 'html-webpack-plugin' );
var path = require( 'path' )

var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
	return path.join(__dirname, '.', dir)
}

module.exports = {
	entry     : {
		//入口文件
		index : './src/jsSrc/index.js',
	},
	output    : {
		path     : __dirname + '/static',  //输出文件夹
		filename : '[name].js'   //最终打包生成的文件名(只是文件名，不带路径的哦)
	},
	/*找到node_modules/vue/dist/vue.js*/
	resolve   : {
		alias : {
			vue : 'vue/dist/vue.js'
		}
	},
	externals : {},
	module    : {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: vueLoaderConfig
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: [resolve('src')]
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: 'fonts/[name].[hash:7].[ext]'
				}
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: 'img/[name].[hash:7].[ext]'
				}
			}
		]
	},
	plugins   : [
		new HtmlWebpackPlugin( {
			filename : __dirname + '/static/index.html',   //目标文件
			template : __dirname + '/src/html/index.html', //模板文件
			inject   : 'body',
			hash     : true,  //代表js文件后面会跟一个随机字符串,解决缓存问题
			chunks   : [ "index" ]
		} )
	]
}