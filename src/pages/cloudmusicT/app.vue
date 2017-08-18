<template>
	<div id = "app">
		<router-view></router-view>
		<!--详细播放器-->
		<player></player>
		<!--迷你播放器-->
		<audio-nav></audio-nav>
		<!--播放列表-->
		<play-list></play-list>
		<!--隐藏播放列表-->
		<cover></cover>
		<!--评论-->
		<comment></comment>
	</div>
</template>

<script type = "text/ecmascript-6">
	// 迷你播放器
	import AudioNav from './components/AudioNav'
	// 详细播放器
	import Player from './components/Player'
	// 播放列表
	import PlayList from './components/PlayList.vue'
	// 隐藏播放列表
	import Cover from './components/Cover.vue'
	// 评论
	import Comment from './components/Comment.vue'
	export default {
		data() {
			return {}
		},
		components: {
			AudioNav, Player, PlayList, Cover, Comment
		}
	}
</script>

