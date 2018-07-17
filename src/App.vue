<template>
  <div id="app">
    <Container>
      <template slot="header">
        <Header />
      </template>
      <template slot="content">
        <router-view  />
      </template>
      <template slot="footer">
        <Footer />
      </template>
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

