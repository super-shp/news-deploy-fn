import { default as axios, AxiosInstance } from 'axios';

const baseURL = 'localhost:8080/';

export const api: AxiosInstance = axios.create({
  baseURL,
  timeout: 1000,
});
