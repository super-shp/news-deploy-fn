<template>
  <div class="container-wrapper">
    <slot name="header"></slot>
    <slot name="content"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default class Container extends Vue.extend({}) {
  constructor(props: any) {
    super(props);
  }
}
</script>

<style lang="scss" scoped>
.container-wrapper {
  min-width: 1110px;
  height: 1000px;
}
</style>


