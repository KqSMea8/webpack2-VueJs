##Vue 音乐
- [Issues]()
- [Source](https://github.com/Sioxas/vue-music)
- [Demo]()
- [Api接口](https://cnodejs.org/api)
- [Api](https://api.imjad.cn/)

####项目简介
> 

####需求以及文件结构
* 


####技术栈
> vue + vue-router + vuex + vue-resource + vue-lazyload 
> vue-awesome-swiper

> [rxjs](http://reactivex.io/rxjs/manual/tutorial.html)

> [WeUI 是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一](https://weui.io/)

####技术亮点
1. 动态歌词跟滚
2. 分类型搜索以及搜索历史


####Css
1. 

####Js
1. 

####vue
1. 	app.vue通过routerViewAnimation变量动态调整路由动画
```
<transition :name = "routerViewAnimation">
	<router-view v-show = "!blurBgShow"></router-view>
</transition>
```


####vue-router
1. 


####vuex
1. vuex结合rxjs/Rx使用示例，全局菜单选项操作
```
RankPage.vue 触发 action notifyActionSheet 并传入 options
{
menus  : {
	'title.noop' : this.topListData.songlist[num].data.songorig + '<br/><span style="color:#666;font-size:12px;">' + this.getSingerStr(this.topListData.songlist[num].data.singer) + '</span>',
	playAsNext   : '下一首播放',
	addToPlayList: '添加到播放列表'
},
handler: {
	['cancel'](){},
	['playAsNext'](){
		that.$store.commit('addToPlayListAsNextPlay', {})
	},
	['addToPlayList'](){
		that.$store.commit('addToPlayList', {})
	}
}
}
options 内包含菜单的键值对象以及触发菜单项的操作函数
notifyActionSheet 则注册订阅了菜单项的操作函数
state.actionSheet.subject.subscribe({
	next    : (v) => options.handler[v](),
	complete: () => commit('closeActionSheet')
})
当在 ActionSheet.vue 中触发 on-click-menu 时，触发responceFromActionSheet
传入键，响应菜单操作
```


####Server
1. 


####Issues
1. 加载热门歌单API错误
