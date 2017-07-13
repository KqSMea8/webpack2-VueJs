##高仿网易云音乐的webapp
- [Issues]()
- [Source](https://github.com/javaSwing/NeteaseCloudWebApp)
- [Demo]()

####项目简介
> 高仿网易云音乐的webapp

####需求以及文件结构
* 广告轮播
* 歌单
* 歌曲列表
* 迷你歌曲播放器
* 详细歌曲播放器
* 歌曲待播放列表
* 歌曲控制、歌词显示

####技术栈
> vue + vue-router + vuex + axois + muse-ui + vue-awesome-swiper +

####技术亮点
1. 


####Css
1. 使用变量预设并分类颜色，背景颜色、文本颜色、其它颜色
2. 通过transform：translateX、translate3d来制作进度条、歌词滚动条

####Js
1. 通过 window.onscroll 监听下拉时间来动态切换导航栏

####vue
1. [muse-ui](https://github.com/museui/muse-ui/)
2. 面板切换框使用muse-ui框架解决
3. 轮播图swiper
4. 下拉加载歌单 mu-infinite-scroll


####vue-router
1. 通过$route.meta.keepAlive来判定是否使用缓存路由页面



####vuex
1. 通过store来完成点击歌曲、添加到播放列表、设置当前播放的歌曲位置、setAudio 播放中的歌曲、setLocation 歌曲地址


####Server
1. 直接vue中使用this.$http.get加载API获取内容


####Issues
1. 加载默认封面路径失败
