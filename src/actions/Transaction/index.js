import { requestInstance } from '../axiosConfig';

export async function useTransactionData() {
  const res = await requestInstance.get('/orders/list');
  console.log(res, 'orderlist');
  return res;
}
