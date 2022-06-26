<template>
  <div >
    <b-modal id="bv-modal-example" size="xl" scrollable hide-footer   dir="rtl" >
      <template #modal-header="{ close }" >
        <b-breadcrumb class="fs-14 breadcrub-icon" dir="ltr" style="">
          <b-breadcrumb-item active        v-for="(breadcrub,index) in ProductInfo[1]"
        :key="index" >{{breadcrub.name}}</b-breadcrumb-item>

          <b-breadcrumb-item active>
            فروشگاه
            <b-icon
              icon="house-fill"
              scale="1.25"
              shift-v="1.25"
              aria-hidden="true"
            ></b-icon>
          </b-breadcrumb-item>
        </b-breadcrumb>

        <b-icon-x class="fs-1" @click="close()"></b-icon-x>
      </template>

      <b-row  >
        <b-col cols  lg="6"  sm="12"   class="px-lg-5  position-absolute  d-flex"  style="z-index: 2;">
           <b-col cols="6"  > <LikeProduct></LikeProduct></b-col>
            <b-col cols="6"   class="left-0" > <AddlistBuy  @addallFavorites="addallFavorites($event)"></AddlistBuy></b-col>
    </b-col>
        <b-col cols lg="6" sm="12" class="my-2 position-relative  ">
          <b-img
            id="myimage"
            thumbnail
            fluid
            center
            @mouseleave="activezoom = false"
            width="450"
            height="450"
            @mousemove="imageZoom('myimage', 'myresult')"


            :src="getDetailProductInfoimage"
            alt="Image 1"
          ></b-img>
 <b-col cols lg="9" sm="6" class="my-2 position-relative">
          <SplideThumbsCard    @changeimagethumb="changeimagelarg($event)"
            :ProductsImage="this.ProductInfo[3]"
          ></SplideThumbsCard>
 </b-col>
          <!-- <SplideCard :detailproducts="ProductInfo[2]"  :countsplide="countsplide" ></SplideCard> -->
        </b-col>
        <b-col cols lg="6" sm="12" class="my-3     text-right">

          <div
            id="myresult"
            class="img-zoom-result border-custom"
            thumbnail
            fluid
            center
            v-show="activezoom"
          ></div>
          <b-col class="mb-5  d-flex  justify-content-between"
            ><h6>
              <strong>{{ getDetailProductInfotitle}}</strong></h6
          >
         </b-col>
          <b-col class="my-3"
            >برند:<a class="text-decoration-none"  :href=" ProductInfo[0][0].link "
              ><strong>{{ getDetailProductInfobrand }} </strong>
            </a></b-col
          >
          <b-col class="my-3">
            دسته بندی:<a class="text-decoration-none"   :href=" ProductInfo[0][0].link " >
              {{ ProductInfo[0][0].brand }}</a
            ></b-col
          >
          <b-col class="my-2"
            > فروشنده :<a class="text-decoration-none" :href=" ProductInfo[0][0].link ">
              {{ getDetailProductInfoseler}}
            </a></b-col
          >
          <b-col class="border-dash my-2">
            <b-badge
              class="bg-light rounded-circle p-3 my-3 mx-2 text-dark  text-decoration-none"
              v-for="(tag,index) in ProductInfo[2]"
              :key="index"
              :href=" ProductInfo[2][index].link "
              >{{ tag.name }}</b-badge
            ></b-col
          >


          <b-row    class="d-flex  align-items-center">
            <b-col
              class="
                col-lg-6 col-sm-3
                my-2
                d-flex
                flex-column
                align-items-baseline
              "
            >
              <div class="d-flex flex-wrap col">
                <div class="d-flex align-items-center">
                  <span class="badge p-2 bg-danger m-2 badge-danger">{{ ProductInfo[0][0].pricePercentage }} </span
                  ><span
                    class="
                      form-small
                      text-Secondary text-decoration-line-through
                    "
                  >
                   {{ ProductInfo[0][0].priceoff }} </span
                  ><small class="text-decoration-line-through"></small>
                </div>
              </div>
              <div class="d-flex justify-content-end text-secondary fs-12">
                {{ ProductInfo[0][0].price }} تومان
              </div></b-col
            >
            <b-col class="col-lg-6 col-sm-3  ps-5   d-flex justify-content-end ">
          

            </b-col>
          </b-row>
        </b-col>
      </b-row>

      <b-row  
        v-for="productCategory in ProductInfo[4]"
        :key="productCategory.id"
      >

        <SplideCard
          :p_productList="productCategory.products"
          :p_categoryName="productCategory.categoryName"
        ></SplideCard>
      </b-row>
    </b-modal>
  </div>
