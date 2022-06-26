<template>
<div>
  <b-container>
      <div class="line-row">
          <div class="line"></div>
          <h3 class="text-center">دسته بندی ها</h3>
              <div class="line"></div>
              </div>
              <b-row  >
                  <b-col   
             cols
            lg="3"
            sm="12"
            class="my-2    "
                  
             v-for="(category,index) in  CategoryList()"  :key="index"  >
                    <router-link :to="{
    name: 'DetailCategory',
    params: { categoryid:category.Id }
}">
  <b-row class="border shadow  m-1 "  @click="setStyleCategory(category.Id)"    >
                    <b-col class="col-lg-4 "  >
                          <img    width="100px" :src="category.image" >
                      </b-col>
                      <b-col class="col-lg-8  text-right   d-flex align-items-center flex-column"  >
                          <b-col  class="d-flex align-items-center  text-nowrap">{{category.title}}</b-col>
                          <b-col  class="text-center"><span  class="text-success   small-banner-discount px-4  py-2"  >{{category.Discount}}</span></b-col>
                      </b-col>
                      
                      </b-row>
</router-link> 
                  </b-col>
              </b-row>
  </b-container>
  <!-- <DetailCategory></DetailCategory> -->

  </div>
</template>

<script>

// import DetailCategory from '@/components/DetailCategory.vue';
export default {
 created() {
     this.$store.dispatch("product/LoadCategoryMegaMenue");
      this.setStyleCategory();


  },
    data() {
    return {
      styleOneCategory: false,
      styleTwoCategory:false ,
      styleTreecategory: false,
      categoryid:333333333333
      

    };
  },

    methods: {

    CategoryList() {
        return this.$store.getters["product/getCategoryMegaMenue"];

      

    },
    setStyleCategory(categoryid){
this.categoryid=categoryid;
    }

  },
  // props: {
  //   id: {
  //     category: Array,
  //   },
 
//     components: {
// DetailCategory
//   }

}
</script>

<style>



.styleOneCategory{
background-color: rgba(255, 203, 150, 0.27);
    border: 0.1rem solid rgba(255, 203, 150, 0.43);
}
.styleTwoCategory{
    background-color: rgba(168, 224, 244, 0.25);
    border: 0.1rem solid rgba(168, 224, 244, 0.56);
}
.styleTreecategory{
    background-color: rgba(250, 237, 163, 0.31);
    border: 0.1rem solid rgba(250, 237, 163, 0.67);
}
.line {
    background: none;
    width: 100%;
    border-top: 0.1rem solid rgba(163, 163, 163, 0.25);
    margin: 0.8rem 0px;
    border-radius: 0px;
    flex: 1 1 0%;
}

.line-row {
    display: flex;
    width: 100%;
    -webkit-box-align: center;
    align-items: center;
    margin: 1.6rem 0px 0.8rem;
}


.small-banner-discount {
    background-color: rgba(21, 195, 42, 0.05);
    max-width: 10.5rem;
    padding: 0.4rem 1.6rem;
    margin-top: 0.8rem;
}

</style>