/**
* Created by LinChuQiang on 2017/4/21.
*/

<template>
	<div class = "row">
		<div class = "news-detail">
			<div class = "page-header">
				<h2>{{newsdetail.title}}
					<small>{{newsdetail.pubtime}}</small>
				</h2>
				<p>{{newsdetail.desc}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				newsdetail:[]
			};
		},
		created(){
			this.$http.get("../newsdetail.php?newsid="+this.$route.params.newsid).then(res=>{
				console.log(res);
				this.newsdetail = res.body;
			},error=>{
				console.log(error);
			})
		}
	}
</script>