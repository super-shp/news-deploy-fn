import { default as axios, AxiosInstance, AxiosResponse } from 'axios';
import { default as Router, RouteConfig, Route } from 'vue-router';
import { default as qs } from 'qs';
import { BASE_URL } from '@/config';
import { router } from '@/router';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  transformRequest: [
    (data, headers) => {
      if (!headers.Authorization) {
        const auth = getAuth();
        if (auth) {
          headers.Authorization = auth;
        }
      }
      return data;
    },
    (data, headers) => {
      if (headers['Content-Type'] === undefined) {
        return JSON.stringify(data);
      } else {
        return data;
      }
    },
  ],
});

axiosInstance.interceptors.response.use(
  data => {
    setAuth(data);
    const loginConfig = getLoginHash(router, 'login');
    const { path } = loginConfig;
    const hash = window.location.hash;
    if (hash.indexOf(path) >= 0) {
      Object.assign(data, {
        data: {
          errorCode: 201,
          data: {},
        },
      });
    }
    // handle errorCode under this line
    return data.data;
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

function setAuth(data: AxiosResponse<any>) {
  const { headers } = data;
  const { authorization } = headers;
  if (authorization) {
    const current = window.localStorage.getItem('auth');
    if (current !== authorization) {
      window.localStorage.setItem('auth', authorization);
    }
  }
}

function getAuth(): string {
  const current = window.localStorage.getItem('auth');
  if (!current) {
    return '';
  } else {
    return current;
  }
}

function getLoginHash(route: any, name: string): RouteConfig {
  const { options } = route;
  const { routes } = options;
  const loginRouteConfig = (routes as RouteConfig[]).filter(
    r => r.name === name,
  )[0];

  return loginRouteConfig;
}


// axiosInstance.defaults.headers.post.Authorization = `Bearer ${TOKEN}`;
axiosInstance.defaults.headers.post['Content-Type'] =
  'application/json;charset=UTF-8';

export const api = axiosInstance;
