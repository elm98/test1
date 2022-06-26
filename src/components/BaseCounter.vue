<template>
  <div>
    <div v-if="showAddToBasketButton">
      <b-button
        class="
          text-nowrap text-primary
          btn-outline-primary
          rounded-custom
          hover-primary
        "
        variant="outline-light  border-custom   fs-12"
        @click="onBtnAddToBasketClick()"
        >افزودن به سبد
      </b-button>
    </div>
    <div
      cols
      lg="12"
      class="d-flex align-items-center"
      v-if="!showAddToBasketButton"
    >
      <b-col class="d-flex align-items-center py-1 col-12  px-0 mx-0">
        <div class="d-flex align-self-center">
          <b-icon-dash-circle
            scale="1.5"
                  @click="onBtnDecClick(p_Products.Id,p_Products.Index)"
            v-if="showDecButton"
            class="text-primary icon-trash counter-blue"
          ></b-icon-dash-circle>

          <b-icon-trash
            class="text-primary"
            v-if="showTrashButton"
          @click="onBtnRemoveClick(p_Products.Id,p_Products.Index)"
          ></b-icon-trash>
        </div>
        <div class="text-center conyer-modal" style="width: 36px">

          {{  this.$store.getters["product/getProduct"][p_Products.Index]['SelectCount'] }}
        </div>
        <div class="d-flex align-self-center">
          <b-icon-plus-circle
            scale="1.5"
             @click="onBtnAddClick(p_Products.Id ,p_Products.Index )"
            class="text-primary counter-blue"
          ></b-icon-plus-circle>
        </div>
        <div class="d-flex align-self-center mr-3 mb-1">
          <span
            @click="onBtnReserveClick(p_Products.Id)"
            class="rounded-circle span-check"
            :class="{
              'bg-white': setCheckIconBgToWhiteColor,
            }"
          >
            <b-icon-check-circle
              scale="1.5"
        
              class="bg-white  text-success"
                    :class="{
                'active-checked': setCheckIconTexColor,
                
              }"
          
            ></b-icon-check-circle>
          </span>
        </div>
      </b-col>
    </div>
  </div>
</template>

<script>
export default {
  // emits: [],

  props: ["p_Products"],

  data() {
    return {
      showAddToBasketButton: false,
      setCheckIconBgToGreenColor: true,
      setCheckIconBgToWhiteColor: true,
      showTrashButton: false,
      showDecButton: true,
      setCheckIconTexColor: true,
      productCount:''
    };
  },

  created(){
        this.$store.dispatch("product/LoadProduct");

      
  },
 watch(){
   return  this.$store.getters["product/getProduct"][this.p_Products.Index]['SelectCount'];
 },
  methods: {
    
    onBtnDecClick(id,indexarray)  {
  this.$store.dispatch({
        type: 'product/SetDecreseProductCount',
        index: [id,indexarray],
      });


       if( this.$store.getters["product/getProduct"][this.p_Products.Index]['SelectCount'] == 1 )
        {       this.showTrashButton = true;
        this.showDecButton= false;
       
       
        }
      // this.showAddToBasketButton = true;
      this.setCheckIconBgToGreenColor = false;
      this.setCheckIconBgToWhiteColor = false;
      this.setCheckIconTexColor = false;
   
 if (this.productCount == 1) {
        this.showTrashButton = true;
        this.showAddToBasketButton = true;
        return false;
      }
    
    },

     onBtnAddClick(id,indexarray) {
    
      //   for(var i=0;i<this.$store.state.product.product.length;i++)
      // // console.log(this.$store.state.product.product[i]['Id']);
      // {
 
       this.$store.dispatch({
        type: 'product/SetIncreseProductCount',
        index: [id,indexarray],
      });
          
      // }
      this.setCheckIconBgToGreenColor = false;
      this.setCheckIconBgToWhiteColor = false;
      this.setCheckIconTexColor = false;
      this.showDecButton = true;
      this.showDecButton = true;
      this.showTrashButton = false;
      // this.productCount++;
        // this.productCount =  this.$store.getters["product/getProduct"];
      this.showAddToBasketButton = false;
      // if (this.productCount == 1) {
      //   this.showTrashButton = false;
      //   return;
      // }
    },

    onBtnAddToBasketClick() {
      this.setCheckIconBgToGreenColor = false;
      this.setCheckIconBgToWhiteColor = false;
      this.setCheckIconTexColor = false;
      this.showDecButton = true;
      this.showTrashButton = false;
 
      this.showAddToBasketButton = false;
      if (this.productCount == 1) {
        this.showTrashButton = false;
        return;
      }
    },
    onBtnRemoveClick(id,indexarray)  {
     this.$store.dispatch({
        type: 'product/SetRemoveProductCount',
           index: [id,indexarray],
      });
      //  this.productCount=0;
      //  this.$store.state.product.totalproduct=0;
      //   for(var i=0;i<this.$store.state.product.product.length;i++)
      // // console.log(this.$store.state.product.product[i]['Id']);
      // {
      //   if(this.$store.state.product.product[i]['Reserved']== true)
      //   {this.$store.state.product.totalproduct=parseInt(this.$store.state.product.product[i]['SelectCount'])+
      //   parseInt(this.$store.state.product.totalproduct);}

      // }
      //  console.log("removebasecounter"+this.$store.state.product.totalproduct);
      // this.showTrashButton = false;
      // this.showAddToBasketButton = true;
      // this.setCheckIconBgToGreenColor = false;
      // this.setCheckIconBgToWhiteColor = false;
      // this.setCheckIconTexColor = false;
    },

    onBtnReserveClick(id) {
  this.$store.dispatch({
        type: 'product/LoadCheckedProductCount',
        index: [id],
      });
      this.$store.state.product.totalproduct=0;
        for(var i=0;i<this.$store.state.product.product.length;i++)
      // console.log(this.$store.state.product.product[i]['Id']);
      {
        if(this.$store.state.product.product[i]['Reserved']== true)
        {this.$store.state.product.totalproduct=parseInt(this.$store.state.product.product[i]['SelectCount'])+
        parseInt(this.$store.state.product.totalproduct);}

      }
      //  console.log("basecounter"+this.$store.state.product.totalproduct);
      this.setCheckIconBgToGreenColor = true;
      this.setCheckIconBgToWhiteColor = true;
      this.setCheckIconTexColor = true;
    },


  },

};
</script>
<style scoped>
   .active-checked{
background-color: #28a745  !important;
    color: #f9fbf9 !important;
    border-radius: 100%;
    transform: scale(1.5);
   } 
</style>
