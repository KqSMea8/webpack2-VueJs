###TodoList

1. <del>使CommonsChunkPlugin插件中的minChunks参数值自适应</del>

2. webpack2 使用了 html-webpack-template 之后,html 的内置图片引用应该改为 require 并由 file-loader 处理。
(If you are using HTML templates in Webpack 2, in addition to use the file-loader you need to change in your HTML)
	```
	
	<img src="../images/foo.png" /> 
	to this 
	<img src=<%=require("../images/foo.png")%> />
	
	```

3. Webpack-DLL生成手动引用的 BootStrap.js 无效，解决不了,因此弃用 BootStrapDLL

4. 控制JSCSS顺序
	```
	
	HEAD的JS以及CSS加载
	<link rel="stylesheet" type="text/css" href="<%=htmlWebpackPlugin.files.css[0] %>">
	<script src="<%=htmlWebpackPlugin.files.chunks['manifest.commonChunk'].entry %>"></script>
	<script src="<%=htmlWebpackPlugin.files.js[0] %>"></script>
	<script src="<%=htmlWebpackPlugin.files.js[1] %>"></script>
	<script src="<%=htmlWebpackPlugin.files.chunks['index'].entry %>"></script>
	
	如何读取html-webpack-template的option
	<% for(var key in htmlWebpackPlugin.files) { %>
	<%= key %> : <%= JSON.stringify(htmlWebpackPlugin.files[key]) %>,
	<% } %>
	
	html-webpack-template的files选项
	const files = {
		publicPath: '/',
		chunks: {
		'manifest.commonChunk': {'size': 0, 'entry': '/assets/js/manifest.commonChunk.js', 'hash': 'b154c8f7e1f0f6a3bff4', 'css': []},
		'index': {'size': 230306, 'entry': '/assets/js/index.outputSync.js', 'hash': 'f3d729b546119a0e4cab', 'css': []}
		},
		js: ['/assets/lib/bootstrap.dllBundle.js', '/assets/lib/vue.dllBundle.js', '/assets/js/manifest.commonChunk.js', '/assets/js/index.outputSync.js'],
		css: ['/assets/lib/bootstrap.css']
    }

	```

5. webpack-hot-middleware 具体不明

6. Stuck up on ‘loader is used without the corresponding plugin’ 
- vue-loader里面的option的extract改为false
- vue-loader有一个extractcss，vue文件外又有个extractcss，所以是个多入口分离css配置

7. 新建一个分站入口Page时》entry》CommonsChunkPlugin minChunks》HtmlWebpackPlugin》navbar.vue

8. 参考 news.vue，提示 can't not reslove xxx.tff 的原因是，style 里面的 @import 的 url 路径是相对于 news.vue 的，而不是相对于 css 文件来决定ttf路径。
