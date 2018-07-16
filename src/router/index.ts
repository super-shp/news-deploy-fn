import { default as Vue } from 'vue';
import { default as Router } from 'vue-router';
import { beforeEach } from '@/router/guard';
import { router as routerConfig } from '@/router/router';

Vue.use(Router);

const route: Router = new Router({
  routes: routerConfig,
});

route.beforeEach(beforeEach);

export const router = route;
