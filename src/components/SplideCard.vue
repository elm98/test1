<template>
  <div>
    <b-container>
      <b-row class="my-5 pb-5 px-0">
        <b-col class="border-custom d-flex justify-content-between">
          <strong class="border-blue p-lg-3 py-3 px-1"
            >{{ p_categoryName }}
          </strong>
          <a class="fs-12 p-lg-3 py-3 px-1 text-decoration-none">
            <strong class="">مشاهده بیش تر > </strong></a
          >
        </b-col>
        <b-col class="px-0">
          <splide :options="options">
            <SplideSlide
              v-for="(product, index) in this.p_productList"
              :key="index"
            >
            
                <BaseCard
                  :p_Product="product"
                  :p_showBtnAddToBasket="true"
                  :p_showPictureOnTop="false"
                  :p_colSizeBasketLists="false"
                 
                  @click="ShowDetailModal(product.Id)"
              

                ></BaseCard>
           
            </SplideSlide>
          </splide>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import BaseCard from "./BaseCard.vue";

export default {
  props: {
    p_categoryName: {
      type: String,
      required: false,
    },
    p_productList: [],
  },
  
  components: {
    Splide,
    SplideSlide,
    BaseCard,
  },
  created() {
    // this.loadProductList();
  },

  data() {
    return {
      options: {
        type: "slide",
        rewind: false,
        waitForTransition: false,
        gap: 1,
        height: 440,
        pagination: false,
        perPage: 4,
        // perMove: 5,
        speed: 700,
        focus: "center",
        trimSpace: true,
        //easing:'cubic-bezier(.42,.65,.27,.99)',
        arrows: true,
        lazyLoad: "nearby",
        swipeDistanceThreshold: "150",
        flickPower: 600,
        flickMaxPages: 10,
        direction: "rtl",
         breakpoints: {
		576: {
			perPage: 2,


		},
768: {
			perPage: 2,

		},
992: {
			perPage: 3,

		},
1200: {
			perPage: 4,

		},

  }
      },
     
  

    };
  },


};
</script>
<style scoped>
.splide__slide{
      padding: 0px 2px;
}
</style>