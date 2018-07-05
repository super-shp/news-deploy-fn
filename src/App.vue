<template>
  <div id="app">
    <Header>
      <template slot="console">
        <Console />
      </template>
    </Header>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Header, Console } from './layout/header';

@Component({
  components: {
    Header,
    Console,
  },
})
export default class App extends Vue {}
</script>
