import { api } from '@/api';

export const URL = {
  SIGN_UP: '/auth/signup',
};

export const signUp = function(
  username: string,
  password: string,
  author: string,
) {
  return api.post(URL.SIGN_UP, {
    username,
    password,
    author,
  });
};
