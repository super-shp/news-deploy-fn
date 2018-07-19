<template>
  <div class="news-detail">
    <Container>
      <template slot="header">
        <div class="banner">
          <img style="width: 100%" :src="cover" alt="">
        </div>
        <h1>{{title}}</h1>
        <sub>{{updated}}</sub>
      </template>
      <template slot="content">
        <Editor 
          :content="content"
          :options="{modules: {toolbar: false}, placeholder: false, readOnly: true}"
          :disabled="true"
        />
      </template>
    </Container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Editor, convert } from '@/components';
import { Container } from '@/components/layout/EditorContainer';
import { router } from '@/router';
import * as actions from './actions';

export default Vue.extend({
  router,
  components: {
    Editor,
    Container,
  },
  data() {
    return {
      pid: '',
      content: convert(''),
      author: '',
      title: '',
      cover: '',
      updated: '',
    };
  },
  async mounted() {
    const { pid } = this.$route.params;
    if (pid) {
      const data: any = await actions.fetchArticle(pid);
      if (data.code === 200) {
        const { content, title, cover, updated_time } = data.data;
        this.content = JSON.parse(content);
        this.title = title;
        this.cover = cover;
        this.updated = updated_time;
      }
    } else {
      this.$router.push('/');
    }
  },
});
</script>

<style lang="scss" scoped>
.news-detail {
  &::after {
    content: '';
    display: block;
    clear: both;
    visibility: hidden;
  }

  background-color: #fff;

  .publish-container {
    border: 0;
    width: 700px;

    .publish-header {
      border-bottom: 0;
    }
  }

  .banner {
    border-radius: 4px;
  }

  h1 {
    text-align: center;
  }

  sub {
    font-size: 14px;
    color: #bdbdbd;
  }

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
}
</style>


