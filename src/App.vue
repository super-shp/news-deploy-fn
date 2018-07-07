<template>
  <div id="app">
    <Container>
      <Header slot="header"/>
      <router-view slot="content" />
    </Container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Header, Container } from './layout';

@Component({
  components: {
    Container,
    Header,
  },
})
export default class App extends Vue {}
</script>

