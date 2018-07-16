<template>
<div class="main-page">
  <TopBanner />
  <MainLayout>
    <template slot="main">
      <ArticleList />
    </template>
    <template slot="side">
      <ColumnList />
    </template>
  </MainLayout>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { TopBanner } from './TopBanner';
import { MainLayout } from './MainLayout';
import { ArticleList } from './ArticleList';
import { ColumnList } from './ColumnList';

export default Vue.extend({
  components: {
    TopBanner,
    MainLayout,
    ArticleList,
    ColumnList,
  },
});
</script>

<style lang="scss" scoped>
.main-page {
  padding: 45px 0 45px;

  &::after {
    content: '';
    display: block;
    clear: both;
    visibility: hidden;
  }
}
</style>

