<template>
  <div>
 
  <header :class="{ dropdownback: isActive }" @click="isActive = false">
    <!-------------------------مدال انتخاب آدرس----------------------------->

    <b-modal
      id="SelectAddress"
      size="xl"
      dir="rtl"
      ok-only
      no-stacking
      hide-footer
    >
      <template #modal-header="{ close }">
        <!-- Emulate built in modal header close button action -->

        <small class="text-primary"
          ><b-icon icon="geo-alt" aria-hidden="true"></b-icon>انتخاب آدرس تحویل
        </small>

        <b-icon
          icon="x"
          variant="primary"
          aria-hidden="true"
          class="fs-1"
          @click="close()"
        ></b-icon>
      </template>

      <template #default="{ hide }">
        <div>
          <b-col>
            <b-list-group>
              <b-list-group-item
                class="d-flex justify-content-between align-items-center text-wrap border-0 px-0"
                v-for="PersonAddresw in PersonAddressListtwo"
                :key="PersonAddresw.index"
                :class="{
                  'list-group-item-primary': PersonAddresw === isActivebg,
                }"
                @click="toggleActive(PersonAddresw)"
              >
                <div class="col-9 text-end px-0">
                  <div class="radio-list">
                    <label class="radio scroll-text form-small">
                      <input
                        class="radio-input"
                        type="radio"
                        checked="checked"
                      />
                      <span class="radio-checkmark-box">
                        <span class="radio-checkmark"></span>
                      </span>
                      {{ PersonAddresw }}
                    </label>
                  </div>
                </div>
                <div class="col-3 px-0">
                  <b-icon
                    icon="trash"
                    @click="EmptyBasket(index)"
                    class="px-2"
                    aria-hidden="true"
                  ></b-icon>
                  <a>
                    <b-icon
                      icon="pencil-square"
                      v-b-modal.edit-address
                      aria-hidden="true"
                    ></b-icon
                  ></a>
                </div>
              </b-list-group-item>
            </b-list-group>
          </b-col>

          <b-col>
            <b-button
              :disabled="disableSelectedAddress"
              @focus="hide()"
              class="rounded-custom float-start my-2"
              variant="primary"
            >
              تایید آدرس
            </b-button>
          </b-col>

          <b-col>
            <div class="fs-6 text-primary pe-4 pt-3">
              <b-icon icon="plus" class="px-2" aria-hidden="true"></b-icon>
              <span v-b-modal.modal-add-address> افزودن آدرس جدید</span>
            </div>
          </b-col>
        </div>
      </template>
    </b-modal>

    <!-------------------------مدال ویرایش آدرس----------------------------->
    <b-modal id="edit-address" ok-only hide-footer dir="rtl">
      <template #modal-header="{ close }">
        <!-- Emulate built in modal header close button action -->

        <small> ویرایش آدرس </small>

        <b-icon
          icon="x"
          variant="primary"
          aria-hidden="true"
          class="fs-1"
          @click="close()"
          v-b-modal.SelectAddress
        ></b-icon>
      </template>

      <template #default="{ hide }">
        <div>
          <b-form-group
            id="input-group-1"
            label="شماره تماس گیرنده *"
            label-for="input-1"
            class="my-2"
          >
            <b-form-input
              id="input-1"
              type="text"
              v-model="userActiveAddress.phone"
              @keypress="editaddress()"
              :class="{ errore: errorevalidation }"
              required
              class="my-2"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="آدرس * " label-for="input-2">
            <b-form-textarea
              id="textarea"
              rows="3"
              max-rows="6"
              v-model="userActiveAddress.adress"
              class="my-2"
            ></b-form-textarea>
          </b-form-group>
          <b-row> </b-row>

          <b-button
            @focus="hide()"
            :disabled="isDisablededite"
            class="rounded-custom float-start"
            variant="primary"
            >ویرایش آدرس
          </b-button>
        </div>
      </template>
    </b-modal>
    <!-------------------------مدال افزودن آدرس----------------------------->
    <!-- <b-modal id="modal-add-address" ok-only hide-footer  dir="rtl"  >
      <template #modal-header="{ close }" ok-only hide-footer hide-header>
       
        <strong> اضافه کردن آدرس جدید </strong>

        <b-icon
          icon="x"
          variant="primary"
          aria-hidden="true"
          class="fs-1"
          @click="close()"
          v-b-modal.SelectAddress
        ></b-icon>
      </template>

      <template>
        <div>
          <b-form-group
            id="input-group-1"
            label="شماره تماس گیرنده *"
            label-for="input-1"
            class="my-2"
          >
            <b-form-input
              id="input-1"
              type="text"
              @keypress="addressadd()"
              :class="{ errore: errorevalidation }"
              v-model="userActiveAddress.phone"
              required
              class="my-2"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="آدرس * " label-for="input-2">
            <b-form-textarea
              id="textarea"
              rows="3"
              max-rows="6"
              v-model="AddAdressadd"
              class="my-2"
            ></b-form-textarea>
          </b-form-group>
          <b-row>
            <b-form-group
              id="input-group-1"
              label=" پلاک * "
              label-for="input-1"
              class="my-2 col-lg-6"
            >
              <b-form-input id="input-1" type="text" required></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-1"
              label="واحد"
              label-for="input-1"
              class="my-2 col-lg-6"
            >
              <b-form-input id="input-1" type="text" required></b-form-input>
            </b-form-group>
          </b-row>

          <b-button
            @click="SaveAddress()"

            data-dismiss="modal"
            class="rounded-custom float-start"
            variant="primary"
            :disabled="isDisabledaddressadd"
            >اضافه کردن آدرس</b-button
          >
        </div>
      </template>
    </b-modal> -->


    <!------------------------- محتوای header ----------------------------->
    <b-container fluid   class="mx-0  px-0"  id="heightscroll" >
      <div   class="bg-header px-0"  id="height-header"  >
      <b-container class="position-sticky" id="heightafterscroll">
        <b-row  class="border-header  pb-2">
          <b-col  class="d-flex" >
            <router-link to="/">
            <b-img
              style="width: 50px"
              :src="require('../assets/images/logo.png')"
              class="mt-1"
              alt="Rounded image"
            ></b-img>
            </router-link>
          </b-col>

      

          <!-- class="user-icon d-none d-sm-none d-lg-block px-3 " -->
          <b-col class="d-flex align-items-center justify-content-end mt-1">

            <NumberCounter></NumberCounter>
            <span v-if="isLoggedIn == false" v-b-modal.modal-login>
             {{nameuser}}           <b-icon
                icon="person"
                variant="white"
                scale="1.5"
                class="mt-3"
              ></b-icon>

                  <!-------------------------مدال ورود ----------------------------->
    <b-modal @shown="focusMyElement"
      id="modal-login"
      ok-only
      no-stacking
      hide-footer
      no-close-on-backdrop
    >
      <template #modal-header="{ close }">
        <!-- Emulate built in modal header close button action -->

        <center><strong> برای ثبت سفارش باید وارد شوید </strong></center>

        <b-icon
          icon="x"
          variant="primary"
          aria-hidden="true"
          class="fs-1"
          @click="close()"
        ></b-icon>
      </template>

      <div class="container px-4">
        <b-col class="my-lg-4"
          >شماره موبایل خود را وارد کنید تا کد تایید برایتان ارسال شود</b-col
        >
        <b-form>
          <b-form-group
            id="input-group-1"
            label="شماره موبایل *"
            label-for="input-1"
            class="my-2"
          >
            <b-form-input
            ref="focusThis"
              id="input-1"
              type="text"
              required
              class="my-2"
              :class="{ errore: errorevalidation }"
              v-model="PhoneLogin"
              @keypress="checkNumber()"
            ></b-form-input>
          </b-form-group>

          <b-button
            type="button"
            :disabled="isDisabled"
            @click="confirmCode()"
            class="col-12"
            block
            v-b-modal.login-sms
            variant="primary"
            >ارسال کد تایید
          </b-button>
        </b-form>
      </div>
    </b-modal>

    <!-------------------------مدال ارسال اس ام اس برای ورود ----------------------------->
    <b-modal id="login-sms" ok-only hide-footer v-if="showModal">
      <template #modal-header="{ close,cancel }">
        <!-- Emulate built in modal header close button action -->
        <b-icon
          icon="chevron-right"
          variant="primary"
          aria-hidden="true"
          class="fs-1"
          v-b-modal.modal-login
          @click="close()"
        ></b-icon>
        <small> برای ثبت سفارش باید وارد شوید</small>

        <b-icon
          icon="x"
          variant="primary"
          aria-hidden="true"
          class="fs-1"
          @click="cancel()"
        ></b-icon>
      </template>

      <div class="px-4">
        <!-- <p>کد تایید به شماره ۰۹۱۵۶۲۵۰۲۷۷ ارسال شد</p> -->
        <p>کد تایید به شماره {{ PhoneLogin }} ارسال شد</p>
        <b-form>
          <b-form-group
            id="input-group-1"
            label="کد تایـید *"
            label-for="input-1"
            class="my-2"
          >
            <b-form-input
              id="input-1"
              type="text"
              required
              v-model="verificationCode"
              class="my-2"
            ></b-form-input>
          </b-form-group>

          <b-button
            type="button"
            @click="logIn()"
            block
            variant="primary"
            class="col-12 my-3"
          >
            تایید
          </b-button>

          <center>
            برای ارسال مجدد کد {{ renameTimeForTryagain }} ثانیه صبر کنید
          </center>
        </b-form>
      </div>
    </b-modal>

            </span>

            <!-- toggle-class="text-decoration-none d-block d-sm-block d-lg-none" -->
            <div v-if="isLoggedIn == true">
              <!------------------------------------ modal نظرسنجی ------------------------------------>
  <b-modal id="modalOpinion" ok-only centered hide-header-close header-border-variant="light" footer-border-variant="light" no-close-on-backdrop>
  <template #modal-header="{ }">
