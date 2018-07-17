import { default as Vue } from 'vue';
import { default as MainPage } from './MainPage.vue';

export const hookMainPage = () => ({
  component: MainPage,
  mount: Vue.prototype.$mount,
});
