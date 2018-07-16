<template>
  <div class="login-container">
    <h3>登陆</h3>
    <section>
      <Field label="用户名">
        <Input />
      </Field>
      <Field label="密码">
        <Input type="password" />
      </Field>
      <Button status="danger">登陆</Button>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style lang="scss" scoped>
.login-container {
  border-radius: 4px;
  width: 400px;
  margin: 100px auto;
  padding: 30px;
  background-color: #fff;
}
</style>
