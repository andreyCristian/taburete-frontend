import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';
import { MODULE_PRODUCTS } from './types';

export const module = {
  namespaced: true,
  state: {
    products: [],
  },
  actions,
  mutations,
  getters,
};

export const name = MODULE_PRODUCTS;
