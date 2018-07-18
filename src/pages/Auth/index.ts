import { Login } from './Login';
import { Register } from './Register';
import { vueMount } from '@/util/mount';

export const hookLogin = () => ({
  component: Login,
  mount: vueMount,
});

export const hookRegister = () => ({
  component: Register,
  mount: vueMount,
});
