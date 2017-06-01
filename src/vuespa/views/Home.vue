<template>
	<div class = "row">
		<div class = "col-xs-5 col-md-5">
			<h2 class = "text-danger"><a href = "#">测试引入图片显示</a></h2>
			<img src = "../../static/img/vuespa/沉舟.jpg">
		</div>
		<div class = "col-xs-7 col-md-7">
			<h2 class = "text-success">{{ msg }}</h2>
			<SlideImg></SlideImg>
		</div>
	</div>
</template>

<script>
	import SlideImg from './Home-slide.vue'
	/* eslint-disable semi */
    export default {
      components:{SlideImg},
      data() {
        return {
          msg: '这是一个 Jquery-sliderImg 插件'
        }
      }
    }
</script>
<style rel="stylesheet/scss" lang="scss">
	$fs14: 14px;
	.text-success {
		padding: 15px;
		color: #0d519c;
		background-color: white;
		text-shadow: grey 2px 2px;
		transition: all .1s;
		border:2px solid red;
		border-radius: $fs14;
		transform: rotateX(60deg);
	}
</style>
