/**
 * Created by LinChuQiang.
 */
/**
 * Created by LinChuQiang.
 */

import productsData from '../../api/productsData';

import * as type from '../mutationsTypes';

const state = {
  _addedProduct: [],
  _checkStatus :null
};

const getters = {
  cart_modGet_chkStatus:state=>state._checkStatus
};

const mutations = {
  [type.ADD_TO_CART](state, product){
    var id = product.id;
    const addingProduct = state._addedProduct.find(p => p.id === id);
    if (!addingProduct) {
      state._addedProduct.push({
        id,
        quantity: 1,
      });
    } else {
      addingProduct.quantity++;
    }
  },
  [type.CHECKOUT_REQUEST](state){
    state._addedProduct =[]
    state._checkStatus =null
  },
  [type.CHECKOUT_SUCCESS](state){
    state._checkStatus ='成功清除购物车！'
  },
  [type.CHECKOUT_FAILURE](state,{savedCartItems}){
    state._addedProduct =savedCartItems
    state._checkStatus ='清除购物车失败！'
  },
};

const actions = {
  cart_modAct_checkout(context,products){
    const savedCartItems = [...state._addedProduct];
    context.commit(type.CHECKOUT_REQUEST);
    productsData.Api_checkOut(
        products,
        ()=>context.commit(type.CHECKOUT_SUCCESS),
        ()=>context.commit(type.CHECKOUT_FAILURE,{savedCartItems})
    )
  }
};

export default {
  state,
  getters,
  mutations,
  actions,
};