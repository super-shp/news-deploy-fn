import { default as Vue } from 'vue';
import { default as Vuex, Store } from 'vuex';

Vue.use(Vuex);

export const storeCreator = (): Store<any> =>
  new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
  });
