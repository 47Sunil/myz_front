import { requestInstance } from '../axiosConfig';

export async function useTemplatesData() {
  const res = await requestInstance.get('/templates/list');
  console.log(res, 'landing pages');
  return res;
}
