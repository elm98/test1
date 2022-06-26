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
             <b-card class="">
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
                      icon="basket"
                      aria-hidden="true"
                      class="text-primary"
                    ></b-icon>
                  </div>

                  <div>لیست سفارش ها</div>
                </b-card-title>
                <div>
                  <b-table striped hover :items="userOrderList">
                    <template v-slot:cell(statea)="data">
                      <router-link :to="`/orderList`">{{
                        data.value
                      }}</router-link>
                    </template>
                    <router-view></router-view>
                  </b-table>
                </div>
              </b-card>
  </div>
              </b-col>  
  </b-row>
</b-container>
<FooterPage></FooterPage>
 </div>
</template>

<script>
import { skeleten } from "../mixins/myMixin.js";
import MenuProfile from '@/components/MenuProfile.vue'
import HeaderPage from '@/components/HeaderPage.vue';
import FooterPage from '@/components/FooterPage.vue';
export default {
  mixins: [ skeleten],

  data() {
    return {

      userOrderList: [],


    
    };
    
  },
    components: {

    MenuProfile,
    HeaderPage,
    FooterPage

    // HelloWorld
  },

  created() {
  
    this.loadBasketList();

  
  

  },

  methods: {
 

    loadBasketList() {
         this.userOrderList= this.$store.getters["userInfo/getOrderList"];

    },
  }
};
</script>


<style>

</style>