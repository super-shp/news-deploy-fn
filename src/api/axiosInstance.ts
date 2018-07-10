import { default as axios, AxiosInstance } from 'axios';

const baseURL = 'http://localhost:8080/';

export const api: AxiosInstance = axios.create({
  baseURL,
  timeout: 1000,
});
