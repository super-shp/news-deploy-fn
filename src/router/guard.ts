import { NavigationGuard } from 'vue-router';

export const beforeEach: NavigationGuard = (to, from, next) => {
  // judge for auth
  next(to.path);
};
