import { typesProviders as types } from './types';

export const mutations = {
  [types.mutations.SET_PROVIDERS](state, payload) {
    state.providers = payload;
  },
};

export default {};