<!-- دو button تعرف شده در این template بدون هیچ کارایی ضمنا جهت حفظ style 
header استفاده شده است -->
              <b-button
                disabled
                style="border: none; margin: -18px -23px -18px -18px"
                size="lg"
                variant="link"
              >
              </b-button>

              <h5>نظرسنجی</h5>

              <b-button
                disabled
                style="border: none; margin: -18px -23px -18px -18px"
                size="lg"
                variant="link"
              >
              </b-button>
            </template>
    <p style="float: right">
    لطفا نظر خود را درباره کیفیت ارائه خدمات با دادن امتیاز بیان نمایید
    </p>
    <br>
    <div>
    <b-form-rating variant="warning" v-model="opinionRate" show-value no-border locale="fa"></b-form-rating>
    <!-- <p class="mt-2">امتیاز : {{ opinionRate }}</p> -->
  </div>
<br>
  <p style="float: right; font-size:12px">
      پیشنهادات یا انتقادات خود را در
       <a href="remind" v-b-tooltip title="Tooltip in a modal!">اینجا</a> 
       ثبت نمایید
    </p>
<template #modal-footer="{ ok, hide }">
      
      
      <b-button v-if="opinionRate != null" size="sm" variant="success" @click="ok(customerOpinion())">
        ارسال نظر
      </b-button>
      
      
      <b-button size="sm" variant="outline-secondary" @click="hide()">
        بیخیال
      </b-button>
    </template>
    
  </b-modal>
            <b-dropdown size="lg" variant="link" no-caret>
              <template #button-content>
                <div class="d-flex">
                  <div
                    class="text-white d-none d-sm-none d-lg-block"
                    @click="ActiveFade()"
                  >
                        {{nameuser}}          <b-icon icon="person" variant="white"></b-icon>
                  </div>
                  <div class="text-white d-block d-sm-block d-lg-none">
             <b-icon icon="person" variant="white"></b-icon>
                  </div>
                </div>
              </template>
              <div class="bg-light border-bottom">
                <b-dropdown-item href="#">الهام ملکی </b-dropdown-item>

                <b-dropdown-item>
                  
                  اعتبار: <b-badge class="badge-price">0 تومان</b-badge>
                </b-dropdown-item>
              </div>
              <b-dropdown-item>
                 <router-link
                  to="/UserInfoComponnet"
                  class="text-decoration-none text-dark"
                >
                <b-icon icon="person-fill" aria-hidden="true"></b-icon>حساب
                کاربری
                 </router-link></b-dropdown-item
              >
              <b-dropdown-item>
                <b-icon-heart></b-icon-heart>
                لیست علاقه مندی ها
              </b-dropdown-item>

              <b-dropdown-item>
                <router-link
                  to="/ProductBuyList"
                  class="text-decoration-none text-dark"
                >
                  <b-icon-cart-plus></b-icon-cart-plus> لیست خرید</router-link
                >
              </b-dropdown-item>
              <b-dropdown-item>
                   <router-link
                  to="/IncreaseCreditProfile"
                  class="text-decoration-none text-dark"
                >
                <b-icon icon="credit-card2-back" aria-hidden="true"></b-icon
                >افزایش اعتبار
                   </router-link></b-dropdown-item
              >
         
                    
                <b-dropdown-item >
                  <router-link
                  to="/OrderProfile"
                  class="text-decoration-none text-dark"
                >
                <b-icon icon="basket" aria-hidden="true"></b-icon>لیست
                سفارشات
                </router-link> 
                </b-dropdown-item
              >
              <b-dropdown-item @click="logOut()">
                <b-icon icon="power" aria-hidden="true"></b-icon>
                خروج</b-dropdown-item
              >
            </b-dropdown>
            </div>
            <div class="d-none d-sm-none d-lg-block">
              <button
                v-b-toggle.sidebar-basketlist
                type="button"
                class="btn btn-light text-primary d-flex px-3"
                @click="getvalue()"
              >
                <b-icon-bag></b-icon-bag>
                سبد خرید
                <span class="badge bg-light text-primary rounded-circle"
                  >4</span
                >
              </button>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col id="rowtwoheader" class="text-right text-white fs-14 my-1"
            >تحویل از امروز ساعت 13</b-col
          >
 
        </b-row>

        <SearchHeader></SearchHeader>



      </b-container>
      </div>
     <div class="container-fluid "   id="header-menue"      >
   <b-container>
 <b-row>
            <b-col cols="12" >
             <b-button  class="col-2 d-none  d-lg-block    text-dark bg-white  category-botton   border-0"   id="header-category"  
                 :class="visible ? null : 'collapsed'"
      :aria-expanded="visible ? 'true' : 'false'"
      aria-controls="collapse-mega-menue"
      @click="visible = !visible"
           > <b-icon-columns-gap aria-hidden="true"></b-icon-columns-gap> دسته بندی
            
             </b-button>
             <b-collapse  id="collapse-mega-menue" v-model="visible" class="row    shadow    p-3 bg-white"  style="position: absolute;z-index: -10;">
   

      <b-col cols="4"   class="text-right  d-none  d-lg-block"   v-for="(category,index) in  CategoryMegaMenue()"  :key="index">
              <div>
                 <div  class="text-primary"> 
                   <b-icon-circle-fill  scale="0.5" ></b-icon-circle-fill>
                   {{category.title}}</div>
               <div   class="my-2" >{{category.product}}</div>
              
               </div> 
           </b-col>
           <b-col cols="3  d-flex  pic-mega-menue   d-none  d-lg-block" >
             <img  src="https://api.snapp.market/uploads/images/mobile-sliders/625fa91d1022f.png"   width="200px">  
           </b-col>
    </b-collapse>
          </b-col>
          
        </b-row>

        </b-container>
        </div>
    </b-container>

  </header>
  <div>

  </div>
       </div> 
