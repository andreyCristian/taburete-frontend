export const MODULE_CONFIGURATIONS = '@module/configurations';

export const typesConfigurations = {
  PATH: `${MODULE_CONFIGURATIONS}`,
  mutations: {
    SET_UNIDS_TYPES: '@mutations/setUnidsTypes',
    SET_PRODUCTS_TYPES: '@mutations/setProductsTypes',
  },
  actions: {
    UPDATE_UNIDS_TYPES: '@actions/updateUnidsTypes',
    UPDATE_PRODUCTS_TYPES: '@actions/updateProductsTypes',
  },
};

export default {};
