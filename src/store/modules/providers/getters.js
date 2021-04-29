import { typesProviders as types } from './types';

export const getters = {
  [types.getters.GET_ID_PROVIDERS](state) {
    return state.providers.map((x) => x.id);
  },
};

export default {};
