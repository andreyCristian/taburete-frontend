import { typesConfigurations as types } from './types';

export const mutations = {
  [types.mutations.SET_UNIDS_TYPES](state, payload) {
    state.unidsTypes = payload;
  },
  [types.mutations.SET_PRODUCTS_TYPES](state, payload) {
    state.productTypes = payload;
  },
};

export default {};
