export default {
  getProduct(state) {
    return state.product;
  },
  productcategory(state) {
    return state.productcategory;
  },

  getListShop(state) {
return state.listShop
  },

  getProductInfo(state) {
return state.productInfo
  },

  getProductBasketList(state) {
return state.basketStateList
  },

  // getProductBasketList(state) {
  //   for(var i=0;i<this.$store.state.product.length;i++)

  //       {
  //         if(this.$store.state.product[i]['Reserved']== true)
  //         {
            
  //           return state.product.filter(obj => obj.Reserved==true);
       
  //       }
  //       }

  //   // return state.product;
  // },
  getTotalProduct(state){
    return state.totalproduct;
  },


  getCategoryMegaMenue(state){
    return state.CategoryMegaMenue;
  },


  geTextHeaderBasketList(state){
    return state.TextHeaderBasketList;
  },
  geTextFooterBasketList(state){
    return state.TextFooterBasketList;
  },
  
 
  // getProductcounter(state) {
  //   let id=state.Product.filter(Product => Product.Id)
  
  //   return state.product[id]['SelectCount'];
  //   // 
  //   },
  getIncreseProductCount(state) {
    return state.product;
  },

getDecreseProductCount(state) {
    return state.product;
  },
  getFullProductInfo(state) {
    return state.FullProductInfo;
   
  },


  getDetailProductInfo(state) {
    return state.DetailProductInfo;
   
  },


  getTabFilterProduct(state) {
    return state.TabFilterProduct;
   
  },
  
 
  
};
