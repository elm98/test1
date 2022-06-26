<template>
  <div class="location-shop">
    <button
      v-b-tooltip.hover.right="texttooltip"
      class="border-0 bg-white"
      @click="addlist()"
    >
      <b-icon-cart-plus
        v-if="iconborder"
        scale="2"
        class="text-danger"
      ></b-icon-cart-plus>
      <b-icon-cart-check-fill
        v-if="iconred"
        scale="2"
        class="text-danger"
      ></b-icon-cart-check-fill>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      statusdisable: false,
      stylelike: false,
      iconborder: true,
      iconred: false,
      texttooltip: "افزودن به لیست خرید",
    };
  },
  created() {},
  methods: {
    addlist() {
      if (this.iconborder == true) {
        this.texttooltip = "افزودن به لیست خرید";
        this.$emit("addallFavorites", "truelistshop");
        this.stylelike = true;
        this.statusdisable = true;
        this.iconborder = false;
        this.iconred = true;
      } else if (this.iconborder == false) {
        this.texttooltip = "حذف از لیست خرید";
        this.$emit("addallFavorites", "falselistshop");
        this.stylelike = false;
        this.statusdisable = false;
        this.iconborder = true;
        this.iconred = false;
      }
    },
  },
};
</script>

<style>
.location-shop {
  position: absolute;
  left: 80px;
}

@media only screen and (max-width: 740px) {
  .location-shop {
    position: absolute;
    left: 40px;
  }
}
</style>