</template>

<script>
window.addEventListener("scroll", headerscroll);

function headerscroll() {
  if (document.body.scrollTop > 2 || document.documentElement.scrollTop > 0) {
    document.getElementById("rowtwoheader").style.display = "none";
    document.getElementById("height-header").style.height = "8rem";
     document.getElementById("heightafterscroll").style.transform = " scale(0.99)";
   document.getElementById("header-category").style.marginTop  = "7px";
       document.getElementById("header-category").style.marginBottom  = "9px"; 
  document.getElementById("header-menue").classList.add('header-menue');
  
  } else {
    document.getElementById("rowtwoheader").style.display = "block";
    document.getElementById("height-header").style.height = "11rem";
     document.getElementById("header-category").style.marginTop  = "-45px";


  }
}
import SearchHeader from "./SearchHeader.vue";

import NumberCounter from "./NumberCounter.vue";



export default {
  components: {
    SearchHeader,
    NumberCounter,
    

  },
  emits: [],

  created() {
    this.homeStayLogin();
    this.loadUser();
    this.loadAddressListtwo();
      this.$store.dispatch("product/LoadCategoryMegaMenue");
      this.getvalue();

  },

mounted() {
this.isOpinionChecked()
},



  data() {
    return {
      opinionRate: null,
      isLoggedIn: false,
      showModal: false,
      verifyCode: false,
      TextSms: "ارسال مجدد کد تایید",
      textheader: "ابتدا آدرس خود را انتخاب کنید",
      verificationCode: "",
      Authentication: "",
      AddAdressadd: "",
      userActiveAddress: {},
      renameTimeForTryagain: "58",
      isActive: false,
      isActivebg: null,
      isDisabled: true,
      isDisablededite: true,
      isDisabledaddressadd: false,
      disableSelectedAddress: true,
      PhoneLogin: "",
      PersonAddressListtwo: [],
      errorevalidation: false,
        visible: false,
        nameuser:"ورود / عضویت",
        showHeaderMenue:false
    };
  },
  watch: {
    renameTimeForTryagain: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.renameTimeForTryagain--;
          }, 1000);
        }
      },
      immediate: true, // This ensures the watcher is triggered upon creation
    },
  },
  methods: {



    focusMyElement() {
      this.$refs.focusThis.focus()
    },
   CategoryMegaMenue() {
        return this.$store.getters["product/getCategoryMegaMenue"];

    },
    getvalue(){
//  this.$store.dispatch("product/LoadProduct");
            return this.$store.getters["product/getProduct"];
    },

    isOpinionChecked() {
// if (!this.$store.getters["user/isOpinionChecked"])
{
this.$bvModal.show('modalOpinion')
// this.$store.dispatch("user/isOpinionChecked");
}
},

customerOpinion() {
this.$store.dispatch("userInfo/customerOpinion", this.opinionRate);
console.log("opinionRate is : " + this.opinionRate)
},

homeStayLogin() {
      
        this.isLoggedIn = this.$store.getters["userInfo/checkLogin"];
      if (this.isLoggedIn)
      {
this.nameuser = this.$store.getters["userInfo/getUserName"];
// console.log("userName: " + this.nameuser)
      }
    },

    // toggleActive(index) {
    //   this.isActivebg = index;
    //   this.disableSelectedAddress = false;
    // },
    // checkPhoneModalAddress() {
    //     var phonemodal = /^\d{10}$/;
    //    if (this.userActiveAddress.phone.match(phonemodal) )
    //    {this.isDisabledaddressadd=false;}
    //    else (this.isDisabledaddressadd=true) ;

    // },
    addressadd() {
      var phoneno = /^\d{10}$/;
      if (
        this.userActiveAddress.phone.match(phoneno) &&
        this.userActiveAddress.phone != null
      ) {
        this.isDisabledaddressadd = false;

        this.errorevalidation = false;
      } else this.errorevalidation = true;
    },

    editaddress() {
      var phoneno = /^\d{10}$/;
      if (
        this.userActiveAddress.phone.match(phoneno) &&
        this.userActiveAddress.phone != null
      ) {
        this.isDisablededite = false;

        this.errorevalidation = false;
      } else this.errorevalidation = true;
    },
    loadUser() {
      this.userActiveAddress = JSON.parse(
        '{"phone":"09156250277", "adress":"آدرس","Plaque":"95", "unit":"4"}'
      );
    },
    checkAddresInput() {
      if (this.userActiveAddress.phone == "")
        return "لطفا شماره تلفن خود را وارد نمایید";
      else if (this.userActiveAddress.adress == "")
        return "لطفا آدرس  خود را وارد نمایید";
      else if (this.userActiveAddress.Plaque == "")
        return "لطفا شماره پلاک خود را وارد نمایید";
      else if (this.userActiveAddress.unit == "")
        return "لطفا واحد  خود را وارد نمایید";

      return "";
    },

    SaveAddress() {
      let errorResult = this.checkAddresInput();
      if (errorResult != "") {
        this.showToast(errorResult);
      }
      this.PersonAddressListtwo.push(this.AddAdressadd);

      this.$store.dispatch({
        type: "userInfo/loadAddressToAdd",
        index: {
          Id: 3,
          Title: "عنوان آدرس اول",
          Address: this.EditValueAddressList,
        },
      });

      this.textheader = this.AddAdressadd;

      console.log(this.PersonAddressListtwo);
    },

    setUserStatus() {

this.$store.dispatch("userInfo/fillTheLocalstorage", this.PhoneLogin);
      // this.$store.dispatch("userInfo/fillTheLocalstorage", this.PhoneLogin);
      console.log("PhoneLogin : " + this.PhoneLogin)
    },


    logIn() {
this.verifyCode = this.$store.getters["userInfo/codeValidation"](
        this.verificationCode
      );
if (this.verifyCode) {
        // this.nameuser=this.$store.state.userInfo.PersonInfo[2]['Name'];
              
            this.isActive = true;
        this.setUserStatus();
        // this.isLoggedIn = this.$store.getters["userInfo/checkLogin"];
        this.isLoggedIn = this.$store.getters["userInfo/checkLogin"];
        window.location.reload();
        console.log("isLoggedIn : " + this.isLoggedIn)
        
        
      } else {
        this.$bvToast.toast("کد وارد شده صحیح نمی باشد، مجددا تلاش کنید");
      }


      console.log("verificationCode : " + this.verificationCode);
    },

logOut() {
this.$store.dispatch("userInfo/clearStorages");
this.isLoggedIn = false
},

    ActiveFade() {
      this.isActive = false;
    },
    showToast(errorResult) {
      this.$toast.error(errorResult, {
        position: "bottom-center",
        timeout: 5000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: true,
        rtl: false,
      });
    },

    confirmCode() {
      this.showModal = this.$store.getters["userInfo/phoneValidation"](this.PhoneLogin);
      // this.showModal = this.$store.getters["userInfo/phoneValidation"];
      console.log("ShowModal : " + this.showModal)
      if (!this.showModal) {
        this.$bvToast.toast("شماره وارد شده صحیح نمی باشد");
      }

      // this.TextSms =
      //   "برای ارسال مجدد کد " + this.renameTimeForTryagain + " ثانیه صبر کنید ";
    },

    checkNumber() {      
      var phoneno = /^\d{10}$/;
      if (this.PhoneLogin.match(phoneno) && this.PhoneLogin != null) {
        this.isDisabled = false;

        this.errorevalidation = false;
      } else {
        this.errorevalidation = true;
        this.isDisabled = true;
      }
    },

    loadAddressListtwo() {
      this.PersonAddressListtwo = [" مشهد-سید رضی 17-پلاک 185 "];
    },

    EmptyBasket: function (index) {
      this.PersonAddressListtwo.splice(index, 1);
    },
  },
};
</script>

