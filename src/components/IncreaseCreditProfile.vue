<template>
<div>
 <HeaderPage></HeaderPage>

<b-container>
    
  <b-row>
    <b-col lg="3"  sm="12" >
         
      <MenuProfile></MenuProfile>
      </b-col>  
        <b-col lg="9"  sm="12" >
             
<div>
        <div>
              <b-card>
                <b-card-title
                  class="
                    pb-3
                    border-bottom
                    d-flex
                    justify-content-center
                    flex-column
                    align-items-center
                  "
                >
                  <div>
                    <b-icon
                      icon="coin"
                      aria-hidden="true"
                      class="text-primary"
                    ></b-icon>
                  </div>
                  <div  class="font-weight-bold">افزایش اعتبار</div>
                </b-card-title>
                <div>
                  <h5 class="text-center my-4">
                    موجودی فعلی :{{ CurrentBalance }} تومان
                  </h5>
                  <div class="text-end  row  d-flex justify-content-center">
                    <div
                      class="mb-3  col-12  col-lg-2 border text-center mx-2 p-3 price-text"
                    >
                      <b-form-radio
                        name="some-radios"
                        v-model="InputPrice"
                        value="5000تومان"
                        @change="AddCustomPrice('5000تومان')"
                      ></b-form-radio>
                      <span> 5000 تومان</span>
                    </div>
                    <div
                     class="mb-3 col-12  col-lg-2 border  text-center mx-2 p-3 price-text"
                    >
                      <b-form-radio
                        name="some-radios1"
                        v-model="InputPrice"
                        value="10000تومان"
                      ></b-form-radio>
                      <span> 10000 تومان</span>
                    </div>
                    <div
                      class="mb-3  col-12   col-lg-2  border  text-center mx-2 p-3 price-text"
                    >
                      <b-form-radio
                        name="some-radios2"
                        @change="AddCustomPrice('10000تومان')"
                        v-model="InputPrice"
                        value="50000تومان"
                      >
                      </b-form-radio>
                      <span> 50000 تومان</span>
                    </div>
                    <div
                     class="mb-3  col-12    col-lg-2 border  text-center mx-2 p-3 price-text"
                    >
                      <b-form-radio
                        v-model="InputPrice"
                        name="some-radios3"
                        @change="AddCustomPrice('100000تومان')"
                        value="100000تومان"
                      ></b-form-radio>
                      <span> 100000 تومان</span>
                    </div>
                    <div
                      class="mb-3  col-12  col-lg-2  border  text-center mx-2 p-3 price-text"
                    >
                      <b-form-radio
                        name="some-radios4"
                        v-model="InputPrice"
                        value="CustomPrice"
                        @change="AddCustomPrice('CustomPrice')"
                      >
                      </b-form-radio>
                      <span>مبلغ دلخواه</span>
                    </div>
                    <div class="col" v-if="ShowCreditInput">
                      <div class="d-flex form-row form-group">
                        <label
                          for="nested-street"
                          class="col-form-label text-sm-right d-flex"
                          >تومان:</label
                        >
                        <div class="col">
                          <input
                            type="number"
                            placeholder="مبلغ افزایش اعتبار را به تومان وارد نمایید"
                            class="form-control my-2 text-center"
                            v-model.number="UserPrice"
                            @blur="checkUserCredit"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div class="d-flex justify-content-center">
                        <b-button
                          type="button"
            
                          variant="primary"
                          @click="SaveCreditList()"
                          >افزایش اعتبار
                        </b-button>
                      </div>
                    </div>
                  </div>
                </div>
              </b-card>
            </div>
            </div>
              </b-col>  
  </b-row>
</b-container>
<FooterPage></FooterPage>
</div>
</template>

<script>

import MenuProfile from '@/components/MenuProfile.vue'
import HeaderPage from '@/components/HeaderPage.vue';
import FooterPage from '@/components/FooterPage.vue';
export default {
  data() {
    return {
 
      ShowCreditInput: false,
      // TextHeader:"اضافه کردن آدرس ",
      // ActiveNav: "home",
      UserPrice: "",
      InputPrice: "",
    
      CurrentBalance: "",



    
    };
  },
    components: {

    MenuProfile,
        HeaderPage,
        FooterPage

    // HelloWorld
  },
    created() {

    this.loadUserCredite();

    this.loadOrderList();

  
  

  },


  methods: {

 







    loadUserCredite() {
      this.CurrentBalance = "5000";
    },

   
    loadOrderList() {
         this.userOrderList= this.$store.getters["userInfo/getOrderList"];

    },
    checkUserCredit() {
      if (this.UserPrice < 5000)
        return (this.numberminuser = "حداقل مبلغ وارد شده 5000 تومان می باشد");
      else if (this.UserPrice == "") {
        return (this.numberminuser = "لطفا فیلد را پر نمایید");
      }
      return "";
    },

    SaveCreditList() {
      let errorResultCredit = this.checkUserCredit();

      if (errorResultCredit != "") {
                this.$bvToast.toast("مقدار وارد شده صحیح نمی باشد");


      }
      console.log(JSON.stringify(this.InputPrice));
      console.log(this.UserPrice);
    },





    SaveUserCredit() {
      console.log(JSON.stringify(this.UserCredite));
    },
    // activeclass() {
    //   this.isActive = false;
    //   this.noActive = true;
    // },
    // AddCustomPrice(Price) {
    //   if (Price == "CustomPrice") this.ShowCreditInput = true;
    //   else this.ShowCreditInput = false;
    // },
  },
}
</script>

<style>

</style>