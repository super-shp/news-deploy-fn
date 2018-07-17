import { state, actions, mutations, PublishState } from './store';
import { Module } from 'vuex';

export const store: Module<PublishState, any> = {
  namespaced: true,
  state,
  getters: {},
  mutations,
  actions,
};

export { PublishState } from './store';
