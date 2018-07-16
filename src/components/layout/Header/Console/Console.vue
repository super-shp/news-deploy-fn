<template>
  <div class="console">
    <router-link to="/publish" class="menu">
      <Icon icon="pencil"/>
    </router-link>
    <Search class="menu" />
    <Dropdown>
      <a class="selfinfo-trigger" slot="trigger">
        <span>{{getUserName}}</span>
        <Icon icon="menu-down"></Icon>
      </a>

      <div v-if="!getLoginStatus">
        <DropdownItem @click="login"><router-link to="/login">登陆</router-link></DropdownItem>
        <DropdownItem><router-link to="/register">注册</router-link></DropdownItem>
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

  .icon {
    color: #fff;
  }
}
</style>
