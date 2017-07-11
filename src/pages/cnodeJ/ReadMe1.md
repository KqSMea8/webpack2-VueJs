##用Vue做的CNode官网SVG技术
- Source：https://github.com/jiananle/vue-cnode
- 十分全面
###亮点
1. 不用vuexStore
2. 滚动加载
3. 加载图标使用svg CircleLoading.vue
4. 详细的Message插件模块
5. 偏向于js写法$event $el 
6. SimpleMDE Markdown Editor SimpleMDE is a simple, embeddable, and beautiful JS markdown editor
7. snapsvg imports-loader
8. 初始加载过场动画
9. 组件之间的值关联变化
10. cookie模块、原生ajax加载、ES6异步加载Promise
11. 多个弹出框之间点击切换
12. Vue2.0 Transition transition-group
13. 通过css控制显示不同的Div模块，取代部分JS控制显示


###需求
基本齐全

###遗憾

1. 如何添加shortcut icon
```
 <link rel="shortcut icon" type="image/png" href="/static/favicon.png">
 
```
2.APP布局没有响应式变化
3.所有的通知（未读 & 已读）测试不了
4. 主题编辑未测试

###文档
使用 $on(eventName) 监听事件
使用 $emit(eventName) 触发事件
see https://cn.vuejs.org/v2/guide/components.html#自定义事件