<style>
#heightafterscroll {
  margin-top: -60px;
}
.border-header{
    border-bottom: 0.01rem solid rgba(255, 255, 255, 0.16);
}
.bg-header {
  background-color: rgb(0, 0, 0);
  background-image: url("../assets/images/background-header.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0% 66%;
  width: 100%;
  height: 11rem;
  font-size: 1.4rem;
  position: relative;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 994;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  overflow: unset;
}
.text-header {
  font-size: 0.8rem !important;
}


.header-menue{
      background: rgb(255, 255, 255);
    width: 100%;
    height: auto;
    border-top: 0.1rem solid rgb(238, 238, 238);
    box-shadow: rgb(0 0 0 / 12%) 0px 0.6rem 2.5rem 0px;
 
}
#heightscroll{
  

    height: 9rem;
    position: fixed;
    top: 0px;
    z-index: 200;
}
.has-search .form-control {
  padding-left: 2.375rem;
}
.margin-top-90 {
  margin-top: -90px;
}
#heightafterscroll .form-control:focus {
  border-color: #aaa !important;

  box-shadow: 0 0 0 0 !important;
}
.rowtwoheader{
  font-weight: 100;
}
.height-header{
  top:0px;
}
.has-search .form-control-feedback {
  position: absolute;
  z-index: 2;
  display: block;
  width: 2.375rem;
  height: 2.375rem;
  line-height: 2.375rem;
  text-align: center;
  pointer-events: none;
  color: #aaa;
}
::placeholder {
  text-indent: 30px !important;
  font-size: 12px;
}
.dropdown-menu {
  text-align: right !important;
}

