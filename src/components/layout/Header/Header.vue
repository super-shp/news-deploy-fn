<template>
  <div class="header">
    <div class="header-fixed">
      <header>
        <div class="inner">
          <a class="logo"></a>
          <div class="console-position">
            <Console />
          </div>
        </div>
      </header>
      <nav class="column-nav" v-show="isTop">
        <ul class="column-list">
          <li class="column-item" v-for="item in columnList">
            <a>{{item}}</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Console } from './Console';

export default Vue.extend({
  components: {
    Console,
  },
  data() {
    return {
      isTop: true as boolean,
      columnList: [
        '专题广场',
        'Matrix',
        '付费栏目',
        '效率工具',
        '手机摄影',
        '生活方式',
        '游戏',
        '硬件',
      ] as string[],
    };
  },
  mounted() {
    window.addEventListener('scroll', this.setPositionScrolling);
  },
  methods: {
    setPositionScrolling() {
      const dom: HTMLElement = this.$el;
      const rect: ClientRect = dom.getBoundingClientRect();
      const { top } = rect;
      if (top > -20 && !this.isTop) {
        this.isTop = true;
      } else if (top <= -20 && this.isTop) {
        this.isTop = false;
      }
    },
  },
  destroyed() {
    window.removeEventListener('scroll', this.setPositionScrolling);
  },
});
</script>


<style lang="scss" scoped>
.header {
  .header-fixed {
    position: fixed;
    width: 100%;
    transition: all 0.3s;
    z-index: 1;

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
          background: url(data:image/png;base64,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);
          background-size: auto 100%;
          height: 38px;
          margin: 11px 0;
          width: 108px;
          font-size: 0;
        }
      }
    }

    .column-nav {
      box-shadow: 0 2px 0 rgba(41, 67, 73, 0.01) 0 1px 0 rgba(0, 0, 0, 0.12);
      transition: all 0.5s;
      border-bottom: 1px solid rgba(0, 0, 0, 0.12);

      .column-list {
        width: 1110px;
        margin: 0 auto;
        padding: 0;
        text-align: center;
        height: 40px;
        line-height: 40px;
        display: flex;
        font-size: 14px;

        .column-item {
          flex: 1;
          list-style: none;
          padding: 0;
          margin: 0;
          margin-bottom: -1px;

          a {
            display: block;
            border-left: 1px solid rgba(0, 0, 0, 0.12);
            color: #292525;
            font-weight: 700;

            &:hover {
              color: #d7191a;
            }
          }

          &:last-of-type a {
            border-right: 1px solid rgba(0, 0, 0, 0.12);
          }
        }
      }
    }
  }
}
</style>

