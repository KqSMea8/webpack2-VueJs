<template>
	<div>
		<!--http://www.muse-ui.org/#/bottomSheet-->
		<!--:open 是否打开-->
		<mu-bottom-sheet :open = "bottomSheet" @close = "closeBottomSheet ">
			<div class = "title-wrapper">
				播放列表（{{songList.length}}）
			</div>
			<hr class = "mu-divider">
			<div class = "list-wrapper">
				<div class = "list-item" :class = "{on: item.id == audio.id}" v-for = "(item, index) in songList">
					<div class = "left" @click = "play(index)">
						<span class = "list-name">{{item.name}}</span>
						<span class = "list-singer">&nbsp;-{{item.singer}}&nbsp;</span>
					</div>
					<span class = "list-btn" @click = "remove(index)">x</span>
					<hr class = "mu-divider">
				</div>
			</div>
		</mu-bottom-sheet>
	</div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    name    : 'list',
    data () {
      return {
        bottomSheet: false
      }
    },
    methods : {
      // 要显示列表，必须设置playListDetail.vue的位置属性
      closeBottomSheet () {
        this.bottomSheet = false
        if (document.querySelector('.playList')) {
          document.querySelector('.playList').style.position = 'static'
        }
      },
      // Todo:不知道哪里触发的 以及 遮罩层哪里设置的
      show () {
        this.bottomSheet = true
        if (document.querySelector('.playList')) {
          document.querySelector('.playList').style.position = 'fixed'
        }
      },
      
      // 点击播放列表中的歌曲
      play (index) {
        this.$store.commit('setAudioIndex', index)
      },
      // 删除播放列表中的歌曲
      remove (index) {
        console.log(index)
        this.$store.commit('removeAudio', index)
      }
    },
    computed: {
      ...mapGetters([
        'songList',
        'audio'
      ])
    }
  }
</script>
<style lang = "less" scoped>
	@import "../assets/theme.less";
	
	html, body {
		height: 100%;
		overflow: hidden
	}
	
	.title-wrapper {
		font-size: 16px;
		height: 2rem;
		line-height: 2rem;
		color: rgba(0, 0, 0, .87);
		text-align: center;
		.right-btn {
			line-height: 2.1rem;
			font-size: 12px;
			color: #828080;
			float: right;
			padding-right: 10px;
		}
	}
	
	.list-wrapper {
		height: 10rem;
		width: 100%;
		padding: 0 10px;
		overflow: auto;
		-webkit-overflow-scrolling: touch;
	}
	
	.list-item {
		height: 2rem;
		line-height: 2rem;
		.left {
			max-width: 90%;
			float: left;
			height: 2rem;
			overflow: hidden;
		}
	}
	
	.list-name {
		float: left;
		max-width: 72%;
		height: 2rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.list-singer {
		color: #737171;
		font-size: 12px;
	}
	
	.list-btn {
		width: 32px;
		text-align: center;
		float: right;
		color: #737171;
	}
	
	.on {
		color: @primaryColor;
		.list-singer {
			color: @primaryColor;
		}
	}

</style>

