<template>
	<div class = "foot">
		<div class = "player-mini">
			<div class = "mini-content">
				<!--播放器-->
				<audio :src = "audio.location" @timeupdate = "updateTime" @canplay = "canPlaySong" @error = "loadError" @ended = "next" id = "audioPlay" />
				<!--点击封面进入播放器详情-->
				<div class = "cover" @click = "showDetail">
					<mu-circular-progress v-show = "loading" :size="50"/>
					<img class = "xmplogo" :src = "audio.albumPic + '?param=100y100'" v-show = "!loading" :alt = "audio.name">
				</div>
				<div class = "info">
					<div class = "name xmpname">{{audio.name}}</div>
					<div class = "artist xmpartist">{{audio.singer}}</div>
				</div>
				<!--播放控制-->
				<div class = "control">
					<!--点击列表按钮显示播放列表-->
					<mu-icon-button class = "mini-btn player-list" @click = "showList" />
					<mu-icon-button class = "mini-btn player" :class = "{pause: playing}" @click = "toggleStatus" />
					<mu-icon-button class = "mini-btn next" @click = "next" />
				</div>
				<!--播放进度-->
				<div class = "pro">
					<!--已缓冲进度-->
					<div class = "pro-load proload" :style = "{'-webkit-transform':'translateX(' + prBufferedTime +'%)' }"></div>
					<!--已播放进度-->
					<div class = "pro-play proplay" :style = "{'-webkit-transform':'translateX(' + prCurrentTime +'%)' }"></div>
				</div>
			</div>
		</div>
		<toast ref = "toast"></toast>
		<!--播放列表-->
		<BottomSheet ref = "bottomSheet"></BottomSheet>
	</div>
</template>
<script>
  import { mapMutations, mapGetters } from 'vuex'
  import Toast from '../components/toast'
  import BottomSheet from '../components/list'
  
  export default {
    data () {
      return {
        loadedTime: 0,
        playerTime: 0
      }
    },
    components: {
      Toast,
      BottomSheet
    },
    methods   : {
      ...mapMutations([
        'play',
        'pause',
        'playNext'
      ]),
      // 进入详细播放器
      showDetail () {
        this.$router.push({name: 'playerDetail', params: {id: this.audio.id}})
        this.$store.commit('toggleDetail')
      },
      // 显示播放列表
      showList () {
        this.$refs.bottomSheet.show()
      },
      // 播放&暂停音乐
      toggleStatus () {
        if (this.playing) {
          document.getElementById('audioPlay').pause()
          this.$store.commit('pause')
        } else {
          document.getElementById('audioPlay').play()
          this.$store.commit('play')
        }
      },
  
      // 当在音频/视频加载期间发生错误时
      loadError () {
        // 判断是第一次打开程序还是后来程序加载的路径有错根据src是否为空
        if (document.getElementById('audioPlay').currentSrc) {
          this.$refs.toast.show('歌曲路径加载出错')
          this.loading = false
          this.$store.commit('closeLoading')
          // 还要把playbar重置下 TODO
        } else {
          console.log('Audio加载歌曲文件错误')
        }
      },
      // 当浏览器能够开始播放指定的音频/视频时，发生 canplay 事件。
      // 自动播放
      canPlaySong () {
        this.$store.commit('closeLoading')
        this.$store.commit('play')
        document.getElementById('audioPlay').play()
      },
      // 当目前的播放列表已结束时，播放下一首
      next () {
        this.toggleStatus()
        this.$store.commit('playNext')
      },
      // 当目前的播放位置已更改时
      updateTime () {
        // HTML5 AUDIO 属性 see http://www.w3school.com.cn/tags/html_ref_audio_video_dom.asp
        var vm = this
        var myaudio = document.getElementById('audioPlay')
        // 	设置或返回音频/视频中的当前播放位置（以秒计）
        var time = parseInt(myaudio.currentTime)
        // 防止在未加载完成时，切歌出现的错误
        // Failed to execute 'end' on 'TimeRanges':
        // 由onprogress 更改为 onsuspend事件。参考：http://www.cnblogs.com/tianma3798/p/6038908.html
        myaudio.onsuspend = function () {
          // buffered 返回表示音频/视频已缓冲部分的 TimeRanges 对象 end(index) - 获得某个已缓冲范围的结束位置
          var timeRange = myaudio.buffered
          if (timeRange.length > 0 && myaudio.duration > 0) {
            vm.$store.commit('updateBufferedTime', parseInt(myaudio.buffered.end(0)))
          }
        }
        // duration 返回当前音频/视频的长度（以秒计）
        vm.$store.commit('updateDurationTime', parseInt(myaudio.duration))
        
        // 判断是更改的时间还是播放的时间
        if (this.change) {
          myaudio.currentTime = this.tmpCurrentTime
          this.$store.commit('setChange', false)
        } else {
          this.$store.commit('updateCurrentTime', time)
        }
      }
    },
    computed  : {
      ...mapGetters([
        'audio',
        'change',
        'playing',
        'loading',
        'currentTime',
        'prBufferedTime',
        'tmpCurrentTime',
        'prCurrentTime'
      ])
    }
  }
