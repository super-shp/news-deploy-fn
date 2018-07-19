<template>
  <div class="new-card">
    <header class="card-header">
      <span class="avatar">
        <iImage :imgStyle="{height: '40px', width: '40px'}" placeholder="40x40" src="https://cdn.sspai.com/2017/07/18/ec12863380c8d480b3daf6535330ca9a.png?imageMogr2/quality/95/thumbnail/!80x80r/gravity/Center/crop/80x80" />
      </span>
      <h4>少数派</h4>
      <time class="retweet"><Icon size="is-small" icon="autorenew"/>2小时前&nbsp;发布</time>
        <Dropdown class="more">
          <template slot="trigger">
            <a class="trigger-wrapper">
              <Icon icon="dots-horizontal" size="is-medium"  />
            </a>
          </template>

          <DropdownItem>置顶</DropdownItem>
          <DropdownItem>撤回</DropdownItem>
        </Dropdown>
    </header>
    <div class="banner">
      <a @click.stop="navToDetail" class="banner-link">
        <iImage :imgStyle="{height: '240px', width:'718px'}" placeholder="718x240" :src="info.cover"></iImage>
      </a>
    </div>
    <section class="card-info">
        <h3>
            <a  @click.stop="navToDetail">
            {{info.title}}
            </a>
          </h3>
        <summary class="desc">
          {{info.intro || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsa culpa doloribus hic accusantium' }}
        </summary>
    </section>
    <footer class="meta">
      <div class="actions">
        <span class="like-views">
          <Icon icon="thumb-up-outline"/>
          <sup>11</sup>
        </span>
        <span class="words-views">
          <Icon icon="lead-pencil"/>
          <sup>5,000</sup>
        </span>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { router } from '@/router';
export default Vue.extend({
  router,
  props: ['info'],
  methods: {
    navToDetail() {
      this.$router.push(`/detail/${this.info.pid}`);
    },
  },
});
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>



