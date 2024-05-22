import { axiosInstance } from '../plugins/axios.config';
import { CreateProductsPayload } from '../interfaces/product.interface';

const PREFIX = 'products';

export const createProducts = async (payload: CreateProductsPayload) => {
  return axiosInstance.post(`${PREFIX}`, payload);
};

export const getProductsList = async () => {
  return axiosInstance.get(`${PREFIX}`);
};

export const deleteProduct = async (id: string) => {
  return axiosInstance.delete(`${PREFIX}/${id}`);
};
