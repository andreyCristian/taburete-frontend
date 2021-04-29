export const MODULE_PRODUCTS_BY_PROVIDERS = '@module/productsByProviders';

export const typesProductsXProviders = {
  PATH: `${MODULE_PRODUCTS_BY_PROVIDERS}`,
  getters: {
    GET_ID_PROVIDERS_CATALOG: '@getters/getIdProvidersCatalog',
  },
  mutations: {
    SET_CATALOG: '@mutations/setCatalog',
    SET_ITEM_CATALOG: '@mutations/setItemCatalog',
  },
  actions: {
    SAVE_NEW_ITEM: '@actions/saveNewItem',
    UPDATE_CATALOG: '@actions/updateCatalog',
    UPDATE_ITEM_CATALOG: '@actions/updateItemCatalog',
    DELETE_ITEM_CATALOG: '@actions/deleteItemCatalog',
  },
};

export default {};
