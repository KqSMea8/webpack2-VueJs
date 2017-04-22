/**
* Created by LinChuQiang on 2017/4/21.
*/
<template>
	<div class="row">
		<div class="news">
			<div class="news-hader" v-for="news in newsList">
				<h2><router-link :to="{name:'newsDetail',params:{newsid:news.newsid}}">{{news.title}} </router-link><small>{{news.pubtime}}</small></h2>
				<p>{{news.desc}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				newsList:[
					{newsid:"101",pubtime:"2016-10-19",title:"探索之路",desc:"是手机团队的探索之路"},
					{newsid:"102",pubtime:"2016-10-28",title:"系统之战",desc:"如何支持业务解决"},
					{newsid:"103",pubtime:"2016-10-27",title:"大文件存储",desc:"背后的你不得不知的技术"},
					{newsid:"104",pubtime:"2016-10-26",title:"飞天进化",desc:"阿里巴巴技术委员会"},
				]
			};
		}
	}
</script>