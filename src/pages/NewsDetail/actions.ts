import { api } from '@/api';

const URL = {
  FETCH_ARTICLE: '/article/get-article',
};

export const fetchArticle = (pid: string) => {
  return api.post(URL.FETCH_ARTICLE, {
    pid,
  });
};
