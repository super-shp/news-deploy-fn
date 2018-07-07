import { default as Vue } from 'vue';
import { initUI } from './ui';
import { default as App } from './App.vue';
import { routerCreator } from './router';
import { storeCreator } from './store';
import { mountConfig } from './vueConfig';

// set config by env
mountConfig(Vue);
// regist ui
initUI(Vue);
// create router
const router = routerCreator();
// create store
const store = storeCreator();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
