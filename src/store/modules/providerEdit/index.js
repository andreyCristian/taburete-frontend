import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';
import { MODULE_PROVIDER_EDIT } from './types';

export const module = {
  namespaced: true,
  state: {
    id: null,
    provider: {},
  },
  actions,
  mutations,
  getters,
};

export const name = MODULE_PROVIDER_EDIT;
