import { useQuery, useQueryClient } from 'react-query';
import { requestInstance } from '../axiosConfig';

// export async function useSubscriptionPlanData(id) {
//   try {
//     const subsPlan = await useQuery('subsPlan', async () => {
//       const res = await requestInstance.get(`/users/limit/${id}`);
//       return res;
//     });
//     return subsPlan;
//   } catch (error) {
//     console.log(error);
//   }
// }

export function useSubscriptionPlanData() {
  const fetchSubscriptionPlanData = async () => {
    try {
      const res = await requestInstance.get(`/users/limit`);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  return useQuery('subsPlan', fetchSubscriptionPlanData);
}
