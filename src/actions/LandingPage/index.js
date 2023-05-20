import { requestInstance } from '../axiosConfig';

export async function useLandingMutation() {
  const res = await requestInstance.get('/landingpages');
  return res;
}
