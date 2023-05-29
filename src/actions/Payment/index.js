import { useMutation, useQueryClient } from 'react-query';
import { requestInstance } from '../axiosConfig';
import { useNavigate } from 'react-router';

export async function usePaymentData() {
  const res = await requestInstance.get('/payments');
  return res;
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
