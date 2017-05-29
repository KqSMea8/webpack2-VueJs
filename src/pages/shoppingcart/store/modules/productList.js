/**
 * Created by LinChuQiang.
 */

import productsData from '../../api/productsData';
import * as type from '../mutationsTypes';

const state = {
  _allProducts:[]
};

const getters = {
  pdl_modGet_allProducts:state=>state._allProducts
};

const mutations = {
  //  第二个参数通常为对象
  [type.RECEIVE_PRODUCT_DATA](state,products){
    //console.log(state._allProducts);
    //console.log(products.allpro);
    state._allProducts =products.allpro;
  },
  [type.ADD_TO_CART](state,product){
    var id=product.id;
    state._allProducts.find(p=> p.id === id).inventory--;
  }
};
const actions = {
  
  pdl_modAct_allProducts(context) {
    productsData.Api_allProducts(products => {
      context.commit(type.RECEIVE_PRODUCT_DATA,{allpro:products});
    });
  }

};

export default {
  state,
  getters,
  mutations,
  actions,
};