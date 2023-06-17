import { useNavigate } from 'react-router-dom';
import { requestInstance } from '../axiosConfig';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-hot-toast';
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
      try {
        const res = await requestInstance.post('/domains', domainData);
        // toast.success('domain added successfully');
        return res;
      } catch (err) {
        toast.error(err.response.data.message);
      }
    },
    {
      onSuccess: (data) => {
        queryClient.setQueryData('DomainNameData', data);
        data && toast.success('Domain Added');
        data && navigate('/domain/verification');
      },
      onError: (error) => {
        console.log('error occured: ' + error.message);
        // toast.error(error.response.data.message);
      },
    }
  );
}

export function useDomainMutationDelete() {
  const queryClient = useQueryClient();
  return useMutation(
    async (id) => {
      try {
        const res = requestInstance.delete(`/domains/${id}`);
        return res;
      } catch (error) {
        toast.error(error.response.data.message);
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('domains');
        toast.success('Deleted');
      },
    }
  );
}

export function useDomainRefresh() {
  const queryClient = useQueryClient();
  return useMutation(
    'domainRefresh',
    async (id) => {
      try {
        const res = await requestInstance.patch(`domains/ref?id=${id}`);
        return res;
      } catch (error) {
        toast.error(error.response.data.message);
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('domains');
        toast.success('Status Updated');
      },
      onError: (error) => {
        toast.error(error.response.data.message);
      },
    }
  );
}
