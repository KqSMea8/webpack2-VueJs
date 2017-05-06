// https://github.com/michael-ciniawsky/postcss-load-config
// When using a function (postcss.config.js or .postcssrc.js), it is possible to pass context to postcss-load-config, which will be evaluated while loading your config.
// By default ctx.env (process.env.NODE_ENV) and ctx.cwd (process.cwd()) are available.


module.exports = (ctx) => ({
  //sugarss 解析器
  map: ctx.env === 'development' ? 'inline' : false,
  plugins: [
    //https://www.npmjs.com/package/postcss-svgo
    //Optimise inline SVG with PostCSS.
    require('postcss-svgo')({
      plugins: [{
        removeDoctype: false
      }, {
        removeComments: false
      }, {
        cleanupNumericValues: {
          floatPrecision: 2
        }
      }, {
        convertColors: {
          names2hex: false,
          rgb2hex: false
        }
      }]
    }),
    //https://www.npmjs.com/package/autoprefixer
    require('autoprefixer')({
      "browserslist": [
        "not ie <= 8"
      ]
    }),
    
  ]
})
