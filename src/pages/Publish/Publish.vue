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
        <hr>
        <div class="option">
          <h4>设置专栏</h4>
          <Select placeholder="选择专栏">
            <option value="test">测试</option>
          </Select>
        </div>
        <div class="option">
          <CoverSetter />
        </div>
        <div class="option">
          <Button>取消</Button>
          <Button status="danger">提交</Button>
        </div>
      </template>
    </Container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Container } from './Container';
import { Editor, convert } from '@/components/Editor';
import { CoverSetter } from './CoverSetter';

export default Vue.extend({
  components: {
    Container,
    Editor,
    CoverSetter,
  },
  data() {
    return {
      title: '',
      content: convert('你好'),
      cover: '',
    };
  },
  methods: {},
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

  .option {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }

    &::after {
      content: '';
      display: block;
      clear: both;
      visibility: hidden;
    }

    .button {
      width: 150px;
      height: 40px;
      font-weight: bold;
      margin-right: 30px;
      float: right;
    }
  }
}
</style>

<style lang="scss" scoped>
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


