<template>
  <div class="article-list">
    <NewCard></NewCard>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { NewCard } from './New';

export default Vue.extend({
  components: {
    NewCard,
  },
});
</script>
