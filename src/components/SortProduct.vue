<template>
  <div class="container my-3">
    <b-tabs v-model="tabIndex">
      <b-tab
        v-for="(Product, index) in ProductList"
        :key="index"
        :title="ProductList[1][index].tabtitle"
        :title-link-class="linkClass(ProductList[0][index].id)"
     
      >
        <b-row>
          <b-col
            cols
            lg="3"
            sm="12"
            class="my-2"
            v-for="(productes, index) in ProductList[2][index]"
            :key="index"
          >
            <BaseCard :p_Product="productes"    :p_showBtnAddToBasket="true"></BaseCard>
          </b-col>
        </b-row>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import BaseCard from "./BaseCard.vue";

export default {
  data() {
    return {
      tabIndex: 0,
      ProductList: [],
    };
  },
  components: {
    BaseCard,
  },
  created() {
    this.loadProductList();
  },
  methods: {
    linkClass(idx) {
      if (this.tabIndex === idx) {
        return ["bg-primary", "text-light"];
      } else {
        return ["bg-light", "text-info"];
      }
    },
    loadProductList() {


      this.$store.dispatch({
        type: 'product/LoadTabFilterProduct',
       });
        this.ProductList= this.$store.getters["product/getTabFilterProduct"];
console.log("ProductList : " + this.ProductList[0][2].id)

     
    },
  },
};
</script>

<style>
@media only screen and (max-width: 724px) {
  .nav-tabs {
    overflow-x: scroll;
    padding: 0px;
  }
}
.nav-tabs .nav-link {
  margin: 1px 5px !important;
  border-radius: 2.3rem !important;
}
.tab-content {
  margin: 20px !important;
}

.nav {
  flex-wrap: nowrap !important;
}

.tabs .nav-item a {
  width: 120px;
}

.tabs .nav-item .active {
  background: #0d6efd !important;
  color: #fff !important;
}
.tabs .nav-item {
  margin: 20px 0px;
}
.nav-tabs a{
  text-align: center;
}
</style>