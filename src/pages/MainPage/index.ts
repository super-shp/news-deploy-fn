import { default as MainPage } from './MainPage.vue';
import { vueMount } from '@/util/mount';

export const hookMainPage = () => ({
  component: MainPage,
  mount: vueMount,
});

export { default as MainPage } from './MainPage.vue';
