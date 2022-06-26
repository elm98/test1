<template>
  <b-sidebar id="sidebar-right"  right shadow title="دسته بندی ها" >
      <div class="px-3 py-2">
       <ul>
           <li    class="text-right  text-primary"   v-for="(category,index) in  CategoryMegaMenue()"  :key="index">
               <div   > 
                 
                     {{category.title}}</div>
               <div  class="text-dark" >{{category.product}}</div>
           </li>
       </ul>
      </div>
    </b-sidebar>
</template>

<script>
export default {


  data() {
    return {

    
    };
  },

  created() {
     this.$store.dispatch("product/LoadCategoryMegaMenue");
 


  
  

  },

  methods: {
 
  


    CategoryMegaMenue() {
        return this.$store.getters["product/getCategoryMegaMenue"];

    },
  }

}
</script>

<style>

</style>