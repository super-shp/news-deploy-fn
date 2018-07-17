const MainPage = () => import('@/pages/MainPage');

const Publish = () => import('@/pages/Publish');

const Auth = () => import('@/pages/Auth');

const NotFound = () => import('@/pages/404');

export const moduleList: Array<[string, () => Promise<any>]> = [
  ['MainPage', MainPage],
  ['Publish', Publish],
  ['Auth', Auth],
  ['NotFound', NotFound],
];
