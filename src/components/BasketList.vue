<template>
  <div>
    <b-modal ref="ConfrimEmptyBasket" hide-footer hide-header>
      <div class="my-3">
        <div class="d-flex align-items-center">
          <div
            class="
              rounded-circle
              text-primary
              m-3
              p-2
              bg-blue
              d-flex
              justify-content-center
              align-items-center
            "
          >
            <b-icon-trash-fill
              class="fs-1 m-2"
              @click="onBtnEmptyBasketClick()"
              aria-hidden="true"
            >
            </b-icon-trash-fill>
          </div>
          <div>
            <strong>خالی کردن سبد خرید</strong>
            <p>آیا از خالی کردن سبد خرید اطمینان دارید؟</p>
          </div>
        </div>

        <b-button
          class="float-start me-3"
          variant="primary"
          block
          @click="onBtnEmptyBasketClick()"
        >
          بله حذف شود</b-button
        >
        <b-button
          variant="outline-secondary  float-start "
          block
          @click="onBtnCancelClick()"
        >
          لغو</b-button
        >
      </div>
    </b-modal>

    <b-sidebar
      id="sidebar-basketlist"
      class="bg-white"
      no-header
      backdrop
      shadow
    >
      <template #default="{ hide }">
        <div class="position-fix top-0 pt-0 shadow-bascket">
          <div class="d-flex border-bottom justify-content-between">
            <div class="d-flex align-items-center">
              <b-skeleton-wrapper :loadingSkeleton="loadingSkeleton">
                <template #loadingSkeleton>
                  <b-skeleton class="my-2" width="100px"></b-skeleton>
                </template>
                <b class="px-2 form-small">سبد خرید من </b>

                <div>
                  <small @click="onBtnCancelClick()"
                    >کالا
                    <b-icon
                      icon="trash"
                      class="text-Primary"
                      aria-hidden="true"
                    >
                    </b-icon>
                  </small>
                </div>
              </b-skeleton-wrapper>
            </div>
            <b-skeleton-wrapper :loadingSkeleton="loadingSkeleton">
              <template #loadingSkeleton>
                <b-skeleton-icon icon="x"></b-skeleton-icon>
              </template>
              <button type="button" class="btn" @click="hide">
                <b-icon
                  icon="x"
                  variant="primary"
                  aria-hidden="true"
                  class="fs-1"
                ></b-icon>
              </button>
            </b-skeleton-wrapper>
          </div>
          <b-skeleton-wrapper :loadingSkeleton="loadingSkeleton">
            <template #loadingSkeleton>
              <b-skeleton class="py-4 px-0" width="300px"></b-skeleton>
            </template>
            <div
              class="py-4 px-0 text-center text-success"
              v-if="showMsgBasket"
            >
          {{ headerTop }}
            </div>
          </b-skeleton-wrapper>
        </div>

        <div class="py-4 px-0 text-center mt-5" v-if="showIconBasketEmpty">
          <div class="mt-5">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 588.000000 378.000000"
              preserveAspectRatio="xMidYMid meet"
              class=""
            >
              <g
                transform="translate(0.000000,378.000000) scale(0.100000,-0.100000)"
                stroke="none"
              >
                <path
                  class="sleepy-z"
                  d="M2740 3150 c0 -18 7 -20 70 -20 40 0 70 -4 70 -10 0 -5 -34 -55 -75 -111 -41 -55 -75 -107 -75 -115 0 -11 22 -14 115 -14 96 0 115 3 115 15 0 18 2 17 -83 20 -37 1 -70 5 -74 8 -3 4 29 52 71 107 42 56 76 110 76 121 0 18 -8 19 -105 19 -98 0 -105 -1 -105 -20z"
                ></path>
                <path
                  class="sleepy-z"
                  d="M3310 2575 c0 -12 13 -15 55 -15 30 0 55 -2 55 -5 0 -3 -27 -42 -60 -87 -33 -44 -60 -84 -60 -89 0 -5 41 -9 90 -9 73 0 90 3 90 15 0 12 -14 15 -65 15 l-66 0 61 79 c33 44 60 87 60 95 0 13 -14 16 -80 16 -64 0 -80 -3 -80 -15z"
                ></path>
                <path
                  class="sleepy-z"
                  d="M2640 2286 c0 -10 14 -16 45 -18 l46 -3 -46 -63 c-59 -81 -55 -94 27 -90 78 4 95 28 19 28 -28 0 -51 3 -51 6 0 3 20 32 45 64 62 81 60 90 -20 90 -50 0 -65 -3 -65 -14z"
                ></path>
                <path
                  class="sleepy-z"
                  d="M3065 1770 c3 -5 17 -10 31 -10 31 0 30 -4 -4 -49 -49 -62 -49 -61 14 -61 59 0 66 15 11 22 l-29 3 29 40 c49 67 49 65 -7 65 -32 0 -49 -4 -45 -10z"
                ></path>
                <path
                  class="empty-box"
                  d="M1273 1963 c-38 -15 -7 -54 232 -293 l245 -245 0 -630 c0 -478 3 -634 12 -643 9 -9 327 -12 1370 -12 1332 0 1357 0 1368 19 6 13 10 233 10 643 l0 624 225 224 c124 124 228 233 231 243 3 10 0 25 -7 33 -10 12 -86 14 -553 12 l-541 -3 -225 -227 -224 -228 -396 0 -396 0 -244 245 -244 245 -426 -1 c-234 0 -431 -3 -437 -6z m1080 -301 l237 -238 -3 -604 -2 -605 -382 -3 -383 -2 0 600 0 600 254 0 c271 0 292 4 262 46 -13 18 -32 19 -278 22 l-263 3 -202 202 c-112 111 -203 205 -203 209 0 5 163 8 363 8 l363 0 237 -238z m2487 201 c0 -4 -84 -92 -187 -195 l-187 -188 -476 0 -475 0 195 195 195 195 467 0 c258 0 468 -3 468 -7z m-402 -1055 l2 -598 -895 0 -895 0 0 593 c0 327 3 597 7 600 3 4 405 6 892 5 l886 -3 3 -597z"
                ></path>
                <path
                  class="empty-box"
                  d="M3224 1086 c-14 -35 57 -96 111 -96 28 0 101 45 110 69 11 27 -13 36 -37 14 -58 -53 -89 -54 -135 -8 -40 40 -42 40 -49 21z"
                ></path>
                <path
                  class="empty-box"
                  d="M3738 1065 c-46 -43 -67 -44 -111 -5 -40 35 -57 38 -57 10 0 -25 74 -80 107 -80 51 0 129 62 117 93 -9 23 -14 22 -56 -18z"
                ></path>
                <path
                  class="empty-box"
                  d="M3410 706 c-57 -16 -122 -50 -140 -71 -27 -33 9 -34 71 -3 118 58 224 58 352 0 55 -25 68 -28 77 -17 9 11 5 18 -22 35 -97 59 -243 84 -338 56z"
                ></path>
                <path
                  class="empty-box"
                  d="M154 196 c-3 -8 -4 -23 -2 -33 3 -17 20 -18 224 -21 184 -2 223 0 233 12 9 11 10 20 1 35 -10 20 -19 21 -231 21 -182 0 -221 -2 -225 -14z"
                ></path>
                <path
                  class="empty-box"
                  d="M739 194 c-9 -11 -10 -20 -2 -32 9 -15 48 -17 419 -17 l409 0 0 30 0 30 -406 3 c-362 2 -408 0 -420 -14z"
                ></path>
                <path
                  class="empty-box"
                  d="M4661 196 c-9 -11 -10 -20 -1 -35 11 -21 16 -21 474 -21 499 0 503 0 476 49 -11 21 -16 21 -474 21 -391 0 -465 -2 -475 -14z"
                ></path>
              </g>
            </svg>
          </div>
          <div>{{ msgEmptyBasket.text }}</div>
        </div>
        <div class="margincontent">
          <div class="bg-white p-3">
            <b-button
              variant="outline-danger"
              @click="insertByList()"
              class="px-2 my-3"
            >
              <b-icon icon="cart-plus"></b-icon> افزودن لیست خرید
            </b-button>
          </div>
          <b-list-group>
            <div v-if="showCardAfterRemove" class="pe-0">
              <!------------------Start Component Product-------------------------->

              <VerticalPanelList
                :p_productList="basketList"
                :p_cardSize="12"
                :p_showBtnAddToBasket="false"
                :P_showTypeBasketPagination="showTypePagination"
                :p_colSizeBasketList="true"
                :p_statusbasketlist="true"
              >
              </VerticalPanelList>

              <!-------------------End Component Product------------------------->
            </div>
          </b-list-group>
        </div>

        <div class=" bg-white fixed-bottom" v-if="showMsgBasket">
          <b-skeleton-wrapper :loadingSkeleton="loadingSkeleton">
            <template #loadingSkeleton>
              <b-skeleton class="position-fix"></b-skeleton>
            </template>
            <div class="p-2 text-center alarm-footer">
              {{ alarmFooter}}
            </div>

            <b-button block class="green mt-2 border-0 w-100">
              <div class="d-flex justify-content-between align-items-center">
                <div v-if="login">ورود /عضویت</div>
                <div>
                  <b-button variant="success" class="p-1 form-small"
                    >{{ totalPrice }} تومان</b-button
                  >
                </div>
              </div>
            </b-button>
          </b-skeleton-wrapper>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>

