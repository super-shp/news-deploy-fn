<template>
<div class="register-container">
  <section>
    <h3>注册会员</h3>
    <Field label="用户名">
      <Input />
    </Field>
    <Field label="密码">
      <Input />
    </Field>
    <Field label="昵称">
      <Input />
    </Field>
    <div class="option">
      <Button status="danger">注册</Button>
    </div>
  </section>
</div>
</template>

<script lang="ts">
import { default as Vue } from 'vue';
export default Vue.extend({});
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
