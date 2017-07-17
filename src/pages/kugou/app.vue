<template>
	<div id="app">
		<!--头部-->
		<k-head></k-head>
		<!--主体-->
		<div class="main">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
		<!--迷你播放器-->
		<player></player>
		<detail-player></detail-player>
	</div>
</template>

<script type="es6">
	import kHead from './components/header/head'
	import player from './components/player'
	import detailPlayer from './components/detail_player'
	export default {
		name: 'app',
		components: {
			kHead, player, detailPlayer
		}
	}
</script>

