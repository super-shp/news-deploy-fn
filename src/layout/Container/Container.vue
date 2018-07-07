<template>
  <div class="container-wrapper">
    <slot name="header"></slot>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.container-wrapper {
  height: 1000px;

  .content {
    margin: 45px 10px 0;
  }
}
</style>


