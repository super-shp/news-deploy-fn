<template>
  <div class="publish">
    <Container>
      <template slot="header">
        <h3>发布新闻</h3>
      </template>
      <template slot="content">
        <Input placeholder="请输入标题..." v-model="title"/>
        <Editor
          v-model="content"
        />
      </template>
    </Container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Container } from './Container';
import { Editor, convert } from '@/components/Editor';

export default Vue.extend({
  components: {
    Container,
    Editor,
  },
  data() {
    return {
      title: '',
      content: convert('你好'),
    };
  },
});
</script>

<style lang="scss" scoped>
.publish {
  &::after {
    content: '';
    display: block;
    clear: both;
    visibility: hidden;
  }
}
</style>

<style lang="scss">
.publish {
  .control {
    .input {
      box-shadow: none;
      border-radius: 0;
      border: 0;
      border-bottom: 0;
      padding-left: 15px;
      font-weight: bold;
      font-size: 24px;
      text-align: center;

      &::placeholder {
        color: rgba(0, 0, 0, 0.6);
      }

      &:active,
      &:focus {
        outline: none;
        border: 0;
        box-shadow: none;
      }
    }
  }

  .ql-toolbar {
    &.ql-snow {
      background-color: #eee;
      border: 0;
      margin-bottom: 10px;
    }
  }
}
</style>


