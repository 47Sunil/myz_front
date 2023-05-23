import { requestInstance } from '../axiosConfig';

export async function usePaymentData() {
  const res = await requestInstance.get('/payments');
  return res;
}
