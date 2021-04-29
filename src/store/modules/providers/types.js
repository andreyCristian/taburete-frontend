export const MODULE_PROVIDERS = '@module/providers';

export const typesProviders = {
  PATH: `${MODULE_PROVIDERS}`,
  getters: {
    GET_ID_PROVIDERS: '@getters/getIdProviders',
  },
  mutations: {
    SET_PROVIDERS: '@mutations/setProviders',
  },
  actions: {
    UPDATE_PROVIDERS: '@actions/updateProviders',
  },
};

export default {};
