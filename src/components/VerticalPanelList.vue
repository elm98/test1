<template>
  <div>
    <b-row>
      <b-col
        cols
        :lg="p_cardSize"
        sm="12"
        class="px-3"
        id="my-table"
        v-for="productInfo in itemsForList"
        :key="productInfo.id"
        :per-page="perPage"
        :current-page="currentPage"
      >
        <div>
          <base-card  class="px-0" 
            :p_showBtnAddToBasket="p_showBtnAddToBasket"
            :p_showPictureOnTop="true"
            :p_Product="productInfo"
            :p_colSizeBasketLists="p_colSizeBasketList"                   
          ></base-card>
          </div
      ></b-col>
    </b-row>

    <b-row>
      <b-pagination
        class="d-flex justify-content-center my-5"
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
        v-if="isShowPagination"
      ></b-pagination>
    </b-row>
  </div>
</template>

<script>



import BaseCard from '@/components/BaseCard.vue'



export default {
  components: {
  BaseCard
  },
  props: {
    p_productList:[],
    p_cardSize: Number,
    p_showBtnAddToBasket: Boolean,
    P_showTypeBasketPagination: Number,
    p_colSizeBasketList:Boolean,
    p_statusbasketlist:Boolean
  },

  data() {
    return {
      activeImageSizeClass: false,
      isShowPagination: true,
      currentPage: 1,
      perPage: 3,
    };
  },


  computed: {
    rows() {
      return this.p_productList.length;
    },

    itemsForList() {

      if(this.p_statusbasketlist==true)
      {
        return this.p_productList
      }
      else (this.p_statusbasketlist==null)
      {
 return this.p_productList.slice(
      (this.currentPage - 1) * this.perPage,
      this.currentPage * this.perPage,
    );
      }
     
  
    },

  },
  created() {

    this.activeFlexImage();
    
    if (this.P_showTypeBasketPagination === 1) this.isShowPagination=false; 

  },
  methods: {
    activeFlexImage() {
      if (this.activeImageSizeClass == "true") {
        this.activeImageSizeClass = true;
      }
    },
  },
};
</script>

<style>
.span-check {
  width: 1em;
  height: 1em;
}
.image-size-small {
  width: 80px !important;
  height: 80px !important;
  padding: 10px;
}
@media (max-width: 950px) {
  .image-size-small-main {
    width: 80px !important;
    height: 80px !important;
    padding: 10px;
  }
}

.thumbnailimage {
  width: 100px;
  height: 100px;
}
</style>