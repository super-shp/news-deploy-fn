<template>
  <div class="container-wrapper">
    <slot name="header" :isTop="isTop"></slot>
    <slot name="content"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      isTop: true,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.viewPositionListener);
  },
  methods: {
    viewPositionListener() {
      const dom = this.$el;
      const domRect: ClientRect = dom.getBoundingClientRect();
      const oldValue = this.isTop;
      const { top } = domRect;
      if (top > -100 && oldValue === false) {
        this.isTop = true;
      } else if (top <= -100 && oldValue === true) {
        this.isTop = false;
      }
    },
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.viewPositionListener);
  },
});
</script>

<style lang="scss" scoped>
.container-wrapper {
  height: 1000px;
}
</style>


