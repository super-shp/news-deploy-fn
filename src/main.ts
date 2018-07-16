import { default as Vue } from 'vue';
import { initUI } from './ui';
import { default as App } from './App.vue';
import { router } from './router';
import { mountConfig } from './vueConfig';

// set config by env
mountConfig(Vue);
// regist ui
initUI(Vue);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
