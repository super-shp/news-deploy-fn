import { NavigationGuard } from 'vue-router';

export const beforeEach: NavigationGuard = (to, from, next) => {
  // some intercept
  next();
};
