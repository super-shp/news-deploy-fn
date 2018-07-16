import { RouteConfig } from 'vue-router';
import { Login, Register } from '@/pages/Auth';

export const router: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    component: () =>
      import('@/pages/MainPage').then(({ MainPage }) =>
        Promise.resolve(MainPage),
      ),
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/publish',
    name: 'publish',
    meta: {
      auth: true,
    },
    component: () =>
      import('@/pages/Publish').then(({ Publish }) => Promise.resolve(Publish)),
  },
];
