import { default as Vue } from 'vue';
import { initUI } from './ui';
import { default as App } from './App.vue';
import { routerCreator } from './router';
import { storeCreator } from './store';
import { mountConfig } from './vueConfig';

mountConfig(Vue);
initUI(Vue);

new Vue({
  router: routerCreator(),
  store: storeCreator(),
  render: h => h(App),
}).$mount('#app');
