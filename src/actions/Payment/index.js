import { useMutation, useQuery, useQueryClient } from 'react-query';
import { requestInstance } from '../axiosConfig';
import { useNavigate } from 'react-router';

// export async function usePaymentData(Page) {
//   const res = await requestInstance.get(`/payments?page=${Page}`);
//   console.log(res);
//   return res;
// }

export function usePaymentData(page) {
  const fetchPaymentData = async () => {
    console.log(page, '+++++++++++++++++++++++++');
    try {
      const res = await requestInstance.get(`/payments?page=${page}`);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  return useQuery(['payments', page], fetchPaymentData);
}

export async function usePaymentMutation() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation(
    async (data) => {
      try {
        const res = await requestInstance.post('/payments', data);

        return res;
      } catch (error) {
        console.error('request failed with error: ', error);
      }
    },
    {
      onSuccess: (data) => {
        queryClient.setQueryData('add-payments', data);
        navigate('/payment-gateways');
      },
      onError: (error) => {
        console.error('error occured while adding payments: ', error);
      },
    }
  );
}

export function useActivatePaymentMutation() {
  const patchActivate = async (id) => {
    console.log(id);
    try {
      const res = requestInstance.patch(`payments/active/${id}`);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  return useMutation(patchActivate);
}
