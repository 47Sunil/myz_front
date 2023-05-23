import { requestInstance } from '../axiosConfig';

export async function useTemplatesData() {
  const res = await requestInstance.get('/templates/list');
  return res;
}

export async function useLandingTablesData() {
  const res = await requestInstance.get('/landingpages');
  return res;
}
