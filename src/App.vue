<template>
  <div id="app">
    <Container>
      <Header slot="header"/>
      <router-view slot="content" />
      <Footer slot="footer"/>
    </Container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Header, Container, Footer } from './components';

@Component({
  components: {
    Container,
    Header,
    Footer,
  },
})
export default class App extends Vue {}
</script>

