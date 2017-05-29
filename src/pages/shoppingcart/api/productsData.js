/**
 * Created by LinChuQiang.
 */
  const _allProducts = [
    {id: 1, title: '西瓜', value: 1.5, inventory: 3},
    {id: 2, title: '牙刷', value: 55.5, inventory: 3},
    {id: 3, title: '水杯', value: 34.3, inventory: 3},
    {id: 4, title: '手机', value: 4259.2, inventory: 3},
  ];

export default {
  Api_allProducts(callback){
    setTimeout(()=>callback(_allProducts),1000);
  },
  Api_checkOut(products,doneCb,failCb){
    console.log(products);
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
          ? doneCb()
          : failCb()
    }, 100)
  }
}