<template>
		<div class="pictureShowWrapper">
			<div class="pictureShow float-left">
				<ul class="clearfix" node-type="iccAdvisorPicture">
					<li>
						<a href="javascript:void(0)">
							<img src="../../img/home_1.jpg"/>
						</a>
					</li>
					<li>
						<a href="javascript:void(0)">
							<img src="../../img/home_2.jpg"/>
						</a>
					</li>
					<li>
						<a href="javascript:void(0)">
							<img src="../../img/home_3.jpg"/>
						</a>
					</li>
					<li>
						<a href="javascript:void(0)">
							<img src="../../img/home_4.jpg"/>
						</a>
					</li>
				</ul>
			</div>
		</div>
</template>

<script>
	var slideModule=require('../../js/module/slide.js')
	/* eslint-disable semi */
    export default {
      mounted (){
        this.$nextTick(()=>{
          let myslide=new slideModule({dom:$('[node-type="iccAdvisorPicture"]')})
        })
      }
    }
</script>
<style rel="stylesheet/scss" lang="scss">
	.pictureShowWrapper{
		width: 1000px;
		margin: 0 auto;
	}
	.pictureShowWrapper .pictureShow{
		margin: 60px auto 0;
	}
	.pictureShow {
		border: 1px solid #e6e6e6;
		border-radius: 4px;
		overflow: hidden;
		padding: 10px;
		width: 455px;
		a{
			border:none;
		}
	}
	.pictureShow ul {
		width: 3000px;
	}
	.pictureShow ul li {
		float: left;
		margin-right: 10px;
	}
</style>
