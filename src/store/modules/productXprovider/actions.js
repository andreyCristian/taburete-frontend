import ProductXProviderApi from '@/api/ProductXProviderApi';

import { typesProductEdit } from '@/store/modules/productsEdit/types';
import { typesProductsXProviders as types } from './types';

const productXProviderApi = new ProductXProviderApi();

export const actions = {
  [types.actions.UPDATE_CATALOG]({ commit }, payload) {
    if (payload) {
      productXProviderApi.getAll(payload)
        .then((response) => commit(types.mutations.SET_CATALOG, response.data))
        .catch((e) => console.log(e));
    } else commit(types.mutations.SET_CATALOG, []);
  },
  [types.actions.SAVE_NEW_ITEM]({
    state, dispatch, commit, rootState,
  }) {
    let api = null;

    if (!state.costProduct.id) api = productXProviderApi.post(state.costProduct);
    else api = productXProviderApi.put(state.costProduct.id, state.costProduct);

    console.log(rootState[typesProductEdit.PATH].id);

    api
      .then(() => {
        dispatch(types.actions.UPDATE_CATALOG, rootState[typesProductEdit.PATH].id);
        commit(types.mutations.SET_ITEM_CATALOG, null);
      })
      .catch((e) => console.log(e));
  },
  [types.actions.UPDATE_ITEM_CATALOG]({ commit }, payload) {
    commit(types.mutations.SET_ITEM_CATALOG, payload);
  },
  [types.actions.DELETE_ITEM_CATALOG]({ dispatch, rootState }, payload) {
    productXProviderApi.delete(payload)
      .then(() => {
        dispatch(types.actions.UPDATE_CATALOG, rootState[typesProductEdit.PATH].id);
      })
      .catch((e) => console.log(e));
  },
};

export default {};
