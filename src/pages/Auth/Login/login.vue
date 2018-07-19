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
import { login, getUserInfo } from './actions';
import { router } from '@/router';
import { ERROR } from '@/api';

export default Vue.extend({
  router,
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async login() {
      const data: any = await login(this.username, this.password);
      if (data.errorCode === ERROR.SUCCESS) {
        const userInfo = await getUserInfo();

        const { errorCode } = userInfo as any;

        if (errorCode === ERROR.SUCCESS) {
          window.localStorage.setItem('userInfo', JSON.stringify(userInfo));
          this.$router.push('/');
        }
      }
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
