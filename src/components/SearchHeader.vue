
<template>
  <b-row class="d-flex  justify-content-center"   >
    <b-col  lg="6" cols="12"  class="px-5  d-flex  justify-content-center"       >
      <!----------------------- ICON SEARCH----------------------------->
      <b-col class="icon-search-input"   @click="clickClearSearch()"   >
         <b-icon
          icon="x"
          scale="1.5"
          style="display: none;z-index: 20000;"
          :class="{ showicon: !hideIconActive }"
          class="form-control-feedback  position-absolute  position-icon"
        
    
          
         
        >
        </b-icon
      ><b-icon-search
          scale="1"
          class="form-control-feedback  icon-position"
          style="display: none"
          :class="{ showicon: hideIconActive }"
    
       
        
        ></b-icon-search>
       </b-col>

      <b-col class="form-group   my-2  pt-4  position-absolute">
        <!-----------------------INPUT SEARCH----------------------------->
        <input
          type="text"
          class="
            form-control

            text-indent text-muted
            fs-14
        

          "
           ref="inputsearch"
           :class="{ 'rounded-input-search': roundedinputsearch ,'rounded-custom': roundedinput,'text-indent-tow':activeindent ,'noborder-search':noneborder }"
          @keyup="SearchChar()"
          
          @blur="Radiussearch()"
          placeholder="جستجوی برند یا محصول"
          v-model="valuesearch"
          autofocus

        />
        <!-----------------------ERRORE  SEARCH----------------------------->

        <!-----------------------DROPDOWN SEARCH----------------------------->
        <b-col v-if="showdiv"  class="rounded-dropdown-search" >
         <a
              class="text-wrap text-decoration-none"

              href="https://www.google.com/"
            > <b-col class="text-muted fs-14 text-wrap p-2 px-2 bg-white  displynone  "    :class="{ showicon: !showiconactive }" >
            <b-icon-search scale="1"></b-icon-search>
               نتایج جستجو "{{
                valuesearch
              }}"

          </b-col>      </a>
          <b-col
            class="fs-12 p-2 mx-0 bg-light displynone  text-muted "
            :class="{ showicon: showiconactive }"
            >نتایج مرتبط</b-col
          >
          <b-col
            class="displynone bg-white"
            :class="{ showicon: showiconactive }"
            v-for="searchProducts in searchProduct"
            :key="searchProducts.Id"
            v-bind:value="searchProducts.category"
          >
            <a
              href="https://www.google.com/"
              class="text-decoration-none text-muted fs-14 px-2"
            >
              <b-icon-columns-gap aria-hidden="true"></b-icon-columns-gap>
              {{ searchProducts.Name }}  در دسته {{searchProducts.category }}
            </a>
          </b-col>
        </b-col>
      </b-col>
    </b-col>
  </b-row>
</template>


<script>
export default {
  data() {
    return {
      showdiv: false,
      hideIconActive: true,
      showiconactive: false,
      valuesearch: "",
activeindent:false,
      roundedinputsearch:false,
      roundedinput:true,
      noneborder:false,
      countries: [],
    };
  },


  methods: {
    //  متد اصلی برای بررسی تعداد کاراکتر و نمایش نتیجه سرچ و تغییر آیکون ها

    Radiussearch(){
  this.roundedinputsearch=false;
  this.roundedinput=true;
     this.hideIconActive = true;
          this.showiconactive = false;
           

    },
        //  متد تغییر آیکون ها و حذف کاراکتر های تگ فرم و حذف دراپ دون
    clickClearSearch() {
      this.valuesearch = "";
    this.$refs.inputsearch.focus();

    
    },
    SearchChar() {
      this.hideIconActive = false;
      this.showiconactive = true;
      this.showdiv = true;
      this.roundedinputsearch = true;
      this.roundedinput=false;
      this.noneborder=true;
      
      

        if(this.valuesearch == "")
 
      { this.showdiv = false;
        this.hideIconActive = true;
         }

      if (this.valuesearch.length > 25) {
this.activeindent=true;
        this.showdiv = false;
      }
      else
{this.activeindent=false;
 this.roundedinput=true;
}



       let searchProductjson =this.$store.getters["product/getProduct"];
   

      this.searchProduct = searchProductjson.filter(obj => obj.Name.includes((this.valuesearch)));
   
   },

  },
};
</script>

<style>
.serch {
  background: #ffffff !important;
  position: relative;
  z-index: -2;
  margin-top: -15px;
  padding-top: 20px;
  border: 1px solid rgb(218, 218, 218);
}


.icon-position{
    position: absolute;
    right: -8px;
    top: 37px;
}
.showicon {
  display: block !important;
}
.displynone {
  display: none;
}
.margin-button{
  margin-bottom: 20px;
}
.noborder-search{
  border: 0px !important;
}
.search {
  padding: 10px 0px;
  margin: -20px 0px 0px;
  background: rgba(255, 255, 255, 0);
}
a {
  cursor: pointer !important;
}

.icon-search-input {
  position: absolute;
  color: #8f8b8b;
  z-index: 20;
  font-size: 40px;
}

.rounded-dropdown-search{

    padding-top: 20px;
    background: rgb(255, 255, 255);
    position: absolute;
    margin-top: -20px;
    z-index: -10;
    border: 1px solid #ced4da;
    border-bottom-right-radius: 25px;
    border-bottom-left-radius: 25px;
}
.rounded-input-search{
border-radius: 15px  15px 0px 0px!important;

}
.rounded-custom{border-radius: 15px !important;}

  .rounded-dropdown-search {
        width: 539px;
}

@media  only screen and (max-width: 1024px) {
  .rounded-dropdown-search {
        width: 539px;
}
}
@media  only screen and (max-width: 912px) {
  .rounded-dropdown-search {
        width: 695px;
}
}
@media  only screen and (max-width: 820px) {
  .rounded-dropdown-search {
        width: 695px;
}
}
@media  only screen and (max-width: 540px) {
  .rounded-dropdown-search {
        width: 491px;
}
}
@media  only screen and (max-width: 414px) {
  .rounded-dropdown-search {
        width: 366px;
}
}


@media  only screen and (max-width: 412px) {
  .rounded-dropdown-search {
        width: 363px;
        position: absolute;
}
}

@media  only screen and (max-width: 393px) {
  .rounded-dropdown-search {
        width: 343px;
}
}

@media  only screen and (max-width: 390px) {
  .rounded-dropdown-search {
        width: 341px;
}
}

@media  only screen and (max-width: 375px) {
  .rounded-dropdown-search {
        width: 327px;
}
}
@media  only screen and (max-width: 360px) {
  .rounded-dropdown-search {
        width: 336px;
}
}


@media  only screen and (max-width: 350px) {
  .rounded-dropdown-search {
        width: 252px;
          position: absolute;
}
}

#heightafterscroll .form-control:focus{
  padding-right: 10px;
}
.text-indent-tow{
 padding-right:35px  !important;
}
.position-icon{
    top: 37px;
    right: -14px;

}
</style>