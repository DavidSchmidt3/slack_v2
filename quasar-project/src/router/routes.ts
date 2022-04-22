import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [{ path: '', name: 'login', component: () => import('src/pages/Login.vue') }]
  },

  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [{ path: '', name: 'login', component: () => import('src/pages/Login.vue') }]
  },

  {
    path: '/register',
    component: () => import('layouts/RegisterLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/Register.vue') }]
  },

  {
    path: '/homepage',
    meta: { requiresAuth: true },
    component: () => import('layouts/MasterLayout.vue'),
    children: [{ path: '', name: 'home', component: () => import('src/pages/Homepage.vue') }]
  },

  {
    path: '/channel',
    meta: { requiresAuth: true },
    component: () => import('layouts/ChatLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/ChannelPage.vue') }]
  },

  {
    path: '/profile',
    component: () => import('layouts/MasterLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/Profile.vue') }]
  },

  //
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
