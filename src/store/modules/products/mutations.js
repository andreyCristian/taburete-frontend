import { typesProducts as types } from './types';

export const mutations = {
  [types.mutations.SET_PRODUCTS](state, payload) {
    state.products = payload;
  },
};

export default {};
