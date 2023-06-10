import { useQuery } from 'react-query';
import { requestInstance } from '../axiosConfig';

// export async function useTransactionData() {
//   const res = await requestInstance.get('/orders/list');
//   return res;
// }

export const useTransactionData = (page) => {
  const { isLoading, data } = useQuery({
    queryKey: ['transactions', page],
    queryFn: () => {
      console.log(page, 'asdadsadadadadsdsad');
      return requestInstance.get(`/orders/list?page=${page}`);
    },
  });
  return { isLoading, data };
};
