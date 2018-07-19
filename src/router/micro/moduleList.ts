const MainPage = () => import('@/pages/MainPage');

const Publish = () => import('@/pages/Publish');

const Auth = () => import('@/pages/Auth');

const NotFound = () => import('@/pages/404');

const NewsDetail = () => import('@/pages/NewsDetail');

export const moduleList: Array<[string, () => Promise<any>]> = [
  ['MainPage', MainPage],
  ['Publish', Publish],
  ['Auth', Auth],
  ['NotFound', NotFound],
  ['NewsDetail', NewsDetail],
];
