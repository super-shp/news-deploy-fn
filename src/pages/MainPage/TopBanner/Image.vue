<template>
    <a class="banner-image" href="https://sspai.com/a/K859">
      <iImage placeholder="651x346" :imgStyle="{ maxHeight: `${maxHeight}px`}" src="https://cdn.sspai.com/article/f563a98e-3aaf-0edb-c95c-8e417aee967d.jpg?imageMogr2/quality/95/thumbnail/!x750r/gravity/Center/crop/x750" alt="" />
    </a>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    maxHeight: {
      type: Number,
      default: 243,
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

