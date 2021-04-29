import { typesProviderEdit as types } from './types';

export const mutations = {
  [types.mutations.SET_ID](state, payload) {
    state.id = payload;
  },
  [types.mutations.SET_PROVIDER](state, payload) {
    state.provider = payload;
  },
};

export default {};
