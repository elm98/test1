<template>
         <b-breadcrumb class="fs-14 breadcrub-icon" dir="ltr" style="">
         <b-breadcrumb-item active        v-for="(breadcrub,index) in breadcrumb"
        :key="index" > <a :href="breadcrub.url"  >{{breadcrub.caption}}</a></b-breadcrumb-item>

          <b-breadcrumb-item active>
            فروشگاه
            <b-icon
              icon="house-fill"
              scale="1.25"
              shift-v="1.25"
              aria-hidden="true"
            ></b-icon>
          </b-breadcrumb-item>
        </b-breadcrumb>
</template>

<script>
export default {
      data() {
    return {
      breadcrumb: [],
  
    };
  },
   created() {
   this.loadBreadCrumb();
  },
  methods: {
   loadBreadCrumb(){
      (this.breadcrumb=[
        { id: 1, caption: "بهداشتی" ,url:"https://www.google.com/"},
        { id: 2, caption: "دستمال کاغدی" ,url:"https://www.google.com/"},
      ]) ;
      console.log(this.breadcrumb);
}
  }
}
</script>

<style>

</style>