import VerticalPanelList from '@/components/VerticalPanelList.vue'
import { skeleten } from "../mixins/myMixin";

export default {
  mixins: [ skeleten],
  components: {
  VerticalPanelList
  },

  created() {
    this.loadBasketList();
    this.GetuserInfo();
    this.totalValueInBasket();
    this.loadnumproductCount();
  // this.getTotalProduct();

    this.loadAlarmFooter();
    this.loadheaderTop();

      this.totalProduct=this.$store.getters["product/getTotalProduct"]
  },

  data() {
    return {
      basketList: [],
      alarmFooter:"",
      showCardAfterRemove: true,
      totalPrice: 0,
     totalProduct:"0",
      showIconBasketEmpty: false,
      showMsgBasket: true,
      loadingSkeleton: false,
      msgEmptyBasket: [],
      headerTop:"",
      login: true,
      userInfo: [],
      showTypePagination: 1,
      buyList:[]
    };
  },


  computed: {
    // getTotalProduct () {
    // return this.$store.getters["product/getTotalProduct"] 
    // },

   



    
  },
  methods: {

    loadBasketList() {
      
      this.$store.dispatch({
        type: 'product/LoadProduct',
       });

  //  this.basketList = this.$store.getters["product/getProduct"];
  this.basketList =this.$store.state.product.product.filter(obj => obj.Reserved==true);
  
    },

     //     onBtnEmptyBasketClick() {
    //   // this.showCardAfterRemove = false;


    //        this.$store.dispatch("product/emptyallbasketlist");
         
    //     for(var i=0;i<this.$store.state.product.product.length;i++)
      
    //   {
    //     if(this.$store.state.product.product[i]['Reserved']== true)
    //     {this.$store.state.product.product[i]['Reserved']=false;
    //      }
      

    //   }


    //   this.$store.state.product.totalproduct = 0;
    //   //فراخوانی سرویس برای حذف کالا در قسمت سرور
    //   this.$refs["ConfrimEmptyBasket"].hide();
    //   // this.showIconBasketEmpty = true;
    //   this.showMsgBasket = false;
    //   // return (this.msgEmptyBasket = {
    //   //   text: "سبد خرید شما خالی است ",
    //   // });
    //   return  loadBasketList;
    // },


 

    totalValueInBasket() {
      this.totalPrice = "1,800,200 ";
      this.totalProduct = "0";
      //  for(var i=0;i<this.$store.state.product.product.length;i++)
      
      // {
      //   if(this.$store.state.product.product[i]['Reserved']== true)
      //   {
          
      //             {this.totalPrice=parseInt(this.$store.state.product.product[i]['Price'])+
      //   parseInt(this.totalPrice);}
      //   return  this.totalPrice;
      //   // console.log(parseInt(this.$store.state.product.product[i]['Price']));
    
      //    }
      // }
  },


    loadnumproductCount() {
      this.numproductCount = 1;
    },
       loadAlarmFooter() {
   this.$store.dispatch("product/loadTextFooterBasketList");
   this.alarmFooter=this.$store.getters["product/geTextFooterBasketList"][0]['text'];
    //  return (this.alarmFooter = {
    //     text: "سبد خرید شما نیاز به ویرایش دارد ",
    //   });
    },
     loadheaderTop() {
        this.$store.dispatch("product/loadTextHeaderBasketList");
         this.headerTop=this.$store.getters["product/geTextHeaderBasketList"][0]['text'];
      
      //    return (this.headerTop = {
      //   text: "هزینه ارسال رایگان خواهد بود ",
      // });
    },
//  loadBasketList() {
//       return (this.basketList = [
//         {
//           id: "0",
//           images: "https://picsum.photos/250/250/?image=1",
//           name: " سیب زرد ۱ کیلوگرمی ± ۸۰ گرم (تعداد تقریبی ۵ عدد) ",
//           Price: "5,600 ",
//           discount: "13%",
//           priceDiscount: "4,600",
//           Count: " 7",
//           Flag: false,
//         },
//         {
//           id: "1",
//           images: "https://picsum.photos/250/250/?image=59",
//           name: " سیب زرد ۱ کیلوگرمی ± ۸۰ گرم (تعداد تقریبی ۵ عدد) ",
//           Price: "5,600 ",
//           discount: "13%",
//           priceDiscount: "4,600",
//           Count: " 7",
//           Flag: false,
//         },
//         {
//           id: "2",
//           images: "https://picsum.photos/250/250/?image=59",
//           name: " سیب زرد ۱ کیلوگرمی ± ۸۰ گرم (تعداد تقریبی ۵ عدد) ",
//           Price: "5,600 ",
//           discount: "13%",
//           priceDiscount: "4,600",
//           Count: " 7",
//           Flag: false,
//         },
//         {
//           id: "3",
//           images: "https://picsum.photos/250/250/?image=59",
//           name: " سیب زرد ۱ کیلوگرمی ± ۸۰ گرم (تعداد تقریبی ۵ عدد) ",
//           Price: "5,600 ",
//           discount: "13%",
//           priceDiscount: "4,600",
//           Count: " 7",
//           Flag: false,
//         },
//         {
//           id: "4",
//           images: "https://picsum.photos/250/250/?image=59",
//           name: " سیب زرد ۱ کیلوگرمی ± ۸۰ گرم (تعداد تقریبی ۵ عدد) ",
//           Price: "5,600 ",
//           discount: "13%",
//           priceDiscount: "4,600",
//           Count: " 7",
//           Flag: false,
//         },
//         {
//           id: "5",
//           images: "https://picsum.photos/250/250/?image=59",
//           name: " سیب زرد ۱ کیلوگرمی ± ۸۰ گرم (تعداد تقریبی ۵ عدد) ",
//           Price: "5,600 ",
//           discount: "13%",
//           priceDiscount: "4,600",
//           Count: " 7",
//           Flag: false,
//         },
//         {
//           id: "6",
//           images: "https://picsum.photos/250/250/?image=59",
//           name: " سیب زرد ۱ کیلوگرمی ± ۸۰ گرم (تعداد تقریبی ۵ عدد) ",
//           Price: "5,600 ",
//           discount: "13%",
//           priceDiscount: "4,600",
//           Count: " 7",
//           Flag: false,
//         },
//         {
//           id: "7",
//           images: "https://picsum.photos/250/250/?image=59",
//           name: " سیب زرد ۱ کیلوگرمی ± ۸۰ گرم (تعداد تقریبی ۵ عدد) ",
//           Price: "5,600 ",
//           discount: "13%",
//           priceDiscount: "4,600",
//           Count: " 7",
//           Flag: false,
//         },
//       ]);
//         // return  this.$store.getters["product/getProductBasketList"];
//     },
    insertByList() {
     
           this.$store.dispatch("buyList/loadBuyList");
                 this.buyList =  this.$store.getters["buyList/getBuyList"];
             
      for (var i = 0; i < this.buyList.length; i++) {
        this.basketList.push(this.buyList[i]);
           
      }
     


    },


    GetuserInfo() {
      this.userInfo = [
        {
          userInfo: "yes",
        },
      ];

      if (this.userInfo.userInfo == "yes") {
        this.login == true;
      } else {
        this.login == false;
      }
    },



    onBtnCancelClick() {
  
      this.$refs["ConfrimEmptyBasket"].toggle("#toggle-btn");
    },


  },
};
</script>

