<template>
  <div class="top-banner">
    <div class="first">
      <iImage :maxHeight="503.5"></iImage>
    </div>
    <div class="row">
      <div class="row2">
        <iImage></iImage>
        <iImage></iImage>
      </div>
      <div class="row2">
        <iImage></iImage>
        <iImage></iImage>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { default as iImage } from './Image.vue';

export default Vue.extend({
  components: {
    iImage,
  },
});
</script>


<style lang="scss" scoped>
.top-banner {
  display: flex;
  margin: 0 10px;

  .first {
    width: 50%;
  }

  .row {
    width: 50%;
    flex: 1;

    .row2 {
      display: flex;

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
