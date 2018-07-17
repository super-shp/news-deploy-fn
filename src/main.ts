import { default as Vue } from 'vue';
import { initUI } from '@/components';
import { default as App } from './App.vue';
import { router } from '@/router';
import { store } from '@/store';
import { mountConfig } from '@/config/vueConfig';

// set config by env
mountConfig(Vue);
// regist ui
initUI(Vue);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
