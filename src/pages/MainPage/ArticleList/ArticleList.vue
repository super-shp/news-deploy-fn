<template>
  <div class="article-list">
    <NewCard />
    <NewCard />
    <NewCard />
    <NewCard />
    <a class="load-more">加载更多</a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { NewCard } from './New';

export default Vue.extend({
  components: {
    NewCard,
  },
});
</script>

<style lang="scss" scoped>
.article-list {
  .load-more {
    border: 1px solid #dbe2e8;
    box-shadow: 0 1px 2px rgba(46, 61, 73, 0.08);
    display: block;
    height: 70px;
    background-color: #fff;
    text-align: center;
    line-height: 70px;
    width: 100%;
  }
}
</style>

