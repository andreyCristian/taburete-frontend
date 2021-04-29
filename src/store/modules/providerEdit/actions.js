import router from '@/router';

import ProviderApi from '@/api/ProviderApi';

import { typesProviderEdit as types } from './types';

const providerApi = new ProviderApi();

export const actions = {
  [types.actions.SAVE_PROVIDER]({ commit, state }) {
    let request = null;

    if (state.id) request = providerApi.put(state.id, state.provider);
    else request = providerApi.post(state.provider);

    request
      .then((res) => {
        commit(types.mutations.SET_ID, null);
        commit(types.mutations.SET_PROVIDER, {});

        alert(res.data);

        router.push({ name: 'provider' });
      })
      .catch((e) => alert(e));
  },
  [types.actions.UPDATE_PROVIDER]({ commit }, payload) {
    if (payload) {
      providerApi.get(payload)
        .then((res) => {
          commit(types.mutations.SET_ID, payload);
          commit(types.mutations.SET_PROVIDER, res.data[0]);
        })
        .catch((e) => alert(e));
    } else {
      commit(types.mutations.SET_ID, null);
      commit(types.mutations.SET_PROVIDER, {});
    }
  },
};

export default {};
