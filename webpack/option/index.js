// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path');

module.exports = {
  //开发环境选项
  dev  : {
    dll: {
      directory: 'commonDll/development',
    
      jquery        : 'jquery.dllBundle.js',
      jqueryManifest: 'jquery-manifest.json',
      fileName0     : 'bootstrap.dllBundle.js',
      manifest0     : 'bootstrap-manifest.json',
      //fileName1     : 'moment.dllBundle.js',
      //manifest1     : 'moment-manifest.json',
      fileName2     : 'vue.dllBundle.js',
      manifest2     : 'vue-manifest.json',
    
      cssName0    : 'bootstrap.css',
      cssManifest0: 'bootstrap-manifest.json',
    
      dir       : '/development',
      outputPath: 'lib',  // 生成目录
      publicPath: 'lib'   // 注入地址
    },
    env               : require('./dev.env'),
    port              : 3000,
    autoOpenBrowser   : true,
    
    index             : path.normalize('E:\\wamp64\\www\\VueJs_Demo_Github\\index.html'),
    assetsRoot        : path.normalize('E:\\wamp64\\www\\VueJs_Demo_Github\\'),
    assetsSubDirectory: 'development',
    assetsPublicPath  : '/',
    proxyTable        : {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap      : false,
  },
  //发布环境选项
  build: {
    dll: {
      directory: 'commonDll/production',
      
      jquery        : 'jquery.dllBundle.js',
      jqueryManifest: 'jquery-manifest.json',
      fileName0     : 'bootstrap.dllBundle.js',
      manifest0     : 'bootstrap-manifest.json',
      fileName2     : 'vue.dllBundle.js',
      manifest2     : 'vue-manifest.json',
      
      cssName0    : 'bootstrap.css',
      cssManifest0: 'bootstrap-manifest.json',
      
      dir       : '/static',
      outputPath: 'lib',  // 生成目录
      publicPath: 'lib'   // 注入地址
    },
    //也可改为 cross-env 控制NODE_ENV
    env: require('./prod.env'),
    //index                    : path.resolve( __dirname,'../dist/index.html' ),
    //assetsRoot               : path.resolve( __dirname,'../dist' ),
    
    //转移到本地PHP+APACHE+SQL服务器文件夹中
    index             : path.normalize('E:\\wamp64\\www\\Wamp-Webpack2Vue\\index.html'),
    assetsRoot        : path.normalize('E:\\wamp64\\www\\Wamp-Webpack2Vue'),
    assetsSubDirectory: 'static',
    assetsPublicPath  : '/',
    
    productionSourceMap     : true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip          : false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    // bundleAnalyzerReport 打包结果分析
    bundleAnalyzerReport    : false,
    Visualizer              : false,
  },
};
