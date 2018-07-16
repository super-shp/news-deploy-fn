import { api } from '@/api';

const URL = {
  LOGO_IN: '/login',
};

export const login = () => {
  return api.post<any>(URL.LOGO_IN, {
    username: 'root',
    password: '123456',
  });
};
