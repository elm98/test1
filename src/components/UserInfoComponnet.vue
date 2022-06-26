<template>
<div>
 <HeaderPage></HeaderPage>
        <!-----------------------Start Modal---------------------------->
    <div>
      <b-modal v-model="ShowModalAddAddress"  id="modal-prevent-closing"  hide-footer>
        <template #modal-header="{ close }">
          <!-- Emulate built in modal header close button action -->

          <small class="text-primary"
            ><b-icon icon="geo-alt" aria-hidden="true"></b-icon>  {{TextHeader}}
            
          </small>

          <b-icon
            icon="x"
            variant="primary"
            aria-hidden="true"
            class="fs-1"
            @click="close()"
          ></b-icon>
        </template>

        <template >
          <div>
            <div label="آدرس " label-for="name-input" class="text-end my-2">
              <b-form-input
                id="name-input"
                v-model="EditValueAddressList"
                class="text-end"
                :value="EditValueAddressList"
              ></b-form-input>
            </div>
         
            <b-button class="mt-3 float-start"   @click="SaveAddress()"    
              >ثبت
            </b-button>
                   <!-- <b-button class="mt-3 float-start" @click="EditAddress(IdAddressforEdit)"  v-if="showedite"   
              >ویرایش آدرس
            </b-button> -->
          </div>
        </template>
      </b-modal>
    </div>
    <!-----------------------End Modal---------------------------->

    <b-container>
  <b-row>
    <b-col lg="3"  sm="12" >
      <MenuProfile></MenuProfile>
      </b-col>  
        <b-col lg="9"  sm="12" >
                <div>
              <!-----------------------Start Card User Info---------------------------->

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
                  <b-skeleton-wrapper :loading="loading">
                    <template #loading>
                      <b-skeleton type="avatar"></b-skeleton>
                      <b-skeleton class="my-2" width="100px"></b-skeleton>
                    </template>
                    <div>
                      <b-icon
                        icon="person-fill"
                        aria-hidden="true"
                        class="fs-1 text-primary"
                      ></b-icon>
                    </div>

                    <div>مشخصات فردی</div>
                  </b-skeleton-wrapper>
                </b-card-title>
                <div></div>
                <div>
                  <b-skeleton-wrapper :loading="loading">
                    <!-- <template #loading>
       <b-skeleton width="100%"></b-skeleton>
            <b-skeleton type="input" class="my-2"></b-skeleton>
            <b-skeleton width="100%"></b-skeleton>
            <b-skeleton type="input" class="my-2"></b-skeleton>
              <b-skeleton width="100%"></b-skeleton>
            <b-skeleton type="input" class="my-2"></b-skeleton>
               <b-skeleton width="100%"></b-skeleton>
            <b-skeleton type="input" class="my-2"></b-skeleton>
            <b-skeleton width="100%"></b-skeleton>
            <b-skeleton type="input" class="my-2"></b-skeleton>
             <b-skeleton
              type="button"
              class="my-2 mx-auto d-block"
            ></b-skeleton>

</template> -->
<b-row>
                   <b-col  lg="6"  sm="12"  > 
                    <label for="NameUser">نام</label>
                    <b-form-input
                      type="text"
                      v-model="personInfo[0].Name"
                      placeholder="نام خود را وارد نمایید"
                      class="my-2 text-end"
                      id="NameUser"
                      required
                    ></b-form-input>
                   </b-col>
                     <b-col  lg="6"  sm="12"  > 
                    <div class="invalid-feedback">لطفا نام را وارد نمایید</div>
                    <label for="FamilyUser"> نام خانوادگی</label>
                    <b-form-input
                      type="text"
                      id="FamilyUser"
                      placeholder="نام خانوادگی خود را وارد نمایید"
                      required
                      v-model="personInfo[0].Family"
                      class="my-2 text-end"
                    ></b-form-input>
                     </b-col>
                      <b-col  lg="6"  sm="12"  > 
                    <div class="invalid-feedback">
                      لطفا نام خاوادگی را وارد نمایید
                    </div>
                 
                    <label for="PhoneUser">شماره تماس</label>
                    <b-form-input
                      type="text"
                      id="PhoneUser"
                      v-model="personInfo[0].Phone"
                      class="my-2 text-end"
                      placeholder="شماره تماس خود را وارد نمایید"

                      disabled
                    ></b-form-input>
                       
                    <div class="invalid-feedback">
                      شماره تماس خود را وارد نمایید
                    </div>
                     </b-col>
                            <b-col  lg="6"  sm="12"  > 
                    <div>
                      <label for="EmailUser"> آدرس ایمیل</label>

                      <b-form-input
                        id="EmailUser"
                        v-model="personInfo[0].Email"
                        type="email"
                        class="my-2 text-end"
                          placeholder="آدرس ایمیل  خود را وارد نمایید"
                      ></b-form-input>
                      <div class="invalid-feedback">
                        آدرس ایمیل خود را وارد نمایید
                      </div>
                    </div>
                   </b-col>
                        <b-col  lg="12"  sm="12"  > 
                    <div class="d-flex justify-content-center">
                      <b-button
                        type="button"
                        @click="SaveUserInfo()"
                        variant="primary"
                        >ثبت تغییرات</b-button
                      >
                    </div>
                      </b-col>
                    </b-row>
                  </b-skeleton-wrapper>
                </div>
              </b-card>

              <!-----------------------End Card User Info---------------------------->
              <!-----------------------Start Address List---------------------------->
              <b-card class="bg-whith my-4">
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
                      icon="geo-alt"
                      aria-hidden="true"
                      class="text-primary"
                    ></b-icon>
                  </div>
                  <div>آدرس ها</div>
                </b-card-title>
                <b-card-text>
                  <b-row>
                    <b-list-group  class="col-12">
                      <b-list-group-item
                        class="
                          d-flex
                          justify-content-between
                          align-items-center
                          text-wrap
                        "
                        v-for="userAddres in UserAddressList"
                        :key="userAddres.Id"
                      >
                        <div class="col-8 text-end">
                          {{ userAddres.Address }}
                        </div>
                        <div class="col-4">
                      <b-icon
                            icon="trash"
                           
                            aria-hidden="true"
                            @click="RemoveIconAddress(userAddres.Id)"
                          ></b-icon>

                          <a
                            @click="ShowModalAddAddress = !ShowModalAddAddress"
                          >
                            <b-icon
                              icon="pencil-square"
                              aria-hidden="true"
                              @click="EditeIconAddress(userAddres.Address,userAddres.Id)"
                              class="mx-2"
                            ></b-icon
                          ></a>

                        </div>
                      </b-list-group-item>
                    </b-list-group>
                    <b-col
                      class="m-3"
                      @click="AddAddressList() "
                    >
                      افزودن آدرس <b-icon-plus  scale="2" ></b-icon-plus>
                    </b-col>
                  </b-row>
                </b-card-text>
              </b-card>
              <!-----------------------End Address List---------------------------->
            </div>
              </b-col>  
  </b-row>
