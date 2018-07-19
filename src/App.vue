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
import { userInfo } from 'os';

@Component({
  components: {
    Container,
    Header,
    Footer,
  },
  data() {
    return {
      userInfo: null,
    };
  },
  updated() {
    const storagedInfo = window.localStorage.getItem('userInfo');
    if (storagedInfo !== '' && storagedInfo !== null) {
      Vue.set(this, 'userInfo', storagedInfo);
    } else {
      Vue.set(this, 'userInfo', null);
    }
  },
})
export default class App extends Vue {}
</script>

