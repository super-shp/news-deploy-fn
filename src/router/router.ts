import { RouteConfig } from 'vue-router';
import { HookComponent } from '@/router/micro';

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
    component: HookComponent({ path: 'Auth/hookLogin' }),
  },
  {
    path: '/register',
    name: 'register',
    component: HookComponent({ path: 'Auth/hookRegister' }),
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
  {
    path: '/news-detail',
    name: 'newsDetail',
    component: HookComponent({ path: 'NewsDetail/hookNewsDetail' }),
  },
];
