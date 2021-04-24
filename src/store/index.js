import Vue from 'vue';
import Vuex from 'vuex';
import { name as nameProducts, module as moduleProducts } from './modules/products/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    [nameProducts]: moduleProducts,
  },
});
