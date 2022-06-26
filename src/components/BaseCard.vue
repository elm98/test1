<template>
  <div>
    <b-skeleton-wrapper :loading="loading">
      <!-- <template #loading>
        <b-card no-body img-top>
          <b-skeleton width="100%" class="p-5" height="200px"></b-skeleton>
          <b-card-body>
            <b-skeleton width="100%"></b-skeleton>
            <b-skeleton width="100%"></b-skeleton>
          </b-card-body>
        </b-card> </template
    ></b-skeleton-wrapper>
  </div>
</template> -->

      <b-card class="p-1  border rounded"  @click="ShowModalDetail(p_Product.Id)"  >
        <div
          class="row   d-flex px-0 "
          :class="{ 'flex-column': flexLgColumn, 'flex-row': flexRow }"
        >
          <div class="col-2  p-0"
            :class="{  'col-lg-12': colSizeBasketLists }"
             >
            <img
              :src="p_Product.Image"
              class="img-fluid rounded  px-0 mx-0"
              data-lazy-delay="1000"
              blank="true"
            />
          </div>
          <div  class="px-0  mx-0   col-10  "     :class="{ 'col-lg-12': colSizeBasketLists   }">
            <b-card-text>
              <b-col  class="pr-sm-0"    v-b-modal.bv-modal-example >
                <small >{{ p_Product.Name }}</small>
              </b-col>
              <b-col class="d-flex align-items-center  px-0  mx-0">

                         <b-col class="col-sm-7  pr-3 pr-sm-0  px-0 col ">

      <div   class="mt-2  text-right"   ><span  class="text-info  fs-12"  > تولید کننده:</span><span  class="px-1  fs-12"  >{{ p_Product.PriceProducer }} تومان</span></div>
<div    class="mt-2  text-right"   ><span class="text-danger   fs-12"  > مصرف کننده:</span><span class="px-1  fs-12" > {{ p_Product.priceconsumer }}تومان</span></div>
<div    class="mt-2   text-right"   ><span  class="text-success  fs-12"  >  شرکت:</span><span class="px-1  fs-12" > {{ p_Product.priceCompany }}تومان</span></div>
                </b-col>
                <b-col class="col-5 px-0 my-2">
                  <BaseCounter
                    :p_Products="p_Product"
                    :p_showBtnAddToBasket="p_showBtnAddToBasket"
                  ></BaseCounter>
                </b-col>
              </b-col>
            </b-card-text>
          </div>
        </div>
      </b-card>
    </b-skeleton-wrapper>
  </div>
</template>

<script>

import BaseCounter from '@/components/BaseCounter.vue'

import {  skeleten } from "../mixins/myMixin.js";

export default {
  mixins: [ skeleten],
  props: {
    p_Product: {},
    p_showBtnAddToBasket: Boolean,
    p_showPictureOnTop: Boolean,
    p_colSizeBasketLists:Boolean,
 
  },
  components: {
    BaseCounter,
  },

  data() {
    return {
      flexLgColumn: false,
      flexRow: false,
      colSizeBasketLists:true,
      

    };
  },

  created() {
    var screenSize = window.matchMedia("(max-width: 580px)");
    if (screenSize.matches) {
      this.flexLgColumn = false;
      this.flexRow = true;

           
    } else {
      this.flexLgColumn = true;
      this.flexRow = false;
      if (this.p_showPictureOnTop == true) {
        this.flexLgColumn = false;
        this.flexRow = true;
      }
        if (this.p_colSizeBasketLists === true) {
             this.colSizeBasketLists=false;
        
           }  

      
    }


  },
 methods: {
    ShowModalDetail(ProductId){
      // console.log(this.p_Product);
                this.$store.dispatch({
        type: 'product/LoadFullProductInfo'});
              this.$store.dispatch({
        type: 'product/LoadModalDetailProduct',index: [ProductId]});
      //   console.log( ProductId);
      //  console.log( this.$store.state.product.DetailProductInfo);
      // console.log(state.DetailProductInfo);
    }
 },
};
</script>

<style scoped>

.splide__slide{
      margin-right: 0px !important;
    width: auto !important;
}
.splide__slide  .col-2{
      flex: 0 0 100%;
    max-width: 100%;
}
@media only screen and (max-width: 600px) {
.splide__slide  .col-10{
      flex: 0 0 100%;
    max-width: 100%;
}
.splide__slide  .col-6{
      flex: 0 0 100%;
    max-width: 100%;
}
.splide__slide  .d-flex{
 display: block !important;
}

}
</style>
