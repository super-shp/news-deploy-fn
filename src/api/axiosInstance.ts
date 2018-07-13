import { default as axios, AxiosInstance } from 'axios';

const baseURL = 'http://localhost:8080/';

const axiosInstance: AxiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  transformRequest: [
    (data, headers) => {
      return data;
    },
  ],
});

axiosInstance.interceptors.response.use(
  ({ data }) => {
    const resData = data.data || null;
    // handle errorCode under this line
    return resData;
  },
  error => {
    return Promise.reject(error);
  },
);

const TOKEN =
  `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsI` +
  `mV4cCI6MTUzMTUzMDk1Mn0.4TRNCKRiMgA48dhJwffKi84oPqwvw6P1MJzxvsxOZf2FzU_SvET_kZuTOrgLHsbBtO-pCbevEif-sfbbkQ8m-A`;

axiosInstance.defaults.headers.common.Authorization = `Bearer ${TOKEN}`;

export const api = axiosInstance;
