import { default as axios, AxiosInstance } from 'axios';
import { BASE_URL } from '@/config';

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
  ({ data }) => {
    // handle errorCode under this line
    return data;
  },
  error => {
    return Promise.reject(error);
  },
);

const TOKEN = `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyb290IiwiZXhwIjoxNTMxODIzNjM3fQ.Lf5FNRsC7LryPs6XsoEBHERY1vw7ymr2YrKEzcNpHlYm94ESnb4iE4vnxt9h5HSMGfvpA7IQDBZ77LW6l7taOg`;

axiosInstance.defaults.headers.common.Authorization = `Bearer ${TOKEN}`;

export const api = axiosInstance;
