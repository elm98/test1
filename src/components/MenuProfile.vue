<template>
  <div class="nav flex-lg-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
  <div class="nav-link active-menu  text-text-right" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
        <div  class="d-flex justify-content-between   my-1"> 
            <div  class="d-lg-flex" >
              <b-icon
                        icon="person"
                        aria-hidden="true"
                        class="fs-1 text-primary"
                      ></b-icon>
                      <div  class="text-dark"> <router-link
                  to="/UserInfoComponnet"
                 
                >  حساب کاربری </router-link></div>
                        
             </div>
             <div>
                  <b-icon
                        icon="chevron-left"
                        aria-hidden="true"
                        class="fs-1 text-primary  d-none d-lg-block"
                      ></b-icon>

             </div>

             </div>
               </div>
  <div class="nav-link  text-dark" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
      
      <div  class="d-flex justify-content-between  my-1"> 
           
            <div   class="d-lg-flex"  >
             <b-icon
                        icon="cash-stack"
                        aria-hidden="true"
                        class="fs-1  "
                      ></b-icon>
                       <router-link
                  to="/IncreaseCreditProfile"
                
                > <div  class=" text-dark"  >  افزایش اعتبار </div> </router-link>
             </div>
             <div>
                  <b-icon
                        icon="chevron-left"
                        aria-hidden="true"
                        class="fs-1  d-none d-lg-block"
                      ></b-icon>

             </div>

             </div>
  </div>
  <div class="nav-link   text-dark" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
      
      <div  class="d-flex justify-content-between   my-1"> 
             
            <div   class="d-lg-flex"  >
             <b-icon
                        icon="basket2-fill"
                        aria-hidden="true"
                        class="fs-1  text-dark "
                      ></b-icon>
                 <router-link
                  to="/OrderProfile"
                  
                >  <div  class=" text-dark"  > لیست سفارش ها  </div> </router-link>
             </div>
            
             <div>
                  <b-icon
                        icon="chevron-left"
                        aria-hidden="true"
                        class="fs-1  d-none d-lg-block"
                      ></b-icon>

             </div>

             </div>
               </div>
  <div class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
      
      <div  class="d-flex justify-content-between   my-1"> 
            <div   class="d-lg-flex"  >
             <b-icon
                        icon="power"
                        aria-hidden="true"
                        class="fs-1"
                        scale="0.8"
                      ></b-icon>
                       <div  >خروج</div>
             </div>
             <div>
                  <b-icon
                        icon="chevron-left"
                        aria-hidden="true"
                        class="fs-1   d-none d-lg-block"
                      ></b-icon>

             </div>

             </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.active-menu{
        color: rgb(36, 70, 245);
    background-color: rgb(231, 235, 254);
}
</style>