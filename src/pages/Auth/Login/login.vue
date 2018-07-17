<template>
  <div class="login-container">
    <h3>登陆</h3>
    <section>
      <Field label="用户名">
        <Input v-model="username" />
      </Field>
      <Field label="密码">
        <Input type="password" v-model="password" />
      </Field>
      <div class="option">
        <Button status="danger" @click="login">登陆</Button>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { login } from './actions';

export default Vue.extend({
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async login() {
      const data = await login(this.username, this.password);
    },
  },
});
</script>

<style lang="scss" scoped>
.login-container {
  border-radius: 4px;
  width: 400px;
  margin: 150px auto 0;
  padding: 30px;
  background-color: #fff;

  &::after {
    content: '';
    display: block;
    clear: both;
    visibility: hidden;
  }

  .option {
    float: right;
  }
}
</style>
