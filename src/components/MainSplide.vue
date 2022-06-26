<template>
  <div>
    <DetailModal></DetailModal>
    <SplideCard :p_categoryName="'دسته'" :p_productList="this.$store.getters['product/getProduct']"  ></SplideCard>
  </div>
</template>
<script>
import DetailModal from "./DetailModal.vue";
import SplideCard from "./SplideCard.vue";
export default {
  components: {
    SplideCard,
    DetailModal,
  },
  
    data() {
    return {
      ProductList: [],
    }
    },
    created() {
       this.$store.dispatch("product/LoadProduct");
    this.LoadSplide();
  },
  methods: {
    LoadSplide() {
       (this.ProductList = this.$store.getters["product/getProduct"]);
      // console.log(this.ProductList);
    },
  }
  //   Jsonproducts() {
  //   return   this.products = [
  //       {
  //         id: "1",
  //         img: "https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/5c1a069156b3e.jpg",
  //       },
  //       {
  //         id: "2",
  //         img: "https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/60b4d2f9d0672.jpg",
  //       },
  //       {
  //         id: "3",
  //         img: "https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/61c031deb16ca.jpg",
  //       },
  //       {
  //         id: "4",
  //         img: "https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/61c04aeeba355.jpg",
  //       },
  //       {
  //         id: "5",
  //         img: "https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/617f0a0563349.jpg",
  //       },
  //       {
  //         id: "6",
  //         img: "https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/617e87505b644.jpg",
  //       },
  //     ];
  //   },
  //   JsonDetailProduct() {
  //     return this.ProductInfo = [
  //       [
  //         {
  //           title: "سیب زرد ۱ کیلوگرمی ± ۸۰ گرم (تعداد تقریبی ۵ عدد)",
  //           brand: "برند پاپایا",
  //           category: "دستمال",
  //           Seller: "نام فروشنده",
  //           price: "2/350",
  //           count: "1",
  //         },
  //       ],
  //       [

  //          {name: "تازه ترین"} ,

  //           {name: "جدیدترین"},

  //           {name: "به صرفه ترین"}

  //       ],
  //       [

  //   {
  //         id: "1",
  //         img: "https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/5c1a069156b3e.jpg",
  //         decription: "فلفل دلمه سبز ۶۰۰ گرمی ± ۸۰ گرم (تعداد تقریبی ۴ عدد)",
  //         price: "۷,۷۴۰ ",
  //         counter: "1",
  //       },
  //       {
  //         id: "2",
  //         img: "https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/60b4d2f9d0672.jpg",
  //         decription: "فلفل دلمه سبز ۶۰۰ گرمی ± ۸۰ گرم (تعداد تقریبی ۴ عدد)",
  //         price: "۷,۷۴۰ ",
  //         counter: "0",
  //       },
  //       {
  //         id: "3",
  //         img: "https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/617e87505b644.jpg",
  //         decription: "فلفل دلمه سبز ۶۰۰ گرمی ± ۸۰ گرم (تعداد تقریبی ۴ عدد)",
  //         price: "۷,۷۴۰ ",
  //         counter: "3",
  //       },
  //         {
  //         id: "4",
  //         img: "https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/617f0a0563349.jpg",
  //         decription: "فلفل دلمه سبز ۶۰۰ گرمی ± ۸۰ گرم (تعداد تقریبی ۴ عدد)",
  //         price: "۷,۷۴۰ ",
  //         counter: "4",
  //       },
  //      {
  //         id: "5",
  //         img: "https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/61c04aeeba355.jpg",
  //         decription: "فلفل دلمه سبز ۶۰۰ گرمی ± ۸۰ گرم (تعداد تقریبی ۴ عدد)",
  //         price: "۷,۷۴۰ ",
  //         counter: "2",
  //       },
  //       {
  //         id: "6",
  //         img: "https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/617e8771dd471.jpg",
  //         decription: "فلفل دلمه سبز ۶۰۰ گرمی ± ۸۰ گرم (تعداد تقریبی ۴ عدد)",
  //         price: "۷,۷۴۰ ",
  //         counter: "1",
  //       },
  //       {
  //         id: "7",
  //         img: "https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/617ef4b918003.jpg",
  //         decription: "فلفل دلمه سبز ۶۰۰ گرمی ± ۸۰ گرم (تعداد تقریبی ۴ عدد)",
  //         price: "۷,۷۴۰ ",
  //         counter: "3",
  //       },
  //        {
  //         id: "8",
  //         img: "https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/61c04f1f4218f.jpg",
  //         decription: "فلفل دلمه سبز ۶۰۰ گرمی ± ۸۰ گرم (تعداد تقریبی ۴ عدد)",
  //         price: "۷,۷۴۰ ",
  //         counter: "2",
  //       },

  //    ],
  //       [
  //        {
  //         id: "1",
  //         img: "https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/5c1a069156b3e.jpg",
  //         decription: "فلفل دلمه سبز ۶۰۰ گرمی ± ۸۰ گرم (تعداد تقریبی ۴ عدد)",
  //         price: "۷,۷۴۰ ",
  //         counter: "1",
  //       },
  //         {
  //         id: "2",
  //         img: "https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/60b4d2f9d0672.jpg",
  //         decription: "فلفل دلمه سبز ۶۰۰ گرمی ± ۸۰ گرم (تعداد تقریبی ۴ عدد)",
  //         price: "۷,۷۴۰ ",
  //         counter: "0",
  //       },
  //      {
  //         id: "3",
  //         img: "https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/617e87505b644.jpg",
  //         decription: "فلفل دلمه سبز ۶۰۰ گرمی ± ۸۰ گرم (تعداد تقریبی ۴ عدد)",
  //         price: "۷,۷۴۰ ",
  //         counter: "3",
  //       },
  //         {
  //         id: "4",
  //         img: "https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/617f0a0563349.jpg",
  //         decription: "فلفل دلمه سبز ۶۰۰ گرمی ± ۸۰ گرم (تعداد تقریبی ۴ عدد)",
  //         price: "۷,۷۴۰ ",
  //         counter: "4",
  //       },
  //        {
  //         id: "5",
  //         img: "https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/61c04aeeba355.jpg",
  //         decription: "فلفل دلمه سبز ۶۰۰ گرمی ± ۸۰ گرم (تعداد تقریبی ۴ عدد)",
  //         price: "۷,۷۴۰ ",
  //         counter: "2",
  //       },
  //         {
  //         id: "6",
  //         img: "https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/617e8771dd471.jpg",
  //         decription: "فلفل دلمه سبز ۶۰۰ گرمی ± ۸۰ گرم (تعداد تقریبی ۴ عدد)",
  //         price: "۷,۷۴۰ ",
  //         counter: "1",
  //       },
  //        {
  //         id: "7",
  //         img: "https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/617ef4b918003.jpg",
  //         decription: "فلفل دلمه سبز ۶۰۰ گرمی ± ۸۰ گرم (تعداد تقریبی ۴ عدد)",
  //         price: "۷,۷۴۰ ",
  //         counter: "3",
  //       },
  //        {
  //         id: "8",
  //         img: "https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/61c04f1f4218f.jpg",
  //         decription: "فلفل دلمه سبز ۶۰۰ گرمی ± ۸۰ گرم (تعداد تقریبی ۴ عدد)",
  //         price: "۷,۷۴۰ ",
  //         counter: "2",
  //       },

  //       ]
  //     ]
  //   },
  // },
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