import { default as Vue } from 'vue';
import { default as Hook } from './Hook.vue';
import { Mount } from './Mount';

export const HookComponent = ({ path }: any) => {
  // @ts-ignore
  return Vue.extend({
    mixins: [Hook],
    ...new Mount({ path }),
  });
};
