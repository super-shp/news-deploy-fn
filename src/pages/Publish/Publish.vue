<template>
  <div class="publish">
    <Container>
      <template slot="header">
        <h3>发布新闻</h3>
      </template>
      <template slot="content">
        <div class="editor-title">
          <Input placeholder="请输入标题..." v-model="title"/>
        </div>
        <Editor
          v-model="content"
        />
        <hr>
        <div class="option">
          <h4>设置专栏</h4>
          <TagInput
            v-model="column"
            :data="filteredTags"
            autocomplete
            icon="label"
            :maxtags="1"
            :allow-new="false"
            placeholder="设置专栏"
            @typing="getFilteredTags"
          />
        </div>
        <div class="option">
          <CoverSetter v-model="cover" />
        </div>
        <div class="option">
          <Button>取消</Button>
          <Button status="danger" @click="publish">提交</Button>
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
import * as actions from './actions';
import { getColumn } from '@/api';

export default Vue.extend({
  components: {
    Container,
    Editor,
    CoverSetter,
  },
  async mounted() {
    const storagedList = window.localStorage.getItem('columnList');
    let columnList = JSON.parse(storagedList as any);
    if (!columnList) {
      const { data } = await getColumn();
      columnList = data.columnList;
      window.localStorage.setItem('columnList', JSON.stringify(columnList));
    }

    if (this.columnList.length === 0) {
      columnList.forEach((item: any) => this.columnList.push(item));
    }
  },
  data() {
    return {
      filteredTags: [] as string[],
      columnList: [] as any[],
      title: '',
      content: convert('你好'),
      cover: '',
      column: [],
    };
  },
  methods: {
    async publish() {
      const { title, content, cover, column } = this;
      if (title && content && cover && column.length) {
        const columnInfo = this.columnList.filter(
          col => col.region_name === column[0],
        )[0];
        const { cid } = columnInfo;
        const data = await actions.publish({
          title,
          cid,
          content,
          cover,
        });
        console.log(data);
      }
    },
    getFilteredTags(text: string) {
      this.filteredTags = this.columnList
        .filter(colObserver => {
          const region_name = colObserver.region_name;
          return (
            region_name
              .toString()
              .toLowerCase()
              .indexOf(text.toLowerCase()) >= 0
          );
        })
        .map(item => item.region_name);
    },
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

  .option {
    margin-bottom: 20px;

    .taginput {
      width: 300px;

      &.taginput-container .autocomplete .icon {
      }
    }

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
  .editor-title {
    .control {
      .input {
        padding-left: 15px;
        font-weight: bold;
        font-size: 24px;
        text-align: center;
      }
    }
  }
  .control {
    .input {
      box-shadow: none;
      border-radius: 0;
      border: 0;
      border-bottom: 0;

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


