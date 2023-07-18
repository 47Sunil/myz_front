import { useQuery, useQueryClient } from 'react-query';
import { requestInstance } from '../axiosConfig';
import { toast } from 'react-hot-toast';

// export async function useCountryData() {
//   const res = await requestInstance.get('analytics/country');
//   return res;
// }

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
export function useBounceRateData() {
  return useQuery(['bounceRate'], async () => {
    try {
      const res = await requestInstance.get('analytics/bouncerate');
      console.log(res);
      return res;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  });
}
export function useConversionRateData() {
  return useQuery(['conversionRate'], async () => {
    try {
      const res = await requestInstance.get('analytics/conversion');
      console.log(res);
      return res;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  });
}
export function useCountryData() {
  return useQuery(['countryData'], async () => {
    try {
      const res = await requestInstance.get('analytics/country');
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
