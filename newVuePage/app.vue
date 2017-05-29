<template>
	<div class = "container">
		<!--<AMenu></AMenu>-->
		<div class = "main">
			<!--<Aheader></Aheader>-->
			<transition v-if = "config.title" name = "slide-fade" mode = "out-in">
				<router-view class = "view"></router-view>
			</transition>
			<!--<Afooter></Afooter>-->
		</div>
		<!--<Notice></Notice>-->
	</div>
</template>

<script>
  import { mapGetters } from 'vuex'
  
  /*import AMenu from './components/menu/menu.vue'
  import Aheader from './components/header/header.vue'
  import Afooter from './components/footer/footer.vue'
  import Notice from './components/notice/notice.vue'*/
  
  //todo:unknown getter config
  export default {
    name      : 'app',
    /*components: {
      AMenu,
      Aheader,
      Afooter,
      Notice,
    },*/
    /*data() {
      return {
        ttl: !!this.$store.getters.config
      }
    },*/
    computed  : {
      ...mapGetters(['config'])
    },
    // https://cn.vuejs.org/v2/api/#watch
    watch: {
      /*config() {
        if (this.config.title) {
          setTimeout(() => {
            document.documentElement.classList.remove('loading')
          }, 1500)
        }
      }*/
    }
  }

</script>

<style>
	@import "../../css/vendor/normalize.css";
	
	html, body {
		background: #fff;
	}
	
	body {
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	
	.slide-fade-enter-active,
	.slide-fade-leave-active {
		transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	
	.slide-fade-enter,
	.slide-fade-leave-active {
		transform: translateX(10px);
		opacity: 0;
	}
	
	.container {
		position: relative;
	}
	
	.main {
		position: relative;
		padding: 30px;
		transition: padding .3s ease;
	}
	
	.view {
		min-height: 600px;
	}
	
	.content {
		width: 96%;
		max-width: 800px;
		margin: 50px auto 0;
	}
	
	h1, h2, h3, h4, h5, p {
		margin: 0;
		font-weight: normal;
	}
	
	a {
		text-decoration: none;
	}
	
	ul {
		list-style: none;
	}
	
	@media screen and (max-width: 600px) {
		.main {
			padding: 10px;
		}
		
		.content {
			margin-top: 20px;
		}
	}

</style>