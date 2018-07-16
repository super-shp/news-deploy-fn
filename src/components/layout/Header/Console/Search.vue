<template>
  <div class="search-wrap" :class="wrapperClasses" @click="toggleExpandClass">
    <div class="search-inner">
      <a href="javascript:void(0)" class="menu">
        <Icon icon="magnify"/>
      </a>
      <input 
        class="search-input" 
        @click.stop="" 
        @blur="toggleIsExpand" 
        v-model="searchText" 
        @keyup.enter="dispatchSearch"
        placeholder="输入搜索内容..." /> 
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      wrapperClasses: [] as string[],
      searchText: '',
    };
  },

  methods: {
    toggleExpandClass() {
      const index: number = this.wrapperClasses.indexOf('expand');
      if (index >= 0) {
        this.wrapperClasses.splice(index);
      } else {
        this.wrapperClasses.push('expand');
      }
    },

    /**
     * 在blur的时候判断如果有有文本的话就不隐藏搜索框
     * 如果无文本的话隐藏
     */
    toggleIsExpand(): void {
      const index: number = this.wrapperClasses.indexOf('expand');

      if (this.searchText && index < 0) {
        this.toggleExpandClass();
      } else if (!this.searchText && index >= 0) {
        this.toggleExpandClass();
      }
    },

    dispatchSearch() {
      // TODO: request search result
    },
  },
});
</script>


<style lang="scss" scoped>
.search-wrap {
  display: inline-block;
  width: 24px;
  height: 60px;
  overflow: hidden;
  transition: all 0.3s;

  .search-inner {
    width: 200px;

    .search-input {
      display: inline-block;
      width: 148px;
      height: 24px;
      outline-color: 0;
      margin-left: 10px;
      vertical-align: text-bottom;
      border: none;
      background: transparent;
      color: #fff;
      border-bottom: 1px solid #fff;
      font-size: 14px;

      &:focus {
        outline: 0;
      }
    }
  }

  .icon {
    color: #fff;
  }
}

.expand {
  width: 200px;
}
</style>

