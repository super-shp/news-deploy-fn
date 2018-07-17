import { RouteConfig } from 'vue-router';
import { HookComponent } from './micro';
import { Login, Register } from '@/pages/Auth';

export const router: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    component: HookComponent({ path: 'MainPage/hookMainPage' }),
    // component: () =>
    //   import('@/pages/MainPage').then(({ MainPage }) =>
    //     Promise.resolve(MainPage),
    //   ),
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
    component: HookComponent({ path: 'Publish/hookPublish' }),
  },
  {
    path: '/whoops',
    name: 'whoops',
    component: HookComponent({ path: 'NotFound/hookWhoops' }),
  },
];
