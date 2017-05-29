/**
* Created by LinChuQiang on 2017/5/9.
*/

<template>
	<div id = "products">
		<ul>
			<li v-for = "product in products">
				<span>名称：{{product.title}} </span>
				<span>价格：{{product.value | filter_currency}} </span>
				<span>存货：{{product.inventory}}</span>
				<button type = "button" v-on:click = "StoreAct_addToCart(product)" v-bind:disabled = "!product.inventory">添加到购物车</button>
				<button type = "button" @click = "csl">console.log</button>
			</li>
		</ul>
	</div>
</template>

<style>
	li {
		margin: 10px 0;
	}
	
	span {
		margin: 0 20px;
	}
	
	button {
		background: grey;
		color: white;
		font-weight: 800;
		cursor: pointer;
	}
	
	button:hover {
		color: cornflowerblue;
	}
	
	button:disabled {
		color: red;
		cursor: not-allowed;
	}
</style>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default{
    created(){
      this.$store.dispatch('pdl_modAct_allProducts')
    },
    methods : {
      
      ...mapActions([
        'StoreAct_addToCart'
      ]),
      csl(){
        console.log(this.$store);
      }
    },
    computed: {
      ...mapGetters({
        products: 'pdl_modGet_allProducts'
      })
    }
  }
</script>