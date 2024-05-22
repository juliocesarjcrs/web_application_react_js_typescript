import { axiosInstance } from '../plugins/axios.config';

const PREFIX = 'roles';

export const getRolesList = async () => {
  return axiosInstance.get(`${PREFIX}`);
};
