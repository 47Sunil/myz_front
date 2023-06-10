import { useNavigate } from 'react-router-dom';
import { requestInstance } from '../axiosConfig';
import { useMutation, useQuery, useQueryClient } from 'react-query';
export function useDomainData(page) {
  const { isLoading, data } = useQuery({
    queryKey: ['domains', page],
    queryFn: (page) => {
      return requestInstance.get(`/domains?page=${page}`);
    },
  });
  return { isLoading, data };
}

export function useDomainMutation() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation(
    async (domainData) => {
      const res = await requestInstance.post('/domains', domainData);
      return res;
    },
    {
      onSuccess: (data) => {
        queryClient.setQueryData('DomainNameData', data);
        navigate('/domain/verification');
      },
      onError: (error) => {
        console.log('error occured: ' + error.message);
      },
    }
  );
}
