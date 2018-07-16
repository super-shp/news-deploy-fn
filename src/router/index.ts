import { default as Vue } from 'vue';
import { default as Router } from 'vue-router';
import { beforeEach } from './guard';
import { router as routerConfig } from './router';

Vue.use(Router);

const route = new Router({
  routes: routerConfig,
});

route.beforeEach(beforeEach);

export const router = route;