.radio {
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  user-select: none;
  font-size: 0.9rem;
}
.radio:hover .checkbox-checkmark {
  border: 2px solid rgb(85, 111, 247);
}
.radio-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.category-botton{
      position: absolute;
    z-index: 8000;
    margin-top: -45px;
    margin-right:  20px;
}
.radio-input:focus ~ .radio-checkmark-box {
  border-color: rgb(85, 111, 247);
}
.radio-input:checked ~ .radio-checkmark-box .radio-checkmark:after {
  display: block;
}
.radio-input:checked ~ .radio-checkmark-box .radio-checkmark {
  background-color: rgb(85, 111, 247);
  border: 2px solid rgb(85, 111, 247);
}
.radio-input:disabled ~ .radio-checkmark-box .radio-checkmark {
  border: 2px solid #b0b0b0;
  cursor: not-allowed;
}
.radio-input:disabled:checked ~ .radio-checkmark-box .radio-checkmark {
  background-color: #b0b0b0;
}
.radio-input:disabled:checked ~ .radio-checkmark-box .radio-checkmark:after {
  background: url("data:image/svg+xml,%3Csvg width='14' height='10' viewBox='0 0 14 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.8866 9.91722L0.0873348 5.36761C0.0596566 5.34137 0.037692 5.31018 0.0227039 5.27582C0.00771585 5.24146 0 5.20461 0 5.1674C0 5.13019 0.00771585 5.09335 0.0227039 5.05899C0.037692 5.02463 0.0596566 4.99343 0.0873348 4.96719L1.29893 3.81086C1.41471 3.70049 1.60183 3.70049 1.71761 3.81086L4.87718 6.80501C4.99296 6.91538 5.18143 6.91409 5.2972 6.80372L12.2787 0.0839022C12.3945 -0.0277526 12.5829 -0.0277526 12.7001 0.0826188L13.913 1.23895C14.0288 1.34932 14.0288 1.52771 13.9143 1.63809L6.30821 8.95468L6.30956 8.95597L5.30662 9.91722C5.19085 10.0276 5.00238 10.0276 4.8866 9.91722Z' fill='%2374767B'/%3E%3C/svg%3E%0A")
    no-repeat center;
  background-size: contain;
}
.radio-checkmark-box {
  min-width: 30px;
  max-width: 30px;
  min-height: 30px;
  max-height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
  border-radius: 50%;
}
.radio-checkmark {
  min-width: 20px;
  max-width: 20px;
  min-height: 20px;
  max-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid #58a55a;
  border-radius: 50%;
  cursor: pointer;
}
.text-header-center {
  font-size: 0.8rem;
}
.errore {
  border: 1px solid #e13535 !important;
}
.scroll-text {
  overflow-x: hidden;
  height: 40px;
}

