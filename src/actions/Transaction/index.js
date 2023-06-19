import { useMutation, useQuery, useQueryClient } from 'react-query';
import { requestInstance } from '../axiosConfig';

// export async function useTransactionData() {
//   const res = await requestInstance.get('/orders/list');
//   return res;
// }

export const useTransactionData = (page, search) => {
  const queryClient = useQueryClient();
  const { isLoading, data, refetch, isRefetching } = useQuery({
    queryKey: ['transactions', page],
    queryFn: async () => {
      console.log(page, 'asdadsadadadadsdsad');
      try {
        const res = await requestInstance.get(
          `/orders/list?page=${page}&s=${search}`
        );
        return res;
      } catch (error) {
        console.log(error);
      }
    },
  });
  return { isLoading, data, refetch, isRefetching };
};
