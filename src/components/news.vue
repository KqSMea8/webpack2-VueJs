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
		created(){
			if (this.$store.state.newsList.length == 0){
				// 请求服务器获取数据
				this.$http.get("../news.php").then(function (res) {
					this.$store.state.newsList = res.body;
				},function (res) {
					// 请求失败处理
				})
			}
		}
	}
</script>