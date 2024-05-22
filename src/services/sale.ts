import { axiosInstance } from '../plugins/axios.config';
import { CreateSalePayload } from '../interfaces/sale.interface';

const PREFIX = 'sales';

export const createSale = async (payload: CreateSalePayload) => {
  return axiosInstance.post(`${PREFIX}`, payload);
};

export const getSalesList = async () => {
  return axiosInstance.get(`${PREFIX}`);
};

export const getTotalSalesValueByDay = async (date: string) => {
  return axiosInstance.get(`${PREFIX}/total/${date}`);
};

export const getTotalSalesByMonth = async (year: number, month: number) => {
  return axiosInstance.get(`${PREFIX}/total/${year}/${month}`);
};

export const deleteSale = async (id: string) => {
  return axiosInstance.delete(`${PREFIX}/${id}`);
};
