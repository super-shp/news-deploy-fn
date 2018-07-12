<template>
  <div class="column-list">
    <header class="column-list-header">
      <h3>推荐专题</h3>
    </header>
    <section class="column-detail">
      <a class="column-card">
        <iImage :imgStyle="{width: '290px', height: '160px'}" placeholder="290x160"  src="https://cdn.sspai.com/topic/02a2cecc-f6cd-4813-c0de-52efc66d76da.jpg?imageMogr2/quality/95/thumbnail/!828x445r/gravity/Center/crop/828x445" /> 
        <div class="mask">
          <h4>把 Mac 菜单栏变成万能工具箱</h4>
          <a class="btn">查看专题</a>
        </div>
      </a>

      <a class="column-card">
        <iImage :imgStyle="{width: '290px', height: '160px'}" placeholder="290x160"  src="https://cdn.sspai.com/topic/02a2cecc-f6cd-4813-c0de-52efc66d76da.jpg?imageMogr2/quality/95/thumbnail/!828x445r/gravity/Center/crop/828x445" /> 
        <div class="mask">
          <h4>把 Mac 菜单栏变成万能工具箱</h4>
          <a class="btn">查看专题</a>
        </div>
      </a>

      <a class="column-card">
        <iImage :imgStyle="{width: '290px', height: '160px'}" placeholder="290x160"  src="https://cdn.sspai.com/topic/02a2cecc-f6cd-4813-c0de-52efc66d76da.jpg?imageMogr2/quality/95/thumbnail/!828x445r/gravity/Center/crop/828x445" /> 
        <div class="mask">
          <h4>把 Mac 菜单栏变成万能工具箱</h4>
          <a class="btn">查看专题</a>
        </div>
      </a>

      <a class="column-card">
        <iImage :imgStyle="{width: '290px', height: '160px'}" placeholder="290x160"  src="https://cdn.sspai.com/topic/02a2cecc-f6cd-4813-c0de-52efc66d76da.jpg?imageMogr2/quality/95/thumbnail/!828x445r/gravity/Center/crop/828x445" /> 
        <div class="mask">
          <h4>把 Mac 菜单栏变成万能工具箱</h4>
          <a class="btn">查看专题</a>
        </div>
      </a>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style lang="scss" scoped>
.column-list {
  .column-list-header {
    padding-bottom: 6px;
    border-bottom: 1px solid #e9e9ea;
    margin-bottom: 15px;

    h3 {
      position: relative;
      display: inline-block;
      font-size: 14px;
      font-weight: bold;
      color: #292525;

      &::after {
        content: ' ';
        display: block;
        height: 27px;
        width: 100%;
        border-bottom: 1px solid #292525;
        position: absolute;
        left: 0;
        top: 4px;
      }
    }
  }

  .column-detail {
    .column-card {
      position: relative;
      display: block;
      margin: 0 0 15px;
      line-height: 1;

      .mask {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.6);
        transition: all 0.5s;
        width: 100%;
        height: 100%;

        &:hover {
          background-color: rgba(0, 0, 0, 0.2);
        }

        h4 {
          font-size: 16px;
          color: #fff;
        }

        .btn {
          color: #fff;
          font-size: 12px;
          font-weight: 500;
          display: inline-block;
          cursor: pointer;
          background-color: transparent;
          border-radius: 100px;
          text-align: center;
          text-decoration: none;
          border: 1px solid #fff;
          padding: 7px 24px;
        }
      }
    }
  }
}
</style>

