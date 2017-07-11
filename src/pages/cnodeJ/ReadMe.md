##用Vue做的CNode官网SVG技术
- [Issues]()
- [Source](https://github.com/jiananle/vue-cnode)
- [Api接口](https://cnodejs.org/api)

####项目简介
> 

####需求以及文件结构
* 过场加载动画
* 主题列表、主题详情
* 回复排序、回复列表
* 悬浮框弹出回复主题以及新建主题
* 登录框
* 动态导航栏


####技术栈
> vue + vue-router + vue-resource + bootstrap + font-awesome 

####技术亮点
1. 初始加载过场动画
2. 加载图标使用svg CircleLoading.vue
3. 高级插件模块-Message
4. 回复编辑框SimpleMDE Markdown Editor SimpleMDE is a simple, embeddable, and beautiful JS markdown editor


####Css
1. [SVG](http://www.w3school.com.cn/svg/svg_path.asp) 
* SVG加载进度条 CircleLoading.vue
* [getTotalLength](http://www.zhangxinxu.com/GitHub/demo-Snap.svg/demo/basic/Element.getTotalLength.php) 以像素为单位，返回路径的长度
* [strokedasharray 属性用于创建虚线](http://www.runoob.com/svg/svg-stroke.html)
* [导航旋转加载条 animateTransform](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animateTransform)


2. 初始启动页面的动画效果
* [keyframes](http://www.w3school.com.cn/cssref/pr_keyframes.asp)
* [translate3d(x,y,z) scale3d(x,y,z)](http://www.w3school.com.cn/css3/css3_3dtransform.asp)
* animation里的[forwards](http://www.imooc.com/qadetail/113665)到底是什么作用呢?看你动画结束完是停留还是回去

```
animation-fill-mode，定义动画播放时间之外的状态
顾名思义，要么就是在动画播放完了之后给它一个状态 
animation-fill-mode : none | forwards | backwards |both; 
none播放完之后不改变默认行为，默认值
forwards则是停在动画最后的的那个画面
backwards则是回调到动画最开始出现的画面
both则应用为动画结束或开始的状态

```
* [animationend 事件在 CSS 动画完成后触发](http://www.runoob.com/jsref/event-animationend.html)
```
CSS 动画播放时，会发生以下三个事件：
animationstart - CSS 动画开始后触发
animationiteration - CSS 动画重复播放时触发
animationend - CSS 动画完成后触发

```

3. 如何用SVG创建一个圆形进度[按钮](http://www.tuicool.com/articles/In6f2a)




####Js
1. tools 辅助工具
* 查找、增加和更新Cookie模块
* animationend - CSS 动画完成后触发，兼容匹配
* CNODEAPI
2. click事件发生在框外，关闭框时的[技术细节](https://css-tricks.com/dangers-stopping-event-propagation/)

####vue
1. [Vue-extend](https://cn.vuejs.org/v2/api/#Vue-extend) 自定义一个Message插件

```
<div id="mount-point"></div>

// 创建构造器
var Profile = Vue.extend({
  template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
  data: function () {
    return {
      firstName: 'Walter',
      lastName: 'White',
      alias: 'Heisenberg'
    }
  }
})
// 创建 Profile 实例，并挂载到一个元素上。
new Profile().$mount('#mount-point')

结果如下：
<p>Walter White aka Heisenberg</p>
```
2. Door.vue 作为初始启动页面，做到了根据内容的加载而更新SVG进度条，
3. 全局导航条 GlobalNav.vue 通过占用slot来显示不同导航条内容



####vue-router
1. 


####vuex
1. 


####Server
1. Ajax 跟 [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) 结合使用，统一了AJAX的GET和POST请求
2. CNODE API对象接口一目了然，可统一设置观察，config.js
3. 刷新子页面并不会返回到主页，而是刷新子页面的主页

####Issues
1. 
