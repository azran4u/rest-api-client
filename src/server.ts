import * as axios from 'axios';
import * as api from './api';
import {RedisCache} from './redis';

async function handleRequestAPOD() {
  const handleResponse = (response: axios.AxiosResponse) => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  };
  const handleError = (error: axios.AxiosError) => {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else {
      console.log(error.message);
    }
  };

  await api.fetchAPOD()
    .then(handleResponse)
    .catch(handleError);
}

// setInterval(
//   handleRequestAPOD,
//   100000,
// );

const redis = new RedisCache();
redis.write('myhash', ['f1', 'hello', 'f2', 'world'])
.then((result: number) => {
  console.log(result);
})
.catch((error: number) => {
  console.log(error);
});

redis.read('myhash', 'f1')
.then((result: any) => {
  console.log(result);
})
.catch((error: any) => {
  console.log(error);
});
