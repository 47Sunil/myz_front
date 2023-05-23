import { requestInstance } from '../axiosConfig';

export async function useDomainData() {
  const res = await requestInstance.get('/domains');
  return res;
}
