<template>
  <div class="console">
    <a href="javascript:void(0)" class="menu">
      <Icon icon="pencil"/>
    </a>
    <Search class="menu" />
    <a href="javascript:void(0)" class="menu">
      <Icon icon="bell"/>
    </a>
    <Dropdown>
      <a class="selfinfo-trigger" slot="trigger">
        <span>{{getUserName}}</span>
        <Icon icon="menu-down"></Icon>
      </a>

      <div v-if="!getLoginStatus">
        <DropdownItem @click="login">登陆</DropdownItem>
        <DropdownItem>注册</DropdownItem>
      </div>
      <div v-else>
        <DropdownItem>个人中心</DropdownItem>
        <DropdownItem>退出登录</DropdownItem>
      </div>
    </Dropdown>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { default as Search } from './Search.vue';

import { login } from './actions';

export default Vue.extend({
  components: {
    Search,
  },
  props: {
    username: String,
  },
  methods: {
    async login() {
      const data = await login();
      console.log(data);
    },
  },
  computed: {
    getLoginStatus(): boolean {
      if (window.localStorage.getItem('loginToken')) {
        return true;
      } else {
        return false;
      }
    },
    getUserName(): string {
      if (this.username) {
        return this.username;
      } else {
        return '未登录';
      }
    },
  },
});
</script>


<style lang="scss" scoped>
.console {
  position: absolute;
  right: 0;
  z-index: 1;
  line-height: 60px;

  .menu {
    margin-left: 20px;
    vertical-align: middle;
  }

  .selfinfo-trigger {
    margin-left: 20px;
    color: #fff;

    &:hover {
      color: #fff;
    }
  }
}
</style>
