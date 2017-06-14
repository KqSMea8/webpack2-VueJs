<template>
	<div id = "search">
		<div class = "search">
			<div class = "search-input">
				<img src = "./../assets/icon-search.png" alt = "搜索">
				<form @submit.prevent = "search(key)">
					<input type = "text"
					       placeholder = "搜索 歌曲/专辑/歌手"
					       v-model = "key"
					       @focus = "focus()">
				</form>
			</div>
			<!--默认不显示取消按钮-->
			<div class = "search-cancel"
			     :class = "{ 'search-cancel-show' : searchShow }"
			     @touchend = "searchCancel()"
			     @click = "searchCancel()">
				取消
			</div>
		</div>
		<!--默认不显示搜索历史列表；在没有搜索结果时，才显示搜索历史列表以及热门搜索列表-->
		<div class = "hotkey" v-if = "searchRes==null&&searchShow">
			<div class = "search-history">
				<div class = "search-history-item" v-for = "item in searchHistory" @click = "search(item)">{{item}}</div>
			</div>
			<!--热门搜索列表-->
			<ul>
				<li v-for = "(item,index) in hotkey" @click = "search(item.k)">
					<span class = "hotkey-index">{{index + 1}}</span>
					<span class = "hotkey-k">{{item.k}}</span>
					<span class = "hotkey-n">{{item.n | searchVol}}</span>
				</li>
			</ul>
		</div>
		<!--默认不显示搜索结果-->
		<div class = "result" v-if = "searchRes!=null&&searchShow">
			<!--单曲-->
			<div class = "result-group" v-if = "searchRes.song!=null">
				<div class = "group">
					<img class = "group-img" src = "./../assets/icon-music.png">
					<p class = "group-p">单曲</p>
				</div>
				<div class = "result-item" v-for = "(item, index) in searchRes.song.itemlist">
					<p class = "result-title" @click = "play(index)">{{item.name}}</p>
					<p class = "result-author" @click = "play(index)">-{{item.singer}}</p>
					<div class = "action-button" @touchend.prevent = "showMenu(index)" @click = "showMenu(index)">
						<img src = "./../assets/icon-...black.png">
					</div>
				</div>
			</div>
			<!--专辑-->
			<div class = "result-group" v-if = "searchRes.album!=null">
				<div class = "group">
					<img class = "group-img" src = "./../assets/icon-album.png">
					<p class = "group-p">专辑</p>
				</div>
				<div class = "album-item" v-for = "item in searchRes.album.itemlist" @click = "showAlbum(item.mid)">
					<img class = "album-img" v-lazy = "item.pic">
					<div class = "album-info">
						<p class = "album-name">{{item.name}}</p>
						<p class = "album-author">{{item.singer}}</p>
					</div>
				</div>
			</div>
			<!--歌手-->
			<div class = "result-group" v-if = "searchRes.singer!=null">
				<div class = "group">
					<img class = "group-img" src = "./../assets/icon-singer.png">
					<p class = "group-p">歌手</p>
				</div>
				<div class = "singer-item" v-for = "item in searchRes.singer.itemlist" @click = "showSinger(item.mid)">
					<img class = "singer-img" v-lazy = "item.pic">
					<div class = "singer-p">
						<p>{{item.name}}</p>
					</div>
				</div>
			</div>
			<!--MV-->
			<div class = "result-group" v-if = "searchRes.mv!=null">
				<div class = "group">
					<img class = "group-img" src = "./../assets/icon-mv.png">
					<p class = "group-p">MV</p>
				</div>
				<div class = "mv-item" @click = "openmv(item.vid)" v-for = "item in searchRes.mv.itemlist">
					<p class = "mv-name">{{item.name}}</p>
					<p class = "mv-author">{{item.singer}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script type = "text/ecmascript-6">
	export default {
		data () {
			return {
				key          : '',
				hotkey       : null,
				searchRes    : null,
				searchHistory: [],
				searchShow   : false,
				menuShow     : false,
				menuedIndex  : 0,
				menus        : {},
				isAlbumShow  : false,
				isSingerShow : false,
				mid          : 0,
				singermid    : 0
			}
		},
		methods: {
			// 鼠标聚焦搜索框时
			focus : function () {
				// 显示搜索取消、历史列表以及结果
				this.searchShow = true
				//  @searchshow="rankshow=false" 隐藏主页的热门歌单和MV推荐
				this.$emit('searchshow')
			},
			// 搜索框提交搜索
			search: function (key) {
				this.key = key
				this.$store.dispatch('search', key).then((response) => {
					console.log('search', response);
					console.log('search', response.data);
					console.log('search', response.data.data);
					// 填充到搜索结果
					this.searchRes = response.data.data
					var index = this.searchHistory.indexOf(key)
					// 如果搜索历史列表中有当前的搜索关键词，则删除重复搜索关键词
					if (index !== -1) {
						this.searchHistory.splice(index, 1)
					}
					// 开头增加该搜索关键词
					this.searchHistory.unshift(key)
					// 最多存储十条
					this.searchHistory = this.searchHistory.slice(0, 10)
					// 数组转换为字符串存储于localStorage中
					window.localStorage.searchHistory = JSON.stringify(this.searchHistory)
				})
			},
		    // 搜索取消
			searchCancel: function () {
				this.searchShow = false
				this.key = ''
				this.searchRes = null
				this.$emit('searchhide')
			},
		    // 播放单曲
			play        : function (index) {
				this.$store.commit('setPlayList', {
					index: index,
					list : this.searchRes.song.itemlist
				})
			},
		    // 显示单曲搜索结果的操作菜单
			showMenu    : function (num) {
				this.menuedIndex = num
				let that = this
				this.$store.dispatch('notifyActionSheet', {
					menus  : {
						'title.noop' : this.searchRes.song.itemlist[num].name + '<br/><span style="color:#666;font-size:12px;">' + this.searchRes.song.itemlist[num].singer + '</span>',
						playAsNext   : '下一首播放',
						addToPlayList: '添加到播放列表'
					},
					handler: {
						['cancel'](){},
						['playAsNext'](){
							that.$store.commit('addToPlayListAsNextPlay', that.searchRes.song.itemlist[that.menuedIndex])
						},
						['addToPlayList'](){
							that.$store.commit('addToPlayList', that.searchRes.song.itemlist[that.menuedIndex])
						}
					}
				})
			},
		    // 点击专辑的搜索结果时
			showAlbum   : function (mid) {
				this.$router.push({name: 'album', params: {id: mid}})
			},
			// 点击歌手的搜索结果时
			showSinger  : function (singermid) {
				this.$router.push({name: 'singer', params: {id: singermid}})
			},
			// 点击MV的搜索结果时
			openmv(vid){
				window.open("https://y.qq.com/portal/mv/v/" + vid + ".html")
			}
		},
		filters: {
			// 热门关键搜索词数量
			searchVol: num => Math.round(num / 1000) / 10 + '万'
		},
		created: function () {
		    // 读取localStorage，填充搜索列表
			if (window.localStorage.searchHistory) {
				this.searchHistory = JSON.parse(window.localStorage.searchHistory)
			}
			this.$store.dispatch('getHotKey').then((response) => {
				this.hotkey = response.data.data.hotkey.slice(0, 5)
			})
		}
	}
</script>

<style scoped>
	
	.search {
		width: 100%;
		height: 60px;
		display: flex;
		flex-direction: row;
		position: fixed;
		top: 0;
		background: #fff;
		z-index: 1;
	}
	
	.search-input {
		width: 100%;
		background: #eee;
		border-radius: 5px;
		margin: 10px;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	
	.search-input img {
		height: 30px;
		width: 30px;
		display: inline-block;
		margin: 0 5px;
	}
	
	.search-input form,
	.search-input input {
		width: 100%;
		height: 100%;
		border: none;
		background: #eee;
		font-size: medium;
		flex-grow: 1;
		border-radius: 5px;
		outline: none;
	}
	
	.search-cancel {
		height: 40px;
		width: 0;
		margin: 10px auto;
		line-height: 40px;
		overflow: hidden;
		transition: width 0.3s;
		cursor: pointer;
	}
	
	.search-cancel-show {
		width: 55px;
	}
	
	.hotkey {
		margin-top: 60px;
		margin-bottom: 50px;
		background: #eeeeee;
		display: flex;
		flex-direction: column;
	}
	
	.hotkey ul {
		list-style: none;
		background: #fff;
	}
	
	.hotkey ul li {
		height: 40px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0 10px;
		cursor: pointer;
	}
	
	.hotkey ul li .hotkey-index {
		padding-right: 10px;
	}
	
	.hotkey ul li .hotkey-k {
		flex-grow: 1;
	}
	
	.search-history {
		display: flex;
		flex-wrap: wrap;
		background: #fff;
		padding: 0 10px;
		max-height: 66px;
	}
	
	.search-history .search-history-item {
		margin: 5px;
		padding: 0 3px;
		border: 1px solid #000;
		border-radius: 14px;
		cursor: pointer;
	}
	
	.result {
		margin-top: 60px;
		margin-bottom: 50px;
		background: #eeeeee;
		display: flex;
		flex-direction: column;
	}
	
	.result-group {
		background: #ffffff;
	}
	
	.group {
		display: flex;
		flex-direction: row;
		height: 40px;
		align-items: flex-end;
		padding-bottom: 5px;
		padding-left: 10px;
		background: #eeeeee;
	}
	
	.group-img {
		width: 25px;
		height: 25px;
	}
	
	.group-p {
		margin-left: 10px;
	}
	
	.result-item {
		display: flex;
		background: #ffffff;
		border-bottom: 1px #eeeeee solid;
		flex-direction: row;
		margin-left: 10px;
		padding-left: 10px;
		height: 40px;
		align-items: center;
		cursor: pointer;
	}
	
	.result-item .result-title {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.result-item .result-author {
		color: #929292;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		flex-grow: 1;
	}
	
	.album-item {
		height: 40px;
		display: flex;
		flex-direction: row;
		border-bottom: #eeeeee 1px solid;
		padding: 10px 10px;
		align-items: center;
		cursor: pointer;
	}
	
	.album-img {
		height: 40px;
		width: 40px;
		border-radius: 5px;
	}
	
	.album-info {
		display: flex;
		flex-direction: column;
		padding-left: 15px;
	}
	
	.album-name {
		font-size: 14px;
		line-height: 20px;
	}
	
	.album-author {
		font-size: 12px;
		color: #929292;
		line-height: 20px;
	}
	
	.songs-action-button {
		height: 20px;
		width: 20px;
		margin-right: 10px;
	}
	
	.singer-item {
		height: 40px;
		display: flex;
		flex-direction: row;
		padding: 5px 10px;
		align-items: center;
		cursor: pointer;
	}
	
	.singer-img {
		height: 40px;
		width: 40px;
		border-radius: 50%;
	}
	
	.singer-p {
		display: flex;
		border-bottom: 1px #eeeeee solid;
		height: 40px;
		align-items: center;
		padding: 3px 10px;
		flex-grow: 1;
	}
	
	.mv-item {
		display: flex;
		flex-direction: column;
		border-bottom: #eeeeee 1px solid;
		padding: 10px;
		cursor: pointer;
	}
	
	.mv-name {
		font-size: 14px;
		line-height: 20px;
	}
	
	.mv-author {
		font-size: 12px;
		color: #929292;
		line-height: 20px;
	}
	
	.action-button {
		width: 20px;
		height: 20px;
		padding: 10px;
	}
	
	.action-button img {
		width: 20px;
	}
	
	@media screen and (min-width: 68vh) {
		.search {
			width: 68vh;
		}
	}

</style>
