/**
 * Created by LinChuQiang.
 */

/*ES6标准发布后，module成为标准，标准的使用是以export指令导出接口，以import引入模块，但是在我们一贯的node模块中，我们采用的是CommonJS规范，使用require引入模块，使用module.exports导出接口。
 
 ES6发布的module并没有直接采用CommonJS，甚至连require都没有采用，也就是说require仍然只是node的一个私有的全局方法，module.exports也只是node私有的一个全局变量属性，跟标准半毛钱关系都没有。*/
/*import $ from './jquery-1.10.2.min'*/
var $=require('./jquery-1.10.2.min')
window.$ = $
window.jQuery = $
/*
export default $
*/
module.exports =$

