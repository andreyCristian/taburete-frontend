import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';
import { MODULE_PRODUCTS_BY_PROVIDERS } from './types';

export const module = {
  namespaced: true,
  state: {
    catalog: [],
    costProduct: null,
  },
  actions,
  mutations,
  getters,
};

export const name = MODULE_PRODUCTS_BY_PROVIDERS;
