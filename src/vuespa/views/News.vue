/**
* Created by LinChuQiang on 2017/4/21.
*/
<template>
	<div id="news">
		<p><span class = "mui-icon mui-icon-home"></span>mock假数据、组件之间的路由传参</p>
		<div class = "news">
			<div class = "news-hader" v-for = "news in this.$store.getters.getNews">
				<h2>
					<!--todo-vuerouter：此处php的url地址读取错误-->
					<router-link :to = "{name:'NewsDetail',params:{newsid:news.newsid}}">{{news.title}} </router-link>
					<small>{{news.pubtime}}</small>
				</h2>
				<p>{{news.desc}}</p>
			</div>
		</div>
	</div>
</template>

<style scoped>
	@import '../../static/css/mui.min.css';
</style>

<script>
  export default {
    name: 'newsC',
    data(){
      return {};
    },
    created(){
      //初始化并为news.newsList传入后台数据
      if (this.$store.state.news.newsList.length == 0) {
        // 请求服务器获取数据
		  /*this.$http.get("./php/news.php").then(function (res) {
		   this.$store.state.news.newsList = res.body;
		   //console.log('created news:',this.$store.state.news);
		   }, function (res) {
		   // 请求失败处理
		   })*/
        // 请求mock出来的假数据
        // http://www.cnblogs.com/lvdabao/p/webpack-front.html?utm_source=tuicool&utm_medium=referral
        this.$http.get("/mock/news").then(function (res) {
          // console.log(res);
          this.$store.state.news.newsList = res.body;
          //console.log('created news:',this.$store.state.news);
        }, function (res) {
          // 请求失败处理
        })
      }
    }
  }
</script>
