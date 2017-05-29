<template>
	<div class = "iconfont icon-top" v-show = "show" @click = "goTop">&#xe611;</div>
</template>
<script>
  import Zepto from 'webpack-zepto';
  export default {
    replace: true,
    data() {
      return {
        show: false
      };
    },
    mounted() {
      Zepto(window).on('scroll', () => {
        if (Zepto(window).scrollTop() > 100) {
          this.show = true;
        } else {
          this.show = false;
        }
      });
    },
    beforeDestory() {
      Zepto(window).off('scroll');
    },
    methods: {
      goTop() {
        Zepto(window).scrollTop(0);
        this.show = false;
      }
    }
  };
</script>
<style>
	.icon-top {
		position: fixed;
		right: 10px;
		bottom: 80px;
		font-size: 50px;
		z-index: 9999;
		color: #42b983;
	}
</style>