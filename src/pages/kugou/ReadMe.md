##vuejs仿写酷狗音乐webapp
- Source：https://github.com/lavyun/vue-demo-kugou

###亮点
1. [mint-ui](http://mint-ui.github.io/#!/zh-cn) 基于 Vue.js 的移动端组件库
2. 歌词跟滚
3. 拖放进度条
4. 从http://m.kugou.com/ 提取HTML中的数据结果构建到本地页面，rank.vue
5. vue 中的 mixin 运用
6. 根据index排序来显示多种的区分样式
7. setAudio 
- state.audio = {...(state.audio), ...audio} 
- 起到一个覆盖的作用，后面的audio对象键值对可以取代前者
- state.audio = {...(state.audio), lrc} 
- 前者对象添加一个lrc的键值对对象

###需求
1.


###遗憾
1. API欠缺，用的是本地JSON数据
2. 没有歌单下一首的功能
3. "style" is a reserved attribute and cannot be used as component prop.(不能用于组件间传递style)

