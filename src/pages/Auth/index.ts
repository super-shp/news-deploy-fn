import { Login } from '@/pages/Auth/Login';
import { Register } from '@/pages/Auth/Register';
import { vueMount } from '@/util/mount';

export const hookLogin = () => ({
  component: Login,
  mount: vueMount,
});

export const hookRegister = () => ({
  component: Register,
  mount: vueMount,
});
