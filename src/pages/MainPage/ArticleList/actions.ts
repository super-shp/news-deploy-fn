import { api } from '@/api';

const URL = {
  FETCH_ARTICLE_LIST: 'article/article-list',
};

export const getArticleList = async (
  currentPage: number = 1,
  filter: string = '',
  pageSize: number = 10,
) => {
  const data = await api.post(URL.FETCH_ARTICLE_LIST, {
    currentPage,
    pageSize,
    filter,
  });

  return data.data;
};
