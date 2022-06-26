<template>

  <div>
 <HeaderPage></HeaderPage>
    <DetailModal></DetailModal>
    <SplideCard :p_categoryName=" $route.params.categoryid  " :p_productList="this.$store.getters['product/productcategory']"  ></SplideCard>
    <FooterPage></FooterPage>
  </div>
</template>
<script>
import DetailModal from "./DetailModal.vue";
import SplideCard from "./SplideCard.vue";
import HeaderPage from '@/components/HeaderPage.vue';
import FooterPage from '@/components/FooterPage.vue';
export default {
  components: {
    SplideCard,
    DetailModal,
     HeaderPage,
        FooterPage
  },
  
    data() {
    return {
      ProductList: [],
    }
    },
    created() {
   let   idproduct=this.$route.params.categoryid
      //  this.$store.dispatch("product/LoadProduct");
    this.LoadSplide();
 
      this.$store.dispatch({
        type: 'product/LoadProductcategory',
        index: [idproduct],
      });

    
  },
  methods: {
    LoadSplide() {
       (this.ProductList = this.$store.getters["product/getProduct"]);
      // console.log(this.ProductList);
    },
  }

};
</script>

<style>
.img-zoom-lens {
position: absolute;
width: 100px;
height: 100px;
}

.img-zoom-result {
width: 400px;
height: 400px;
position: absolute;
z-index: 2;
}
.splide--nav > .splide__track > .splide__list > .splide__slide {
opacity: 1;
}
@media only screen and (max-width: 600px) {
  .img-zoom-result {
display: none;
cursor: ew-resize;
  }
}
</style>