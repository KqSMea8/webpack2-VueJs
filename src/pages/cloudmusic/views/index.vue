<template>
	<div>
		<div class = "fixed-bar">
			<mu-appbar>
				<div class = "logo" slot = "left"></div>
				<mu-icon-button icon = 'search' slot = "right" />
			</mu-appbar>
			<mu-tabs :value = "activeTab" @change = "handleTabChange" class = "view-tabs">
				<mu-tab value = "rage" title = "时下流行" />
				<mu-tab value = "songList" title = "歌单" />
				<mu-tab value = "leaderBoard" title = "排行榜" />
				<mu-tab value = "hotSinger" title = "热门歌手" />
			</mu-tabs>
		</div>
		<div class = "default-view" :class = "{view: songList.length > 0}">
			<keep-alive>
				<router-view v-if="$route.meta.keepAlive"></router-view>
			</keep-alive>
			<router-view v-if="!$route.meta.keepAlive"></router-view>
		</div>
	</div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        activeTab: 'rage'
      }
    },
    created () {
      // 当created函数时监测路由信息,防止页面刷新tab高亮错误
      var tmpArr = this.$route.path.split('/')
      // console.log('tmpArr',tmpArr)
      // tmpArr = ["", "index", "rage"]
      if (tmpArr[1] === 'index') {
        this.handleTabChange(tmpArr[2])
      }
    },
    // watch函数监测路由的变化,保持tab面板的高亮位置正确
    watch   : {
      '$route' (to, from) {
        const path = to.path
        var tmpArr = path.split('/')
        // console.log('index$route',tmpArr)
        // index$route = ["", "index", "songList"]
        if (tmpArr[1] === 'index') {
          this.handleTabChange(tmpArr[2])
        }
      }
    },
    methods : {
      // 根据路由path参数来决定tab面板以及切换路由
      handleTabChange (val) {
        this.activeTab = val
        this.$router.push({path: '/index/' + val})
      }
    },
    computed: {
      ...mapGetters([
        'songList'
      ])
    }
  }
</script>

<style lang = "less" scoped rel = "stylesheet/less">
	@import "../assets/theme.less";
	
	.logo {
		width: 150px;
		height: 48px;
		background: url("../../../static/cloudmusic/logo.png") no-repeat left center;
		background-size: cover;
	}
	
	.view-tabs {
		background-color: #fff;
		color: rgba(0, 0, 0, .87);
		> .mu-tab-link {
			color: rgba(102, 102, 102, 1);
		}
		> .mu-tab-active {
			color: @primaryColor;
		}
	}
	
	.fixed-bar {
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
		z-index: 15;
	}
	
	.default-view {
		margin-top: 104px;
	}
	
	.view {
		margin-bottom: 2.3rem;
	}
</style>
