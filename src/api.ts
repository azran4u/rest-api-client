import axios, {
    AxiosRequestConfig,
  } from 'axios';
import * as retry from 'retry-axios';

function fetchAPOD(): Promise<any> {
    const config: retry.RaxConfig = {
        url: '/planetary/apod',
        // tslint:disable-next-line:object-literal-sort-keys
        method: 'get',
        baseURL: 'https://api.nasa.gov',
        headers: {},
        params: { api_key: 'ubNbUudM9ENMr3HGpp3c2oDXKkjvpc54TaqztIrf' },
        timeout: 10000,
        withCredentials: false,
        responseType: 'json',
        maxContentLength: 20000,
        validateStatus: (status: number) => status >= 200 && status < 300,
        maxRedirects: 5,
        raxConfig: {
            retry: 2,
        },
    };

    const axiosInstance = axios.create(config);

    retry.attach(axiosInstance);

    return axiosInstance.request(config);
}

export {
    fetchAPOD,
};
