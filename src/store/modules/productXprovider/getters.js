import { typesProductsXProviders as types } from './types';

export const getters = {
  [types.getters.GET_ID_PROVIDERS_CATALOG](state) {
    return state.catalog.map((x) => x.proveedor_id);
  },
};

export default {};
