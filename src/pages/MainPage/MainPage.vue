<template>
<div class="main-page">
  <TopBanner></TopBanner>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { TopBanner } from './TopBanner';

export default Vue.extend({
  components: {
    TopBanner,
  },
});
</script>

<style lang="scss" scoped>
</style>

