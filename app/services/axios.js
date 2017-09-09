import axios from 'axios';
import { store } from 'Redux';
import { NETWORK_ACTIVE, NETWORK_INACTIVE } from 'Redux/ducks/network';
import history from 'Services/history';

const Axios = () => {
  const token = localStorage.getItem('token');
  const instance = axios.create({
    baseURL: 'https://cloud-api.yandex.net/v1/disk/',
    headers: { Authorization: `OAuth ${token}` },
  });

  instance.interceptors.request.use((config) => {
    store.dispatch({ type: NETWORK_ACTIVE });
    return config;
  }, (error) => {
    return Promise.reject(error);
  });

  instance.interceptors.response.use((response) => {
    store.dispatch({ type: NETWORK_INACTIVE });
    return response;
  }, (error) => {
    store.dispatch({ type: NETWORK_INACTIVE });
    if (error.response.status === 401) {
      localStorage.removeItem('token');
      history.push('/');
    }
    return Promise.reject(error);
  });

  return instance;
};

export default Axios;
