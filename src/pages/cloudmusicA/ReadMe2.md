##音乐APP
- [Issues]()
- [Source](https://github.com/moonou/zhihu-daily-vue)
- [Demo]()
- [Api](https://api.imjad.cn/)

####项目简介
> 

####需求以及文件结构
* 搜歌


####技术栈
> vue + vue-router + vuex + axois + express + nodeJs(glob.sync)
> csshake +

####技术亮点
1. 


####Css
1. main.scss 中的ol > li 按顺序弹出动画
```
.animation-style-1 > li {
    opacity: 0;
    animation-name: animationStyle1;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    @for $i from 1 through 10 {
        &:nth-child(#{$i}) {
            animation-duration: 300ms * $i;
        }
    }
}
```

####Js
1. [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)


####vue
1. filters:分秒形式时间、年月日形式时间


####vue-router
1. 


####vuex
1. App 内注入vuex-store
2. 已经初始化默认歌单 API.searchSongs('Main Theme')



####Server
1. axios.create().post/.get
2. 有些 API 已经过时
- login api
- 


####Issues
1. 
