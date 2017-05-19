// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  // 开发环境选项
  dev: {
    dll: {
      // DllReferencePlugin为静态资源单独打包
      directory: 'commonDll/development',
      jqueryManifest: 'jquery_dll-manifest.json',
      bootstrapManifest: 'bootstrap_dll-manifest.json',
      vueManifest: 'vue_dll-manifest.json',
      
      // AddAssetHtmlPlugin为html-webpack-plugin生成的HTML添加JS或CSS资源路径！
      jquery: 'jquery_dll.dllBundle.js',
      bootstrap: 'bootstrap_dll.dllBundle.js',
      bootstrapCss: 'bootstrap_dll.css',
      vue: 'vue_dll.dllBundle.js',
      dir: '/assets',
      outputPath: 'lib',  // 生成目录
      publicPath: 'lib'   // 注入地址
    },
    env: require('./dev.env'),
    port: 3333,
    autoOpenBrowser: true,
    index: path.normalize('E:\\wamp64\\www\\VueJs_Demo_Github\\index.html'),
    // assetsRoot 也就是  E:\\wamp64\\www\\VueJs_Demo_Github 目录
    assetsRoot: process.cwd(),
    assetsSubDirectory: 'assets',
    assetsJsDir: 'assets/js/',
    assetsPublicPath: '/',
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  },
  // 发布环境选项
  build: {
    dll: {
      // DllReferencePlugin为静态资源单独打包
      directory: 'commonDll/production',
      jqueryManifest: 'jquery_dll-manifest.json',
      bootstrapManifest: 'bootstrap_dll-manifest.json',
      vueManifest: 'vue_dll-manifest.json',
    
      // AddAssetHtmlPlugin为html-webpack-plugin生成的HTML添加JS或CSS资源路径！
      jquery: 'jquery_dll.dllBundle.js',
      bootstrap: 'bootstrap_dll.dllBundle.js',
      bootstrapCss: 'bootstrap_dll.css',
      vue: 'vue_dll.dllBundle.js',
      dir: '/assets',
      outputPath: 'lib',  // 生成目录
      publicPath: 'lib'   // 注入地址
    },
    
    // 也可改为 cross-env 控制NODE_ENV
    env: require('./prod.env'),
    // index                    : path.resolve( __dirname,'../dist/index.html' ),
    // assetsRoot               : path.resolve( __dirname,'../dist' ),

    // 转移到本地PHP+APACHE+SQL服务器文件夹中
    index: path.normalize('E:\\wamp64\\www\\Wamp-Webpack2Vue\\index.html'),
    assetsRoot: path.normalize('E:\\wamp64\\www\\Wamp-Webpack2Vue'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    // bundleAnalyzerReport 打包结果分析
    bundleAnalyzerReport: false,
    Visualizer: false
  }
}