<style>
.header-basket-slide {
  z-index: 200;
  box-shadow: rgb(0 0 0 / 16%) 0px 0.2rem 1.5rem 0.2rem;
}
.border-botoom-basket {
  border: 0px !important;
  border-bottom: 0.1rem solid rgb(244, 244, 244) !important;
}

.alarm-footer {
  background-color: rgb(255, 246, 245);
  border-color: rgb(255, 246, 245);
  color: rgb(255, 54, 67);
  text-align: center;
  display: inline-block;
  margin: 0px;
  padding: 0.7rem 0.7rem 0.6rem;
  width: 100%;
  line-height: 1.5rem;
  vertical-align: middle;
  border: 0.1rem solid transparent;

  border-radius: 0.5rem;
}

.position-fix {
  width: 100%;
  background-color: rgb(255, 255, 255);
  padding: 0.8rem;
  border-top: 0.1rem solid rgb(244, 244, 244);
  flex: 0 0 auto;
  position: fixed;
  z-index: 20000;
}

.bg-blue {
  background: rgb(242, 247, 255);
}

.margincontent {
  margin-top: 110px;
  margin-bottom: 100px;
  overflow: hidden;
}
.shadow-bascket {
  box-shadow: rgb(0 0 0 / 16%) 0px 0.2rem 1.5rem 0.2rem;
}
</style>