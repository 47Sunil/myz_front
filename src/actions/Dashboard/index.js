import { useQuery, useQueryClient } from 'react-query';
import { requestInstance } from '../axiosConfig';
import { toast } from 'react-hot-toast';

export async function useCountryData() {
  const res = await requestInstance.get('analytics/country');
  return res;
}

export async function useTopSellingData() {
  const res = await requestInstance.get('analytics/topProduct');
  return res;
}

export function useReportData() {
  return useQuery(['reports'], async () => {
    try {
      const res = await requestInstance.get('analytics/dashBoard');
      console.log(res);
      return res;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  });
}

export function usePageViewsData(lastUsedDays) {
  return useQuery(['pageViews', lastUsedDays], async () => {
    try {
      console.log(lastUsedDays);
      const res = await requestInstance.get(
        `analytics/PAGEVIEWS?day=${lastUsedDays}`
      );
      console.log(res);
      return res;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  });
}
