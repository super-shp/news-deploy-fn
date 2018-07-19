<template>
<div class="main-page">
  <TopBanner />
  <MainLayout>
    <template slot="main">
      <ArticleList :articleList="articleList" />
    </template>
    <template slot="side">
      <ColumnList :columnList="columnList" />
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
import { getColumn } from '@/api';
import * as actions from './actions';

export default Vue.extend({
  components: {
    TopBanner,
    MainLayout,
    ArticleList,
    ColumnList,
  },
  data() {
    return {
      columnList: [],
      articleList: [] as any[],
      total: 0,
      offset: 0,
      current: 1,
    };
  },
  async mounted() {
    const { data } = await getColumn();
    const { columnList } = data;
    this.columnList = columnList;
    window.localStorage.setItem('columnList', JSON.stringify(columnList));

    const res = await actions.getArticleList(1);
    const { articleList, offset, total } = res as any;
    this.offset = offset;
    this.total = total;
    articleList.forEach((article: any) => {
      this.articleList.push(article);
    });
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

