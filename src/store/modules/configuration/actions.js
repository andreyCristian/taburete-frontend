import UnidTypeApi from '@/api/UnidTypeApi';
import ProductTypeApi from '@/api/ProductTypeApi';

import { typesConfigurations as types } from './types';

const unidTypeApi = new UnidTypeApi();
const productTypeApi = new ProductTypeApi();

export const actions = {
  [types.actions.UPDATE_UNIDS_TYPES]({ commit }) {
    unidTypeApi.getAll()
      .then((response) => commit(types.mutations.SET_UNIDS_TYPES, response.data))
      .catch((e) => console.log(e));
  },
  [types.actions.UPDATE_PRODUCTS_TYPES]({ commit }) {
    productTypeApi.getAll()
      .then((response) => commit(types.mutations.SET_PRODUCTS_TYPES, response.data))
      .catch((e) => console.log(e));
  },
};

export default {};
