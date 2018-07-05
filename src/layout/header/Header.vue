<template>
  <div class="header">
    <div class="header-fixed">
      <header>
        <div class="inner">
          <a class="logo"></a>
          <div class="console"></div>
        </div>
      </header>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>


<style lang="scss" scoped>
.header {
  height: 101px;

  .header-fixed {
    position: fixed;
    width: 100%;
    transition: all 0.3s;

    header {
      background-color: #292525;
      height: 60px;

      .inner {
        width: 1110px;
        position: relative;
        margin: 0 auto;

        .logo {
          display: block;
          position: absolute;
          left: 0;
          z-index: 1;
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAABMCAYAAAAP13m4AAAAAXNSR…281dXJSW53RavDDis/5ocf9gazceRODzg94PSA0wOHeA/8P9RhHo+FrpjfAAAAAElFTkSuQmCC);
          background-size: auto 100%;
          height: 38px;
          margin: 11px 0;
          width: 108px;
          font-size: 0;
        }
      }
    }
  }
}
</style>

