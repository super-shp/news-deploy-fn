import { default as Vue } from 'vue';
import { default as Router } from 'vue-router';
import { MainPage } from '@/pages/MainPage';

Vue.use(Router);

export const routerCreator = (): Router =>
  new Router({
    routes: [
      {
        path: '/',
        name: 'home',
        component: MainPage,
      },
    ],
  });
