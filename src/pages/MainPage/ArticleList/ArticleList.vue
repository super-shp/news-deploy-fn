<template>
  <div class="article-list">
   <div ref="articleContainer"> 
      <template v-for="article in articleList">
        <NewCard :info="article" />
      </template>
    </div>
    <a class="load-more">加载更多</a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { NewCard } from './New';
import * as actions from './actions';

export default Vue.extend({
  components: {
    NewCard,
  },
  data() {
    return {
      handle: null as any,
      articleContainerRefs: null as null | HTMLElement,
      total: 0,
      offset: 0,
      articleList: [] as any[],
      loadding: false,
    };
  },
  mounted() {
    this.articleContainerRefs = this.$refs.articleContainer as HTMLElement;
    this.loadArticle();
    this.handle = window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    async loadArticle(itemOffset: number = 0, pageSize: number = 10) {
      if (!this.loadding) {
        this.loadding = true;
        const page = +(itemOffset / pageSize).toFixed(0) || 1;
        const res = await actions.getArticleList(page);
        const { articleList, offset, total } = res as any;
        this.articleList = [...this.articleList, ...articleList];

        this.offset = offset;
        this.total = total;
        this.loadding = false;
      }
    },
    handleScroll() {
      if (this.articleContainerRefs) {
        const pos = this.articleContainerRefs.getBoundingClientRect();
        const clientHeight = window.screen.height;
        const controlHeight = clientHeight * 1.5;
        const { bottom } = pos;
        if (bottom < controlHeight) {
          this.loadArticle();
        }
      }
    },
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
    this.handle = null;
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

