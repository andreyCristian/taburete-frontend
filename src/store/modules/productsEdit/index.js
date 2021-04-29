import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';
import { MODULE_PRODUCT_EDIT } from './types';

export const module = {
  namespaced: true,
  state: {
    id: null,
    product: {},
  },
  actions,
  mutations,
  getters,
};

export const name = MODULE_PRODUCT_EDIT;
