// import 'babel-polyfill'

import Vue from 'vue'
import myShoppingCart from './components/myshoppingcart.vue'

import mystore from './store'

console.log(mystore);
require ('./global.css')

import { currency } from './filter/currency'

Vue.filter('filter_currency', currency)

/*new Vue({
  store     : mystore,
  components: {
    'myCart': myShoppingCart,
  },
}).$mount('#myshoppingcart')*/

new Vue({
  el:"#myshoppingcart",
  store     : mystore,
  render:createElement=>createElement(myShoppingCart)
})
