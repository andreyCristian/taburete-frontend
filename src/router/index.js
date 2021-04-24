import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/product',
    name: 'Productos',
    component: () => import('@/views/ProductList.vue'),
  },
  {
    path: '/provider',
    name: 'Proveedores',
    component: () => import('@/views/Provider.vue'),
  },
  {
    name: 'Configuración',
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
