import axios, {
  AxiosAdapter,
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  Cancel,
  Canceler,
  CancelToken,
  CancelTokenSource,
} from 'axios';

import https from 'https';

const config: AxiosRequestConfig = {
  url: '/planetary/apod',
  // tslint:disable-next-line:object-literal-sort-keys
  method: 'get',
  baseURL: 'https://api.nasa.gov',
  headers: { },
  params: { api_key: 'ubNbUudM9ENMr3HGpp3c2oDXKkjvpc54TaqztIrf' },
  timeout: 10000,
  withCredentials: false,
  responseType: 'json',
  maxContentLength: 20000,
  validateStatus: (status: number) => status >= 200 && status < 300,
  maxRedirects: 5,
};

const handleResponse = (response: AxiosResponse) => {
  console.log('OK');
  console.log(response.data);
  console.log(response.status);
  console.log(response.statusText);
  console.log(response.headers);
  console.log(response.config);
};

const handleError = (error: AxiosError) => {
  if (error.response) {
    console.log('ERROR');
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else {
    console.log(error.message);
  }
};

axios(config)
  .then(handleResponse)
  .catch(handleError);
