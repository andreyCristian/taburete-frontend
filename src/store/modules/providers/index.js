import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';
import { MODULE_PROVIDERS } from './types';

export const module = {
  namespaced: true,
  state: {
    providers: [],
  },
  actions,
  mutations,
  getters,
};

export const name = MODULE_PROVIDERS;