</script>
<style lang = "less" scopoed>
	@import "../assets/theme.less";
	
	/*迷你播放器封面加载图标*/
	.mu-circle-wrapper.active{
		margin-top: .5rem;
	}
	.foot {
		width: 100%;
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 998;
	}
	
	/*迷你播放器*/
	.player-mini {
		width: 100%;
		height: 5.1rem;
		position: relative;
		background-color: rgba(255, 255, 255, .9);
		color: #333333;
	}
	/*封面*/
	.player-mini .mini-content .cover {
		width: 5rem;
		height: 5rem;
		overflow: hidden;
		float: left;
		padding-left: 0.2rem;
		padding-top: 0.3rem;
		background: ur('../../static/player-bar.png') no-repeat;
		background-size: cover;
	}
	
	.player-mini .mini-content .cover img {
		width: 100%;
		height: 100%;
	}
	/*歌曲名称以及作者*/
	.player-mini .mini-content .info {
		overflow: hidden;
		position: relative;
		width: 15rem;
		float: left;
		padding-top: 1rem;
		padding-left: 1rem;
	}
	
	.player-mini .mini-content .info .name {
		font-weight: 600;
		font-size: 1.5rem;
		line-height: 1.5rem;
	}
	
	.player-mini .mini-content .info .name, .player-mini .mini-content .info .artist {
		overflow: hidden;
		display: block;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.player-mini .mini-content .info .artist {
		font-weight: 500;
		color: #8a8a8a;
		font-size: 1.5rem;
	}
	
	.player-mini .mini-content .info .name, .player-mini .mini-content .info .artist {
		overflow: hidden;
		display: block;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	
	/*按钮*/
	.control {
		float: right;
		padding-top: 1rem;
	}
	
	.control .mini-btn {
		width: 3rem;
		height: 3rem;
	}
	
	.player-mini .mini-content .info .control {
		position: absolute;
		height: 100%;
		top: 50%;
		margin-top: -1rem;
		right: 0;
	}
	
	/*列表按钮*/
	.player-list {
		background: url("../../../static/cloudmusic/playbar_btn_playlist.png") no-repeat !important;
		background-size: cover !important;
	}
	
	.player {
		background: url("../../../static/cloudmusic/playbar_btn_play.png") no-repeat !important;
		background-size: cover !important;
	}
	
	.pause {
		background: url("../../../static/cloudmusic/playbar_btn_pause.png") no-repeat !important;
		background-size: cover !important;
	}
	
	.next {
		background: url("../../../static/cloudmusic/playbar_btn_next.png") no-repeat !important;
		background-size: cover !important;
	}
	
	/*进度条*/
	.player-mini .mini-content .pro {
		width: 100%;
		height: 1.6px;
		position: absolute;
		left: 0;
		bottom: 0;
		background-color: rgba(255, 255, 255, .5);
	}
	
	.player-mini .mini-content .pro-load, .player-mini .mini-content .pro-play {
		width: 100%;
		height: .1rem;
		position: absolute;
		left: -100%;
	}
	
	.player-mini .mini-content .pro-load {
		background-color: rgba(0, 0, 0, 1);
	}
	
	.player-mini .mini-content .pro-play {
		background-color: @primaryColor;
	}
	
	.songlist {
		height: 260px;
		overflow: auto;
	}
	
	.songlist-title {
		position: fixed;
		background: #fff;
		width: 100%;
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid rgba(0, 0, 0, .12);
		text-align: center;
	}
</style>
