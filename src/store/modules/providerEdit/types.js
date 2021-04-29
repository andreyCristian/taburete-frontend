export const MODULE_PROVIDER_EDIT = '@module/providersEdit';

export const typesProviderEdit = {
  PATH: `${MODULE_PROVIDER_EDIT}`,
  mutations: {
    SET_ID: '@mutations/setId',
    SET_PROVIDER: '@mutations/setProvider',
  },
  actions: {
    SAVE_PROVIDER: '@actions/saveProvider',
    UPDATE_PROVIDER: '@actions/updateProvider',
  },
};

export default {};
