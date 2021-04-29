import router from '@/router';

import ProductApi from '@/api/ProductApi';

import { typesProductEdit as types } from './types';

const productApi = new ProductApi();

export const actions = {
  [types.actions.SAVE_PRODUCT]({ commit, state }) {
    let request = null;

    if (state.id) request = productApi.put(state.id, state.product);
    else request = productApi.post(state.product);

    request
      .then((res) => {
        commit(types.mutations.SET_ID, null);
        commit(types.mutations.SET_PRODUCT, {});

        alert(res.data);

        router.push({ name: 'product' });
      })
      .catch((e) => alert(e));
  },
  [types.actions.UPDATE_PRODUCT]({ commit }, payload) {
    if (payload) {
      productApi.get(payload)
        .then((res) => {
          commit(types.mutations.SET_ID, payload);
          commit(types.mutations.SET_PRODUCT, res.data[0]);
        })
        .catch((e) => alert(e));
    } else {
      commit(types.mutations.SET_ID, null);
      commit(types.mutations.SET_PRODUCT, {});
    }
  },
  [types.actions.UPDATE_VALUE_PRODUCT]({ commit }, payload) {
    commit(types.mutations.SET_VALUE_PRODUCT, payload);
  },
};

export default {};
