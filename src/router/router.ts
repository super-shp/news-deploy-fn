import { RouteConfig } from 'vue-router';
import { HookComponent } from './micro';
import { Login, Register } from '@/pages/Auth';
import { Whoops } from '@/pages/404';

export const router: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    component: HookComponent,
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
  {
    path: '/whoops',
    name: 'whoops',
    component: Whoops,
  },
  {
    path: '/test',
    name: 'test',
    component: HookComponent({
      path: '@/pages/MainPage/hookMainPage',
    }),
  },
];
