<template>
<div class="main-page">
  <TopBanner />
  <MainLayout>
    <template slot="main">
      <ArticleList />
    </template>
  </MainLayout>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { TopBanner } from './TopBanner';
import { MainLayout } from './MainLayout';
import { ArticleList } from './ArticleList';

export default Vue.extend({
  components: {
    TopBanner,
    MainLayout,
    ArticleList,
  },
});
</script>

<style lang="scss" scoped>
</style>

