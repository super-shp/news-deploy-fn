import { default as axios, AxiosInstance } from 'axios';

const baseURL = 'localhost';

export const api: AxiosInstance = axios.create({
  baseURL,
  timeout: 1000,
});
