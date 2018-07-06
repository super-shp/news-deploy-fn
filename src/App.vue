<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Header } from './layout/Header';

@Component({
  components: {
    Header,
  },
})
export default class App extends Vue {}
</script>

