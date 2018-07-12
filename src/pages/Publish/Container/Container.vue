<template>
  <div class="publish-container">
    <header class="publish-header">
      <slot name="header"></slot>
    </header>
    <div class="publish-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>


<style lang="scss" scoped>
.publish-container {
  width: 1110px;
  margin: 30px auto;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #dbe2e8;

  .publish-header {
    padding-top: 20px;
    padding-left: 45px;
  }

  .publish-content {
    padding: 10px 50px;
  }
}
</style>

