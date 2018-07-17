import { default as Whoops } from './Whoops.vue';
import { vueMount } from '@/util/mount';

export const hookWhoops = () => ({
  component: Whoops,
  mount: vueMount,
});
