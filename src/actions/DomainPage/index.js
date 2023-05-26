import { requestInstance } from '../axiosConfig';
import { useMutation, useQueryClient } from 'react-query';
export async function useDomainData() {
  const res = await requestInstance.get('/domains');
  return res;
}

export function useDomainMutation() {
  const queryClient = useQueryClient();
  return useMutation(
    async (domainData) => {
      const res = await requestInstance.post('/domains', domainData);
      return res;
    },
    {
      onSuccess: (data) => {
        queryClient.setQueryData('DomainNameData', data);
      },
      onError: (error) => {
        console.log('error occured: ' + error.message);
      },
    }
  );
}
