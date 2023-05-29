import { requestInstance } from '../../axiosConfig';
export async function useAccountData() {
  const res = await requestInstance.get('/users/account');
  return res;
}
