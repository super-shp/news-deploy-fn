import { RouterOptions, RouteConfig } from 'vue-router';
import { Login } from '@/pages/Auth';

console.log(Login);

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
    path: '/auth',
    name: 'login',
    component: Login,
  },
  {
    path: '/publish',
    name: 'publish',
    component: () =>
      import('@/pages/Publish').then(({ Publish }) => Promise.resolve(Publish)),
  },
];
