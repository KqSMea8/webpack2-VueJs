/**
 * Created by Administrator on 2017/4/18 0018.
 */

// 会去node_modules\vue\types\中寻找
import Vue from 'vue';
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'


// 导入index.html页面css
import '@/css/vendor/reset.css';
import '@/css/page/index.css';


// 导入路由
import routes from './router/index';
// 导入存储
import vuexStore from './store/index';
// 导入插件
import validatePlugin from './plugin/validate';
// 导入组件
import NavBar from './components/NavBar.vue';


// 同步加载：var moment = require('moment'); console.log(moment().format());
// 生成的异步加载文件0.js
// 其路径是与index.tml同目录的
// 给require.ensure传递第三个参数重命名为custom_momentChunk.js
// moment.js会被打包成一个单独的chunk文件
// 未被列在entry中，却又需要被打包出来的文件命名配置。在按需加载（异步）模块的时候，这样的文件是没有被列在entry中的，如使用CommonJS的方式异步加载模块：

//[]不为空 预加载懒执行
//webpack解惑：require的五种用法 （转）
//http://www.cnblogs.com/laneyfu/p/6158715.html
function determineDate() {
  require.ensure([], function (require) {
    var moment = require('moment/moment.js');
    console.log(moment().format());
  },"requireEnsureChunk");
}



determineDate();

Vue.use(VueRouter)
Vue.use(VueResource)
//Vue 插件 https://cn.vuejs.org/v2/guide/plugins.html
Vue.use(validatePlugin);
Vue.component('nav_component', NavBar);

const router = new VueRouter({
  routes
});


const myvue = new Vue({
  router: router,
  store: vuexStore
}).$mount('#index');

router.push({name:'Todo'})


