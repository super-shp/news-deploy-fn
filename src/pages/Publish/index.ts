import { store as Publishx, PublishState } from './store';

import { default as Publish } from './Publish.vue';
import { Store } from 'vuex';
import { vueMount } from '@/util/mount';

export const hookPublish = ({ store }: any) => {
  (store as Store<any>).registerModule<PublishState>(['Publish'], Publishx);
  return {
    component: Publish,
    mount: vueMount,
  };
};
