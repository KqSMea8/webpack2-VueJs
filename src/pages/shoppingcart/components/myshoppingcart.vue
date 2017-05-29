/**
* Created by LinChuQiang on 2017/5/9.
*/

<template>
	<div id = "myshoppingcart">
		<h4>商品列表</h4>
		<productList></productList>
		<hr>
		<h4>我的购物车</h4>
		<cart></cart>
	</div>
</template>

<style>
	hr {
		border: 5px solid grey;
	}
</style>

<script>
  import productList from './products.vue'
  import cart from './cart.vue'
  export default{
    components: {
      productList,
      cart
		/*
		 products:'./products.vue',
		 cart:'./cart.vue',
		 */
    }
  }
</script>