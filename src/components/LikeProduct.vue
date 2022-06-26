<template>
  <div>
    {{ numberHeart }}
    <button class="border-0 bg-white" @click="like()">
      <b-icon-heart
        v-if="iconborder"
        scale="1.5"
        class="heart-like"
      ></b-icon-heart>
      <b-icon-heart-fill
        v-if="iconred"
        scale="1.5"
        class="heart-like"
      ></b-icon-heart-fill>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numberHeart: "",

      stylelike: false,
      iconborder: true,
      iconred: false,
    };
  },
  created() {
    this.loadlikeuser();
  },
  methods: {
    like() {
      if (this.stylelike == false) {
        this.numberHeart++;

        this.stylelike = true;

        this.iconborder = false;
        this.iconred = true;
      } else if (this.stylelike == true) {
        this.iconborder = true;
        this.iconred = false;
        this.stylelike = false;
        return this.numberHeart--;
      }
    },
    loadlikeuser() {
      return (this.numberHeart = 200);
    },
  },
};
</script>

<style>
.heart-like {
  fill: red !important;
}
</style>