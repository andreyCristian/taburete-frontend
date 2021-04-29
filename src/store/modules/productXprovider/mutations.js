import { typesProductsXProviders as types } from './types';

export const mutations = {
  [types.mutations.SET_CATALOG](state, payload) {
    state.catalog = payload;
  },
  [types.mutations.SET_ITEM_CATALOG](state, payload) {
    state.costProduct = payload;
  },
};

export default {};
