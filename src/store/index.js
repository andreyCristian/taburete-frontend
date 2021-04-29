import Vue from 'vue';
import Vuex from 'vuex';
import {
  name as nameProducts, module as moduleProducts,
} from './modules/products/index';
import {
  name as nameProdutEdit, module as moduleProductEdit,
} from './modules/productsEdit/index';
import {
  name as nameConfiguration, module as moduleConfiguration,
} from './modules/configuration/index';
import {
  name as nameProviders, module as moduleProviders,
} from './modules/providers/index';
import {
  name as nameProductXProvider, module as moduleProductXProvider,
} from './modules/productXprovider/index';
import {
  name as nameProviderEdit, module as moduleProviderEdit,
} from './modules/providerEdit/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    [nameProducts]: moduleProducts,
    [nameProviders]: moduleProviders,
    [nameProdutEdit]: moduleProductEdit,
    [nameProviderEdit]: moduleProviderEdit,
    [nameConfiguration]: moduleConfiguration,
    [nameProductXProvider]: moduleProductXProvider,
  },
});
