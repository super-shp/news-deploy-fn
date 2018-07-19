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
        <DropdownItem><router-link to="/login">登陆</router-link></DropdownItem>
        <DropdownItem><router-link to="/register">注册</router-link></DropdownItem>
      </div>
      <div v-else>
        <DropdownItem @click="logout">退出登录</DropdownItem>
      </div>
    </Dropdown>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { default as Search } from './Search.vue';
import { router } from '@/router';

export default Vue.extend({
  router,
  components: {
    Search,
  },
  props: {
    username: String,
  },
  methods: {
    logout() {
      window.localStorage.setItem('auth', '');
      alert('退出成功');
      this.$router.push('/');
    },
  },
  computed: {
    getLoginStatus(): boolean {
      if (window.localStorage.getItem('auth')) {
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
