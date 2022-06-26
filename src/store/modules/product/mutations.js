export default {
  setproduct(state, data) {
    state.product= data;
  },
  setbasketList(state, data) {
    state.basketStateList= data;
  },

  

  setCategoryMegaMenue(state, data) {
    state.CategoryMegaMenue= data;
  },

  
  mutRemoveProductCount(state, payload) {
    // let idproduct=payload.index[0];
    // let i=payload.index[1];
    
    // let product = state.product.filter(obj => obj.Id==idproduct);
  
    state.product[payload.index[1]].SelectCount=0;  
    state.product[payload.index[1]].Reserved=false;   
  },
  

  mutDecreseProductCount(state, payload){
  //   let idproduct=payload.index;
    
  //  let product = state.product.filter(obj => obj.Id==idproduct);
  //  console.log(product);
    if( state.product[payload.index[1]].SelectCount<=1)
      return  false;
      state.product[payload.index[1]].SelectCount--;  
      
  
  },
  mutIncreseProductCount(state, payload){
  //   let idproduct=payload.index[0];
  //   let i=payload.index[1];
  //   console.log(i);
  //   let product = state.product.filter(obj => obj.Id==idproduct);
  // console.log(product);
      state.product[payload.index[1]].SelectCount++;   
   
  },
  

  SetCheckedProductCount(state, payload){
    let idproduct=payload.index;
    let basketStateList = state.basketStateList.filter(obj => obj.Id==idproduct);
    console.log(basketStateList[0].Reserved);
    basketStateList[0].Reserved=true;   
   
  },

  SetProductcategory(state, payload){
    let idproduct=payload.index;
    console.log( 'hhhhhhhhh'+idproduct);
    state.productcategory = state.product.filter(obj => obj.Idcategory==idproduct);

   
  },
  
  SetProductBasketList(state){
    // let idproduct=payload.index;
   return state.product.filter(obj => obj.Reserved==true);
      //  state.productbasketlist=productbasketlist
      // console.log(productbasketlist);
   
  },


  
  
  SetModalDetailProduct(state, payload) {
    let idproduct=payload.index[0]; 
    state.DetailProductInfo=state.FullProductInfo[0][0][idproduct]; 
    // console.log(idproduct); 
 console.log(state.DetailProductInfo); 
  }, 
  settotalproduct(state, data) {
    state.totalproduct = data;
  }, 

  setTextHeaderBasketList(state, data) {
    state.TextHeaderBasketList = data;

    
  }, 

  setTextFooterBasketList(state, data) {
    state.TextFooterBasketList = data;

    
  }, 

  setFullProductInfo(state, data) {
    state.FullProductInfo = data;
  }, 

  SetTabFilterProduct(state, data) {
    state.TabFilterProduct = data;
  }, 


  setemptyallbasketlist(state) {
    // let productreservetrue = state.product.filter(obj => obj.Reservation==true);
    state.totalproduct=0;
    // for(var i=0;i<this.$store.state.product.length;i++)
    // // console.log(this.$store.state.product.product[i]['Id']);
    // {
    //   if(this.$store.state.product[i]['Reserved']== true)
    //   {
    //     console.log('ghgh');
    //     this.$store.state.product[i]['Reserved']=false;
   
    // }

    // }
//  this.$store.state.product.totalproduct=0;

// for(var i=0;i<this.$store.state.product.length;i++)
// // console.log(this.$store.state.product.product[i]['Id']);
// {
//   if(this.$store.state.product.product[i]['Reserved']== true)
//   {this.$store.state.product.product[i]['Reserved']=false;
//   console.log(this.$store.state.product.product.length);

// }
// }

    // productreservetrue
  ////////////jhgj  state.product = data;
  }, 

  
  
  // setDetailProductInfo(state, payload){
  //   let idproduct=payload.index; 
  //  return state.DetailProductInfo=state.FullProductInfo.filter(obj => obj[0].id==1);  

   
  // },

  
};
