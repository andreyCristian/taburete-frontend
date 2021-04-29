export const MODULE_PRODUCT_EDIT = '@module/productsEdit';

export const typesProductEdit = {
  PATH: `${MODULE_PRODUCT_EDIT}`,
  mutations: {
    SET_ID: '@mutations/setId',
    SET_PRODUCT: '@mutations/setProduct',
    SET_VALUE_PRODUCT: '@mutations/setValueProduct',
  },
  actions: {
    SAVE_PRODUCT: '@actions/saveProduct',
    UPDATE_PRODUCT: '@actions/updateProduct',
    UPDATE_VALUE_PRODUCT: '@actions/updateValueProduct',
  },
};

export default {};
