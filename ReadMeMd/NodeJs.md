#### 1.[path.reslove](https://nodejs.org/api/path.html#path_path_resolve_paths)

```JS

/*./ 当前目录 ../ 父级目录 / 根目录*/

// 相对于当前目录
path.resolve('/foo/bar', './baz') 
// Returns: '/foo/bar/baz'

path.resolve('/foo/bar', '/tmp/file/') 
// Returns: '/tmp/file'

path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif')
// if the current working directory is /home/myself/node,
// this returns '/home/myself/node/wwwroot/static_files/gif/image.gif'

// 连接路径
path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')
// 返回: '/foo/bar/baz/asdf'
path.join(process.cwd(), 'node_modules')
// 返回: E:\wamp64\www\VueJs_Demo_Github\node_modules

// join与reslove的区别，前者组合，后者process.cwd()+参数构成绝对路径
console.log(path.join(option.dev.assetsSubDirectory, 'js/[name].js'))
// 返回: assets\js\[name].js
console.log(path.resolve(option.dev.assetsSubDirectory, 'js/[name].js'))
// 返回: E:\wamp64\www\VueJs_Demo_Github\assets\js\[name].js

// path.posix 保证路径中的斜杠表现一致
var p1 = path.normalize('E:\\wamp64\\www\\Webpack2Vue_Demo\\static\\lib');
// 返回: E:\wamp64\www\Webpack2Vue_Demo\static\lib

```