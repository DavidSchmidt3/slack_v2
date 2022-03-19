import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }],
  },

  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/Login.vue') }],
  },

  {
    path: '/register',
    component: () => import('layouts/RegisterLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/Register.vue') }],
  },

  {
    path: '/homepage',
    component: () => import('layouts/MasterLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/Homepage.vue') }],
  },
  {
    path: '/channel',
    component: () => import('layouts/MasterLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/Channel.vue') }],
  },

  //
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
