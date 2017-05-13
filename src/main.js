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
// 给require.ensure传递第三个参数重命名为custom-chunk-name.js
function determineDate() {
  require.ensure([], function (require) {
    //moment.js会被打包成一个单独的chunk文件
    var moment = require('moment');
    console.log(moment().format());
  }, function (err) {
    console.error('We failed to load chunk: ' + err);
  }, 'custom-chunk-name');
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


