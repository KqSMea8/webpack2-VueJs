<template>
	<div class = "pictureShowWrapper">
		<div class = "pictureShow">
			<ul class = "clearfix" node-type = "iccAdvisorPicture">
				<li>
					<a href = "javascript:void(0)">
						<img src = "../../static/img/vuespa/homeSlide/home_1.jpg" />
					</a>
				</li>
				<li>
					<a href = "javascript:void(0)">
						<img src = "../../static/img/vuespa/homeSlide/home_2.jpg" />
					</a>
				</li>
				<li>
					<a href = "javascript:void(0)">
						<img src = "../../static/img/vuespa/homeSlide/home_3.jpg" />
					</a>
				</li>
				<li>
					<a href = "javascript:void(0)">
						<img src = "../../static/img/vuespa/homeSlide/home_4.jpg" />
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	var slideModule = require('../../static/js/vuespa/slide.js')
	/* eslint-disable semi */
	export default {
		mounted (){
			this.$nextTick(() => {
				let myslide = new slideModule({dom: $('[node-type="iccAdvisorPicture"]')})
			})
		}
	}
</script>
<style rel = "stylesheet/css" scoped>
	.pictureShowWrapper {
		-webkit-box-sizing: content-box;
		-moz-box-sizing: content-box;
		box-sizing: content-box;
		width: 500px;
		margin: 0 auto;
	}
	
	.pictureShowWrapper .pictureShow {
		margin: 5px auto;
	}
	
	.pictureShow {
		border: 1px solid #e6e6e6;
		border-radius: 4px;
		overflow: hidden;
		padding: 10px 10px 0 10px;
		width: 475px;
	}
	
	.pictureShow a {
		border: none;
	}
	
	.pictureShow ul {
		width: 3000px;
		padding: 0;
	}
	
	.pictureShow ul li {
		float: left;
		margin-right: 10px;
		list-style: none;
	}
</style>
