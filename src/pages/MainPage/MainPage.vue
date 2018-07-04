<template>
<div>
  <h1>just a test for main page</h1>
  <p>{{msg}}</p>
  <Button status="primary" loading>你好</Button>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Inject } from 'vue-property-decorator';

@Component
export default class MainPage extends Vue {
  private msg: string = 'try this ts?';
}
</script>