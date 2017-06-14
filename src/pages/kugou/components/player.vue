<template>
	<div class = "audio-view" :class = "{'audio_panel_hide':toggleHide}">
		<!--H5音频播放器-->
		<audio :src = "audio.songUrl" autoplay id = "audioPlay" @timeupdate = "change()" @ended = "next()" @error = "next()"></audio>
		<!--点击伸缩播放器以及显示加载状态-->
		<div class = "audio-panel-control" @click = "togglePanel" :class = "{'toggleContral':toggleHide}">
			<mt-spinner type = "snake" :size = "27" v-show = "audioLoadding"></mt-spinner>
		</div>
		<div class = "audio-panel">
			<!--歌曲封面-->
			<img alt = "" class = "player-img" :src = "audio.imgUrl" @click = "showDetailPlayer()">
			<!--歌曲标题和作者-->
			<div class = "player-status" @click = "showDetailPlayer()">
				<p class = "player-title ellipsis">{{audio.title}}</p>
				<p class = "player-singer ellipsis">{{audio.singer}}</p>
			</div>
			<!--歌曲播放暂停和下一首-->
			<div class = "player-controls">
				<span class = "player-Play" @click = "toggleStatus()" :class = "{'player-Pause':isPlay}"></span>
				<span class = "player-nextSong" @click = "next()"></span>
			</div>
		</div>
	</div>
</template>

<script type = "es6">
	import { mapGetters } from 'vuex'
	import { Spinner } from 'mint-ui'
	export default {
		name    : 'player',
		data(){
			return {
				toggleHide: false
			}
		},
		computed: {
			...mapGetters(['audio', 'audioLoadding', 'showPlayer', 'isPlay'])
		},
		methods : {
			// 隐藏面板
			togglePanel(){
				this.toggleHide = !this.toggleHide;
			},
		    // 歌曲播放暂停
			toggleStatus(){
				if (this.isPlay) {
					document.getElementById('audioPlay').pause();
				} else {
					document.getElementById('audioPlay').play();
				}
				this.$store.commit('isPlay', !this.isPlay);
			},
			// 显示详细播放器
			showDetailPlayer(){
				if (this.showPlayer) {
					this.$store.commit('showDetailPlayer', true);
				}
			},
		    // 当目前的播放位置已更改时
			change(){
				// 获取当前播放位置（以秒计）
				var time = document.getElementById('audioPlay').currentTime
				if (this.audio.currentFlag) {
					document.getElementById('audioPlay').currentTime = this.audio.currentLength;
					this.$store.commit('setCurrent', false);
				} else {
					// 更新当前播放位置
					this.$store.commit('setAudioTime', time);
				}
			},
			next(){
				this.$store.dispatch('next');
			}
		}
	}
</script>


