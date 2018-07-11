<template>
  <div class="main-layout">
    <div class="main-container">
      <slot name="main"></slot>
    </div>
    <div class="side-container">
      <slot name="side"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style lang="scss" scoped>
.main-layout {
  max-width: 1110px;
  padding-top: 45px;
  margin: 0 auto;

  &::after {
    content: '';
    clear: both;
    display: block;
    font-size: 0;
    height: 0;
    width: 0;
    visibility: hidden;
  }

  .main-container {
    min-height: 10px;
    float: left;
    margin-right: 50px;
    width: 768px;
  }

  .side-container {
    float: left;
    width: 290px;
    min-height: 500px;
  }
}
</style>
