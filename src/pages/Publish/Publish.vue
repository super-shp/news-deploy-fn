<template>
  <div class="publish">
    publish
    <Editor></Editor>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Editor } from './Editor';

export default Vue.extend({
  components: {
    Editor,
  },
});
</script>
