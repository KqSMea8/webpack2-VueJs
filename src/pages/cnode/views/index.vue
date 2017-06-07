<template>
	<div style = "text-align: center;">
		<img class = "index" src = "../images/logo.png">
		<button class = "jumpover" @click="jump()">跳过( {{ remainTime / 1000 }}秒 )</button>
	</div>
</template>

<script>
  require('../css/CV.scss');
  require('../css/iconfont/iconfont.css');
  require('../css/github-markdown.css');
  export default {
    data(){
      return {
        remainTime: 3000,
        flag      : false
      };
    },
    mounted() {
      let time = setInterval(() => {
        if (this.flag === true) {
          clearInterval(time)
          this.jump()
        }
        this.timeDown()
      }, 1000)
     
    },
    methods:{
      timeDown(){
        if (this.remainTime > 0) {
          this.remainTime = this.remainTime - 1000
        }else{
          this.flag=true
        }
      },
      jump(){
        this.$router.push({
          name: 'list'
        });
      }
    }
  };
</script>
<style lang = "scss">
	/*body页面加载CSS效果由common.scss决定*/
	body {
		background-position: center 60%;
	}
	
	.index {
		width: 25%;
		background-color: #fff;
		margin: 20% auto 0 auto;
	}
	
	.jumpover {
		position: absolute;
		top: 10%;
		left: 85%;
		background-color: white;
		border: 1px solid indianred;
		color: red;
	}
</style>
