import { default as NewsDetail } from './NewsDetail.vue';
import { vueMount } from '@/util/mount';

export const hookNewsDetail = () => ({
  component: NewsDetail,
  mount: vueMount,
});
