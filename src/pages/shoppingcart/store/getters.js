/**
 * Created by LinChuQiang.
 */

export const StoreGet_cartProduct = state => state.StoreMoudule_cart._addedProduct.map(({id, quantity}) => {
      const product = state.StoreMoudule_productList._allProducts.find(
          p => p.id === id);
      return {
        title: product.title,
        value: product.value,
        num:quantity,
      };
    });