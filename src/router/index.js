import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/product',
    name: 'product',
    component: () => import('@/views/ProductList.vue'),
  },
  {
    path: '/product/edit/:id',
    name: 'edit-product',
    component: () => import('@/views/ProductEdit.vue'),
  },
  {
    path: '/provider',
    name: 'provider',
    component: () => import('@/views/Provider.vue'),
  },
  {
    path: '/provider/edit/:id',
    name: 'edit-provider',
    component: () => import('@/views/ProviderEdit.vue'),
  },
  {
    name: 'configuration',
    path: '/configuration',
    component: () => import('@/views/Configuration.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
