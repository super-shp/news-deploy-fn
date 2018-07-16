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
  position: relative;
  background-color: #fafbfc;
  box-shadow: 0 1px 4px;

  &::after {
    content: '';
    clear: both;
    display: block;
    visibility: hidden;
  }

  .content {
    padding: 60px 10px 120px;
    min-height: 100vh;
    margin-bottom: 0;

    &::after {
      content: '';
      display: block;
      clear: both;
      visibility: hidden;
    }
  }
}
</style>