</b-container>
<FooterPage></FooterPage>
</div>
</template>

<script>

import MenuProfile from '@/components/MenuProfile.vue'
import { skeleten } from "../mixins/myMixin.js";
import HeaderPage from '@/components/HeaderPage.vue';
import FooterPage from '@/components/FooterPage.vue';
   

export default {
  mixins: [ skeleten],
     data() {
    return {
         ShowModalAddAddress: false,
      UserAddressList: [],
  personInfo: [],
        EditValueAddressList:"",
            StatusChangeAddress:false,
            
  
      IdAddressforEdit:"",
      StatusLoginUser:true,
      TextHeader:""

    
    };
  },
    created() {
     this.$store.dispatch("userInfo/loadUserInfo");
    this.loadUser();
    this.loadAddressList();


  
  

  },
    components: {

    MenuProfile,
        HeaderPage,
        FooterPage
  },
  methods: {

          checkUserInput() {
      // let re =
      //   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      // let emailRegex = re.test(this.personInfo.email);
    
      if (this.personInfo[0].Name == "")    return "لطفا نام خود را وارد نمایید";
      else if (this.personInfo[0].Family == "")
        return  "لطفا نام خانوادگی خود را وارد نمایید";
      else if (this.personInfo[0].Phone == "")
         return"لطفا شماره موبایل خود را وارد نمایید";
      // else if (!emailRegex) return "لطفا ایمیل خود را صحیح وارد نمایید";
      // return "";
          else return "";
    },
 
    loadAddressList() {

           
              this.UserAddressList= this.$store.getters["userInfo/getAddressList"];
         
    },
        loadUser() {

            if(this.StatusLoginUser==true)
            this.personInfo = this.$store.getters["userInfo/getPersonInfo"]
            else
            this.personInfo=[   {
          Id: "",
          Name: "",
          Family: "",
          Phone: "",
          Email: "",
          Credit: "",
        },];
        
            // console.log(this.personInfo);

         

    },
     SaveUserInfo() {
      let errorResult = this.checkUserInput();

      if (errorResult != "") {
        
                this.$bvToast.toast("مقدار وارد شده صحیح نمی باشد");
        // this.showToast(errorResult);
      }
      console.log(this.checkUserInput());
    },
        RemoveIconAddress: function (id) {

    //  console.log(id);  

// console.log(this.UserAddressList.splice(this.UserAddressList.findIndex(e => e.Id === id),1));
       this.$store.dispatch({
        type: 'userInfo/getRemoveAddress',
        index:  [id],
      });

    },
      EditeIconAddress(address,idAddress) {
this.EditValueAddressList =address;

      this.IdAddressforEdit=idAddress;
 

      this.StatusChangeAddress=true;
      this.TextHeader="ویرایش آدرس"

    },

  AddAddressList(){
    this.ShowModalAddAddress = !this.ShowModalAddAddress;
    this.EditValueAddressList="";
  },
    SaveAddress() {
      if(this.StatusChangeAddress==true)
      {
 this.$store.dispatch({
        type: 'userInfo/getEditeAddress',
        index:  [this.IdAddressforEdit,this.EditValueAddressList]
        ,
      });
         this.$bvModal.hide('modal-prevent-closing')
      
      }
      else{

      
            this.$store.dispatch({
        type: 'userInfo/loadAddressToAdd',
        index:  {
          Id: 3,
          Title: "عنوان آدرس اول",
          Address: this.EditValueAddressList,
        }
        ,
      });

      this.$bvModal.hide('modal-prevent-closing')
      console.log(JSON.stringify(this.UserAddressList));
      }

            
    },
  }
}
</script>

<style>

</style>