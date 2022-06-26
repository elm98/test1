<template>
  <b-container class="bg-light  my-5">

     <vertical-panel-list
        :p_showTypeList="showtypepagination"
        :p_showBtnAddToBasket="true"
        :p_productList="BuyList"
        :p_cardSize="3"
        :p_showPictureOnTop="true"
      >
      </vertical-panel-list>
 
  </b-container>
</template>

<script>

import VerticalPanelList from '@/components/VerticalPanelList.vue'

export default {
  components: {
    VerticalPanelList,
  },
  data() {
    return {

      BuyList: [],
      showtypepagination: 2,

    };
  },
  created() {
      this.$store.dispatch("buyList/loadBuyList");
this.loadBuyList();

  },
  methods: {

    loadBuyList() {
            this.BuyList = this.$store.getters["buyList/getBuyList"];

    }
  },
};
</script>

<style>
</style>