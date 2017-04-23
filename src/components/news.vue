/**
* Created by LinChuQiang on 2017/4/21.
*/
<template>
	<div class="row">
		<div class="news">
			<div class="news-hader" v-for="news in this.$store.getters.getNews">
				<h2><router-link :to="{name:'newsDetail',params:{newsid:news.newsid}}">{{news.title}} </router-link><small>{{news.pubtime}}</small></h2>
				<p>{{news.desc}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {};
		},
		created(){
			//初始化并为news.newsList传入后台数据
			if ( this.$store.state.news.newsList.length == 0){
				// 请求服务器获取数据
				this.$http.get("../news.php").then(function (res) {
					this.$store.state.news.newsList = res.body;
					//console.log('created news:',this.$store.state.news);
				},function (res) {
					// 请求失败处理
				})
			}
		}
	}
</script>