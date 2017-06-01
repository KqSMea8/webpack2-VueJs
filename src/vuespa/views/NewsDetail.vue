/**
* Created by LinChuQiang on 2017/4/21.
*/

<template>
	<div class = "row">
		<div class = "news-detail">
			<div class = "page-header">
				<h2>{{this.$store.state.news.newsDetl.title}}
					<small>{{this.$store.state.news.newsDetl.pubtime}}</small>
				</h2>
				<p>点赞数:{{this.$store.state.news.newsDetl.agree}}
					<button class = "btn btn-success" @click = "submitAgree">点赞</button>
				</p>
				<p>{{this.$store.state.news.newsDetl.desc}}</p>
			</div>
		</div>
	</div>
</template>

<script>
  export default{
    data(){
      return {
        id: ''
      };
    },
    created(){
      this.$http.get("./php/newsdetail.php?newsid=" + this.$route.params.newsid).then(res => {
        //console.log(res);
        //this.newsdetail = res.body;
        this.id = this.$route.params.newsid;
        this.$store.state.news.newsDetl = res.body;
      }, error => {
        console.log(error);
      })
    },
    methods: {
      submitAgree(){
        //本组件调用了Store中actions里定义的agree方法
        //console.log(this.id);
        this.$store.dispatch("agree", this.id)
      }
    }
  }
</script>
