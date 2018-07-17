import { VueConstructor } from 'vue';
import { isProd } from '@/util';

export const devOption = {
  silent: false,
  devtools: true,
  performance: true,
  productionTip: true,
};

export const prodOption = {
  silent: true,
  devtools: false,
  performance: false,
  productionTip: false,
};

export const mountConfig = (Vue: VueConstructor) => {
  if (isProd) {
    Object.assign(Vue.config, prodOption);
  } else {
    Object.assign(Vue.config, devOption);
  }
};