.text-indent {
  text-indent: 30px;
}
.radio-checkmark:after {
  content: "";
  display: none;
  background: url("data:image/svg+xml,%3Csvg width='14' height='10' viewBox='0 0 14 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.8866 9.91722L0.0873348 5.36761C0.0596566 5.34137 0.037692 5.31018 0.0227039 5.27582C0.00771585 5.24146 0 5.20461 0 5.1674C0 5.13019 0.00771585 5.09335 0.0227039 5.05899C0.037692 5.02463 0.0596566 4.99343 0.0873348 4.96719L1.29893 3.81086C1.41471 3.70049 1.60183 3.70049 1.71761 3.81086L4.87718 6.80501C4.99296 6.91538 5.18143 6.91409 5.2972 6.80372L12.2787 0.0839022C12.3945 -0.0277526 12.5829 -0.0277526 12.7001 0.0826188L13.913 1.23895C14.0288 1.34932 14.0288 1.52771 13.9143 1.63809L6.30821 8.95468L6.30956 8.95597L5.30662 9.91722C5.19085 10.0276 5.00238 10.0276 4.8866 9.91722Z' fill='white'/%3E%3C/svg%3E%0A")
    no-repeat center;
  width: 24px;
  height: 20px;
  background-size: contain;
}


.pic-mega-menue{
      position: absolute !important;
    left: -50px;
}
.badge-price {
  margin: 0px;
  padding: 0.7rem 0.7rem 0.6rem;
  background-color: rgb(255, 122, 20);
  border-color: rgb(255, 122, 20);
  color: rgb(255, 255, 255);
  vertical-align: middle;
  border: 0.1rem solid transparent;
  border-radius: 20rem !important;
  font-size: 1.3rem;
}
.dropdown-menu {
  font-size: 14px !important;
}

#my-modal .modal-dialog {
  height: 100% !important;
}
  .header-menue{
        background: rgb(255, 255, 255);
    width: 100%;
    height: auto;
    top: 1.3rem;
    font-size: 1.4rem;
    color: rgb(26, 28, 35);
    border-top: 0.1rem solid rgb(238, 238, 238);
    box-shadow: rgb(0 0 0 / 12%) 0px 0.6rem 2.5rem 0px;

  }
.dropdownback {
  position: fixed;
  min-height: 100vh;
  top: 0px;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1002;
}

@media only screen and (max-width: 600px) {
  .user-icon {
    position: absolute;
    left: 40px;
  }

  .left-user {
    margin-left: -20px;
  }
}
</style>
