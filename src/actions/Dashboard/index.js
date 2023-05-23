import { requestInstance } from '../axiosConfig';

export async function useCountryData() {
  const res = await requestInstance.get('analytics/country');
  return res;
}

export async function useTopSellingData() {
  const res = await requestInstance.get('analytics/topProduct');
  return res;
}
