<template>
  <div>
    <splide :options="thumbsOptions">
      <splide-slide
        v-for="(product,id) in ProductsImage"
        :key="id"

      >
        <div >
          <img  width="180" height="180"
            class="img-thumbnail"
            :src="product.image"
            @click="changeimagezoom(product.image)"
          />
        </div>
      </splide-slide>
    </splide>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
export default {
  components: {
    Splide,
    SplideSlide,
  },
  props: {
    ProductsImage: {},
  },
  data() {
    return {
      sliding: null,
      loading: false,
      showcounter: false,
      loadingTime: 0,
      maxLoadingTime: 3,

      padding: "20%",
    items: 10,


      thumbsOptions: {
        type: "loop",
        rewind: false,
        waitForTransition: false,

   gap: 30,
        //padding: { left: 220, right: 0 },
        pagination: false,

        breakpoints: {
          300: {
            perPage:2,
             gap: 2,
                 fixedWidth: 100,
        fixedHeight: 100,
          },
          1000: {
            perPage: 2,

                    fixedWidth: 150,
        fixedHeight: 150,
          },
         },

       // perPage: 2,
        // perMove: 5,
        speed: 700,

        // trimSpace: true,
        //easing:'cubic-bezier(.42,.65,.27,.99)',
        // arrows: true,
        lazyLoad: "nearby",
        swipeDistanceThreshold: "150",
        flickPower: 600,
        flickMaxPages: 10,
        direction: "rtl",

      },

    };
  },
  methods: {
    changeimagezoom(a) {
      this.$emit("changeimagethumb", a);
    },
  },
};
</script>

<style>
</style>