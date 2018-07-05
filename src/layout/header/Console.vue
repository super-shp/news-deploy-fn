<template>
  <div class="console">
    <a href="javascript:void(0)" class="menu">
      <Icon icon="home"/>
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>


<style lang="scss" scoped>
.console {
  position: absolute;
  right: 0;
  z-index: 1;
  line-height: 60px;

  .menu {
    margin-left: 20px;
    vertical-align: middle;
  }
}
</style>
