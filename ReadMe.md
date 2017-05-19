0. [2017-04-18-用webpack2 手动搭建Vue项目](http://www.jianshu.com/p/a87dee15e6c3)

1. 调试不了plugins中的回调函数，例如返回CommonsChunkPlugin插件中的minChunks选项的回调参数值

2. src目录的结构，先按照常规的css/js/img进行划分，然后每个目录下在按照功能模块进行子目录划分：
- module --- 通用组件
- page   --- 页面应用
- vendor  ---引用第三方组件

3. path.reslove 
- ./ 当前目录 ../ 父级目录 / 根目录
- 相对于当前目录
- path.resolve('/foo/bar', './baz')
  
  // Returns: '/foo/bar/baz'
  
- path.resolve('/foo/bar', '/tmp/file/')
  
  // Returns: '/tmp/file'
  
- path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif')
  
  // if the current working directory is /home/myself/node,
  // this returns '/home/myself/node/wwwroot/static_files/gif/image.gif'
  
- [path.reslove 参考地址](https://nodejs.org/api/path.html#path_path_resolve_paths)

4. require( 'eslint-friendly-formatter' ) friendly-errors-webpack-plugin

5. 安装sass-loader之前需要安装node-sass以及python2
   http://blog.sina.com.cn/s/blog_4441270b0102w68q.html
   
6.结合nodejs+webpack+vuejs开启时尚学习套路
 http://blog.csdn.net/github_26672553/article/details/52801047
 http://www.jtthink.com/course/40
 
7.webpack.dll.config -> DllReferencePlugin -> AddAssetHtmlPlugin -> config index

8.路径解释
- 连接路径
- path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')
- 返回: '/foo/bar/baz/asdf'
- E:\wamp64\www\VueJs_Demo_Github\node_modules
- path.join(process.cwd(), 'node_modules')
- join与reslove的区别，前者组合，后者process.cwd()+参数构成绝对路径
-       // assets\js\[name].js
        // console.log(path.join(option.dev.assetsSubDirectory, 'js/[name].js'))
        // E:\wamp64\www\VueJs_Demo_Github\assets\js\[name].js
        // console.log(path.resolve(option.dev.assetsSubDirectory, 'js/[name].js'))
- path.posix 保证路径中的斜杠表现一致

`
var p1 = path.normalize('E:\\wamp64\\www\\Webpack2Vue_Demo\\static\\lib');
E:\wamp64\www\Webpack2Vue_Demo\static\lib
`
9. webpack2 使用了html-webpack-template 之后 html的内置图片改为require并由url-loader处理
- If you are using HTML templates in Webpack 2, in addition to use the file-loader you need to change in your HTML:
`<img src="../images/foo.png" /> to this <img src=<%=require("../images/foo.png")%> /> `

10.DLL生成的BootStrap.js无效的问题 解决不了,弃用BootStrapDLL

11.控制JSCSS顺序
- HEAD的JS以及CSS加载

<link rel="stylesheet" type="text/css" href="<%=htmlWebpackPlugin.files.css[0] %>">
<script src="<%=htmlWebpackPlugin.files.chunks['manifest.commonChunk'].entry %>"></script>
<script src="<%=htmlWebpackPlugin.files.js[0] %>"></script>
<script src="<%=htmlWebpackPlugin.files.js[1] %>"></script>
<script src="<%=htmlWebpackPlugin.files.chunks['index'].entry %>"></script>

- 如何读取html-webpack-template的option以及files选项

`

<% for(var key in htmlWebpackPlugin.files) { %>
<%= key %> : <%= JSON.stringify(htmlWebpackPlugin.files[key]) %>,
<% } %>

`


