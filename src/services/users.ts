import { axiosInstance } from '../plugins/axios.config';
import { CreateUserPayload } from '../interfaces/user.interface';

const PREFIX = 'users';

export const createUser = async (payload: CreateUserPayload) => {
  return axiosInstance.post(`${PREFIX}`, payload);
};

export const getUsersList = async () => {
  return axiosInstance.get(`${PREFIX}`);
};

export const deleteUser = async (id: string) => {
  return axiosInstance.delete(`${PREFIX}/${id}`);
};
