import axios, { AxiosInstance } from 'axios';

const createAxiosInstance = (userId?: string): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000/api/',
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
      Auth: userId,
    },
  });

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        alert('No autorizado. Por favor, seleccione un usuario.');
      }
      if (error.response && error.response.status === 403) {
        alert(
          'No tiene permisos. Por favor, seleccione un usuario con los permisos adecuados.',
        );
      }
      return Promise.reject(error);
    },
  );

  return axiosInstance;
};

export const axiosInstance = createAxiosInstance('');

export const setAuthHeader = (userId: string) => {

  axiosInstance.defaults.headers['Auth'] = userId;
};
