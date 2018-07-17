import { default as axios, AxiosInstance } from 'axios';
import { default as Router, RouteConfig, Route } from 'vue-router';
import { BASE_URL } from '@/config';
import { router } from '@/router';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  transformRequest: [
    (data, headers) => {
      return data;
    },
  ],
});

axiosInstance.interceptors.response.use(
  data => {
    const resData = data.data;
    // handle errorCode under this line
    return data;
  },
  error => {
    const { response } = error;

    const { status } = response;
    if (status === 403) {
      const loginConfig = getLoginHash(router, 'login');
      const hash = window.location.hash;
      const { path } = loginConfig;

      // judge current route
      if (hash.indexOf(path) >= 0) {
        return Promise.resolve({
          errorCode: 403,
          data: {},
          msg: '认证失败',
        });
      } else {
        router.push(path);
      }
    }
    return Promise.reject(error);
  },
);

function getLoginHash(route: any, name: string): RouteConfig {
  const { options } = route;
  const { routes } = options;
  const loginRouteConfig = (routes as RouteConfig[]).filter(
    r => r.name === name,
  )[0];

  return loginRouteConfig;
}

const TOKEN = `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyb290IiwiZXhwIjoxNTMxODIzNjM3fQ.Lf5FNRsC7LryPs6XsoEBHERY1vw7ymr2YrKEzcNpHlYm94ESnb4iE4vnxt9h5HSMGfvpA7IQDBZ77LW6l7taOg`;

axiosInstance.defaults.headers.common.Authorization = `Bearer ${TOKEN}`;

export const api = axiosInstance;
