import { default as Vue } from 'vue';
import { default as Router } from 'vue-router';
import { MainPage } from '@/pages/MainPage';
import { Publish } from '@/pages/Publish';

Vue.use(Router);

export const routerCreator = (): Router =>
  new Router({
    routes: [
      {
        path: '/',
        name: 'home',
        component: MainPage,
      },
      {
        path: '/publish',
        name: 'publish',
        component: Publish,
      },
    ],
  });