</template>
<script>
import SplideCard from "./SplideCard.vue";
import SplideThumbsCard from "./SplideThumbsCard.vue";

import LikeProduct from "./LikeProduct.vue";
import AddlistBuy from "./AddToBuyListButton.vue";
export default {

  components: {
    SplideThumbsCard,
    SplideCard,
  
    AddlistBuy,
    LikeProduct
  },



  data() {
    return {
      Favorites:[],
      ProductInfo: [],
      activezoom: false,
      statusbasket: true,
      thumbimage: "",
    }

  },
  created() {    
    this.addallFavorites();
    this.loadlistshop();
    this.getProductInfo();
        this.$store.dispatch("product/LoadFullProductInfo");
        // console.log(productCategory.products[0]);
       
  },

 computed: {
    getDetailProductInfotitle () {
// this.$store.state.product.DetailProductInfo.title
return this.$store.state.product.DetailProductInfo.title;
    } ,
        getDetailProductInfobrand () {
// this.$store.state.product.DetailProductInfo.title
return this.$store.state.product.DetailProductInfo.brand;
    } 
    ,
        getDetailProductInfoimage () {
// this.$store.state.product.DetailProductInfo.title
return this.$store.state.product.DetailProductInfo.image;
    }     ,
        getDetailProductInfoseler () {
// this.$store.state.product.DetailProductInfo.title
return this.$store.state.product.DetailProductInfo.seller;
    } 
  },

  methods: {

addallFavorites(event){
      if (event== 'truelistshop') {

this.listshop.push(this.ProductInfo[0]);


 }
       if (event== 'falselistshop') {

this.listshop.pop(this.ProductInfo[0]);


 }
},

loadlistshop() {
this.listshop = this.$store.getters["product/getListShop"];
},

getProductInfo() {
this.ProductInfo = this.$store.getters["product/getProductInfo"];
console.log('deatil'+this.ProductInfo);
},

     imageZoom(imgID, resultID) {

       this.activezoom=true;
  var img, lens, result, cx, cy;
  img = document.getElementById(imgID);
  result = document.getElementById(resultID);
  /*create lens:*/
  lens = document.createElement("DIV");
  lens.setAttribute("class", "img-zoom-lens");
  /*insert lens:*/
  img.parentElement.insertBefore(lens, img);
  /*calculate the ratio between result DIV and lens:*/

  cx = result.offsetWidth / lens.offsetWidth;
  cy = result.offsetHeight / lens.offsetHeight;
  /*set background properties for the result DIV:*/
  result.style.backgroundImage = "url('" + img.src + "')";
  result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
  /*execute a function when someone moves the cursor over the image, or the lens:*/
  lens.addEventListener("mousemove", moveLens);
  img.addEventListener("mousemove", moveLens);

  function moveLens(e) {
    var pos, x, y;
    /*prevent any other actions that may occur when moving over the image:*/
    e.preventDefault();
    /*get the cursor's x and y positions:*/
    pos = getCursorPos(e);
    /*calculate the position of the lens:*/
    x = pos.x - (lens.offsetWidth / 2);
    y = pos.y - (lens.offsetHeight / 2);
    /*prevent the lens from being positioned outside the image:*/
    if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
    if (x < 0) {x = 0;}
    if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
    if (y < 0) {y = 0;}
    /*set the position of the lens:*/
    lens.style.left = x + "px";
    lens.style.top = y + "px";
    /*display what the lens "sees":*/
    result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
  }
  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /*get the x and y positions of the image:*/
    a = img.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
},
    changeimagelarg(changeimage)
   {

  this.thumbimage=changeimage;
      }
  },


};
</script>
<style>
.img-zoom-container {
  position: relative;
}



.img-zoom-lens {
  position: absolute;

  /*set the size of the lens:*/
  width: 40px;
  height: 40px;
}

.img-zoom-result {
  border: 1px solid #d4d4d4;
  /*set the size of the result div:*/
  width: 300px;
  height: 300px;
  border-radius: 5%;
  margin-top:-5px ;
}

.modal-dialog-scrollable .modal-body {
    overflow-y: auto;
    overflow-x: hidden;
}
</style>
