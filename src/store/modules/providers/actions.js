import ProviderApi from '@/api/ProviderApi';

import { typesProviders as types } from './types';

const providerApi = new ProviderApi();

export const actions = {
  [types.actions.UPDATE_PROVIDERS]({ commit }) {
    providerApi.getAll()
      .then((response) => commit(types.mutations.SET_PROVIDERS, response.data))
      .catch((e) => console.log(e));
  },
};

export default {};
