import { useQuery, useQueryClient } from 'react-query';
import { requestInstance } from '../axiosConfig';
import { toast } from 'react-hot-toast';

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

export function useInvoiceData() {
  const queryClient = useQueryClient();
  return useQuery(
    ['invoice'],
    async () => {
      try {
        const res = requestInstance.get('/subscriptions/invoice/list');
        return res;
      } catch (error) {
        toast.error(error.response.data.message);
      }
    },
    {
      onSuccess: () => {
        // toast.success('Invoice Updated');
      },
      onError: (err) => {
        toast.error(err.response.data.message);
      },
    }
  );
}
