<template>
  <div
    class="border-none border rounded-circle contet-number   d-flex align-items-center  mt-lg-2 mt-1"
    :class="{
      'text-success': success,
      ' border-success': success,

      'text-yellow': yellow,
      'border-yelloww': yellow,

      'text-warning': warning,
      'border-warning': warning,

      'text-danger': danger,
      'border-danger': danger,
      'style-per': nonecolor,
    }"
  >
    {{ timerCount }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      timerCount: 30,
      success: false,
      warning: false,
      danger: false,
      yellow: false,
      nonecolor: false,
    };
  },

  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--;
          }, 1000);
          if (value > 20) {
            this.success = true;
          } else if (value > 10) {
            this.success = false;
            this.yellow = true;
          } else if (value > 5) {
            this.success = false;
            this.yellow = false;
            this.warning = true;
          } else if (value > 0) {
            setTimeout(() => {
              this.danger;
            }, 10);
            if (this.danger == false) {
              this.danger = true;
              this.yellow = false;
              this.warning = false;
              this.success = false;
              this.nonecolor = false;
            } else if (this.danger == true) {
              this.danger = false;
              this.yellow = false;
              this.warning = false;
              this.success = false;
              this.nonecolor = true;
            }
          }
        }
      },
      immediate: true, // This ensures the watcher is triggered upon creation
    },
  },
};
</script>
<style>
.text-yellow {
  color: #e5980a;
}

.border-yelloww {
  border-color: #e5980a !important;
}
.style-per {
  border-color: #e90606e7 !important;
  background-color: #e90606e7 !important;
  color: #1a1919f6 !important;
}

.contet-number {
  width: 25px;
  height: 25px;
  display: flex;
  align-items: end;
  justify-content: space-around;
  font-size: 14px;
}
</style>