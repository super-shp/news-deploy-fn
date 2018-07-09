<template>
    <a class="banner-image" href="https://sspai.com/a/K859">
      <iImage placeholder="651x346" :imgStyle="{ maxHeight: `${maxHeight}px`}" src="https://cdn.sspai.com/article/f0dae5b3-eb33-d74c-d8cf-4d0da22d5db6.jpg?imageMogr2/quality/95/thumbnail/!x372r/gravity/Center/crop/x372" alt="" />
    </a>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    maxHeight: {
      type: Number,
      default: 170,
    },
  },
});
</script>


<style lang="scss" scoped>
.banner-image {
  display: inline-block;
  margin-right: 5px;

  image {
    max-height: 342.922px;
    height: 100%;
    width: 100%;
    display: block;
    border-style: none;
  }
}
</style>

