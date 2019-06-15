import * as axios from 'axios';
import * as api from './api';

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

  console.log('who is first?');
}

setInterval(
  handleRequestAPOD,
  1000,
);
