// http://eslint.org/docs/user-guide/configuring

module.exports = {
  parserOptions: {
  	//指定ECMAScript支持的版本
	  ecmaVersion:5,
	  //指定ECMAScript支持的版本
    sourceType: 'module'
  },
  //环境的全局变量
	//JavaScript有很多种运行环境，比如常见的有浏览器和Node.js，另外还有很多软件系统使用JavaScript作为其脚本引擎，比如PostgreSQL就支持使用JavaScript来编写存储引擎，而这些运行环境可能并不存在console这个对象。另外在浏览器环境下会有window对象，而Node.js下没有；在Node.js下会有process对象，而浏览器环境下没有。
  env: {
    browser: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: "airbnb/legacy",
  // required to lint *.vue files
	// 允许使用第三方插件
  plugins: [
  	//npm install --save-dev eslint-plugin-html
    'html'
  ],
  // add your custom rules here
	// "规则名称":error级别系数。系数0为不提示(off)、1为警告(warn)、2为错误抛出(error)
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
	  'no-console': 'off',
   
  }
}
