<template>
<div class="register-container">
  <section>
    <h3>注册会员</h3>
    <Field label="用户名">
      <Input v-model="username" />
    </Field>
    <Field label="密码">
      <Input v-model="password" />
    </Field>
    <Field label="昵称">
      <Input v-model="author" />
    </Field>
    <div class="option">
      <Button status="danger" @click="signup">注册</Button>
    </div>
  </section>
</div>
</template>

<script lang="ts">
import { default as Vue } from 'vue';
import { signUp } from './actions';
import { router } from '@/router';

export default Vue.extend({
  router,
  data() {
    return {
      username: '',
      password: '',
      author: '',
    };
  },

  methods: {
    async signup() {
      const { username, password, author } = this;
      if (username && password && author) {
        const data: any = await signUp(username, password, author);
        if (data.code === 200) {
          alert('注册成功');
          router.push('/');
        } else {
          alert('您有未完成的选项');
        }
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.register-container {
  width: 600px;
  padding: 40px 60px;
  border-radius: 4px;
  background-color: #fff;
  margin: 150px auto 20px;

  .option {
    padding: 20px 0;

    &::after {
      content: '';
      display: block;
      clear: both;
      visibility: hidden;
    }

    .button {
      height: 40px;
      width: 150px;
      float: right;
    }
  }
}
</style>
