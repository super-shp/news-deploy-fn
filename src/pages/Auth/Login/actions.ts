import { api } from '@/api';

export const URL = {
  LOGIN: 'login',
};

export const login = async (username: string, password: string) => {
  const data = await api.post(URL.LOGIN, {
    username,
    password,
  });

  return data;
};
