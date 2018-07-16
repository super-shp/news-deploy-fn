export const router = {
  routes: [
    {
      path: '/',
      name: 'home',
      component: () =>
        import('@/pages/MainPage').then(({ MainPage }) =>
          Promise.resolve(MainPage),
        ),
    },
    {
      path: '/publish',
      name: 'publish',
      component: () =>
        import('@/pages/Publish').then(({ Publish }) =>
          Promise.resolve(Publish),
        ),
    },
  ],
};
