import Vue from 'vue';

import VTooltip from 'v-tooltip';
import { ClientTable } from 'vue-tables-2';

import App from './App.vue';
import store from './store';
import router from './router';

import './registerServiceWorker';

import '@/assets/scss/main.scss';
import '@fortawesome/fontawesome-free/js/all';
import '@fortawesome/fontawesome-free/css/all.css';

Vue.use(VTooltip);
Vue.use(ClientTable);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
