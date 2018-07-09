<template>
  <span class="image-with-placeholder" ref="imageWrapper">
    <img v-if="isShowPlaceholder" v-holder="imagePlaceholder">
  </span>
</template>

<script lang="ts">
/// <reference path="./vue-holderjs.d.ts">

import Vue from 'vue';
import { Image } from '@/components/Editor/blots';
import { setTimeout } from 'timers';
import { debug } from 'util';
export default Vue.extend({
  props: ['src', 'placeholder', 'imgStyle'],
  data() {
    return {
      isShowPlaceholder: true,
    };
  },
  mounted() {
    const imageWrapper = this.$refs.imageWrapper as HTMLElement;
    const image = document.createElement('img');
    Object.keys(this.imgStyle).forEach((key: string) => {
      const value = this.imgStyle[key];
      // @ts-ignore
      image.style[key] = value;
    });
    image.onload = () => {
      this.isShowPlaceholder = false;
      this.$nextTick(() => {
        imageWrapper.appendChild(image);
      });
    };
    image.src = this.src;
  },
  computed: {
    imagePlaceholder(): any {
      return {
        img: this.placeholder,
        auto: true,
        theme: 'gray',
      };
    },
  },
});
</script>


<style lang="scss" scoped>
.image-with-placeholder {
  display: inline-block;
  width: 100%;
  height: 100%;
}
</style>

