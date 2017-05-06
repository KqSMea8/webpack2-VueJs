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
 
