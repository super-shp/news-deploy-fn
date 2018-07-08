<template>
  <div class="publish">
    publish
    <Editor
      v-model="content"
     />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Editor, convert } from '@/components/Editor';

export default Vue.extend({
  components: {
    Editor,
  },
  data() {
    return {
      content: convert(''),
    };
  },
});
</script>
