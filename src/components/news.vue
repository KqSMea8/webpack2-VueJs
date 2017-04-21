/**
* Created by LinChuQiang on 2017/4/21.
*/
<template>
	<div class="row">
		<div class="news">
			<div class="news-hader" v-for="news in newsList">
				<h2>{{news.title}} <small>{{news.pubtime}}</small></h2>
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
					{pubtime:"2016-10-29",title:"探索之路",desc:"是手机团队的探索之路"},
					{pubtime:"2016-10-28",title:"系统之战",desc:"如何支持业务解决"},
					{pubtime:"2016-10-27",title:"大文件存储",desc:"背后的你不得不知的技术"},
					{pubtime:"2016-10-26",title:"飞天进化",desc:"阿里巴巴技术委员会"}
				]
			};
		}
	}
</script>