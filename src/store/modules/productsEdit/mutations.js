import { typesProductEdit as types } from './types';

export const mutations = {
  [types.mutations.SET_ID](state, payload) {
    state.id = payload;
  },
  [types.mutations.SET_PRODUCT](state, payload) {
    state.product = payload;
  },
  [types.mutations.SET_VALUE_PRODUCT](state, payload) {
    state.product.precio_venta = payload;
  },
};

export default {};
