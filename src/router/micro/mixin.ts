import { default as Vue } from 'vue';
import { default as Hook } from './Hook.vue';
import { Mount } from './Mount';

export const HookComponent = ({ path }: any) => {
  const mountOps = new Mount({ path });
  const name = path.split('/')[0];
  // @ts-ignore
  const mount = Vue.extend({
    name: `${name}`,
    mixins: [Hook],
    ...mountOps,
  });

  return mount;
};
