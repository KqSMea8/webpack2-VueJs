<template>
	<div id = "cart">
		<p v-show = "!products.length">
			<i>请添加商品到购物车中！</i>
		</p>
		<ul>
			<li v-for = "product in products">
				名称：{{product.title}} 价格：{{product.value | filter_currency}} 数量：{{product.num}}
			</li>
		</ul>
		<p>总共 {{totalPrice | filter_currency}} 元</p>
		<button type = "button" v-on:click = "checkout(products)">清空购物车</button>
		<p v-show = "cart_modGet_chkStatus">Checkout {{ cart_modGet_chkStatus }}</p>
	</div>
</template>

<style>
	p {
		color: red;
		font-weight: 800;
	}
</style>

<script>
  import { mapGetters } from 'vuex'
  export default{
    methods : {
      checkout(products){
        this.$store.dispatch('cart_modAct_checkout', products)
      }
    },
    computed: {
      ...mapGetters({
        products: 'StoreGet_cartProduct'
      }),
      ...mapGetters(['cart_modGet_chkStatus']),
      totalPrice(){
        return this.products.reduce(
          (total, p) => {
            return total + p.value * p.num
          },
          0)
      }
    }
  }
</script>
