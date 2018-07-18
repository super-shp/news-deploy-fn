import { api } from '@/api';

export const URL = {
  LOGIN: 'login',
  GET_USER_INFO: '/auth/getinfo',
};

export const login = async (username: string, password: string) => {
  const data = await api.post(URL.LOGIN, {
    username,
    password,
  });

  return data;
};

export const getUserInfo = async () => await api.get(URL.GET_USER_INFO);
