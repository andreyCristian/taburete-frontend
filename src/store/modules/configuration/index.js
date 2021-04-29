import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';
import { MODULE_CONFIGURATIONS } from './types';

export const module = {
  namespaced: true,
  state: {
    unidsTypes: [],
    productTypes: [],
  },
  actions,
  mutations,
  getters,
};

export const name = MODULE_CONFIGURATIONS;
