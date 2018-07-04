import { default as Vue } from 'vue';
import { initUI } from './ui';
import { default as App } from './App.vue';
import { routerCreator } from './router';
import { storeCreator } from './store';

Vue.config.productionTip = false;

initUI();
new Vue({
  router: routerCreator(),
  store: storeCreator(),
  render: h => h(App),
}).$mount('#app');
