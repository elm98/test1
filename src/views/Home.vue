<template>
  <div class="home">



 
<HeaderPage></HeaderPage>
<CategoryCard></CategoryCard>
<MainSplide></MainSplide>
<SortProduct></SortProduct>
<FooterPage></FooterPage>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HeaderPage from '@/components/HeaderPage.vue'
import CategoryCard from '@/components/CategoryCard.vue'
import MainSplide from '@/components/MainSplide.vue'
import SortProduct from '@/components/SortProduct.vue'
import FooterPage from '@/components/FooterPage.vue'





export default {
  name: "HomeView",
  components: {
    HeaderPage,
    CategoryCard,
    MainSplide,
    SortProduct,
    FooterPage
    // HelloWorld
  }
}
</script>
