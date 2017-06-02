/**
 * Created by LinChuQiang.
 */

import * as type from './mutationsTypes'

export const StoreAct_addToCart = (context, product) => {
  if (product.inventory > 0) {
    context.commit(type.ADD_TO_CART, {
      id: product.id
    })
  }
}
