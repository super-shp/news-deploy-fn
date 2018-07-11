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
      <a class="banner-link">
        <iImage :imgStyle="{height: '240px', width:'718px'}" placeholder="718x240" src="https://cdn.sspai.com/article/816cd264-4b3e-81e9-d487-bdc42955b688.jpg?imageMogr2/quality/95/thumbnail/!1440x480r/gravity/Center/crop/1440x480"></iImage>
      </a>
    </div>
    <section>
        <h3>
            <a>
            本期「福利派」包含了少数派定制周边，Power+ 定制 T 恤，效率新手包和付费栏目，若饭 V3.1、iSlide 特约优惠，活动在下周一结束。
            </a>
          </h3>
        <summary class="desc">
          本期「福利派」包含了少数派定制周边，Power+ 定制 T 恤，效率新手包和付费栏目，若饭 V3.1、iSlide 特约优惠，活动在下周一结束。
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
export default Vue.extend({});
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>



