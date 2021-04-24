import ProductApi from '@/api/ProductApi';

import { typesProducts as types } from './types';

const productApi = new ProductApi();

export const actions = {
  [types.actions.UPDATE_PRODUCTS]({ commit }) {
    productApi.getAll()
      .then((response) => commit(types.mutations.SET_PRODUCTS, response.data))
      .catch((e) => console.log(e));
  },
};

export default {};
