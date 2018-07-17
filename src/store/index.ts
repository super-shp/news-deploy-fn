import { default as Vuex } from 'vuex';
import { default as Vue } from 'vue';

Vue.use(Vuex);

const vuexStore = new Vuex.Store({
  state: {},
  mutations: {},
  getters: {},
  actions: {},
});

export const store = vuexStore;
