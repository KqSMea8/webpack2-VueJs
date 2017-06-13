##ZhiHu-Daily (知乎日报)
- Source：https://github.com/moonou/zhihu-daily-vue

###亮点
1. CSS抖动样式 – CSS Shake
2. App.vue 中 注入 Store
3. vue computed的读取和设置 { get: Function, set: Function }
4. // 全局注册Loading组件
5. ES6解构赋值
```
// 更新评论
[types.UPDATE_COMMENTS]
({
content   : o.content,
likedCount: o.likedCount,
time      : o.time,
user      : {
	nickname : o.nickname,
	avatarUrl: o.avatarUrl
}
} = elem)
```
6. font-awesome.min.css
7. 按顺序的延迟动画特效，CSS高手
###需求
1.


###遗憾
1. store.js 的改动不能热重载
2. 自动切换歌曲品质没做

###文档
1. API https://api.imjad.cn/cloudmusic/index.html
2. 当在音频/视频加载期间发生错误时，http://www.w3school.com.cn/tags/av_event_canplay.asp