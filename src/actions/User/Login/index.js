import { useMutation, useQueryClient } from 'react-query';
import { requestInstance } from '../../axiosConfig';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
export function useLoginMutation() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation(
    async (credentials) => {
      const res = await requestInstance.post('users/login', credentials);
      return res;
    },
    {
      onSuccess: (data) => {
        queryClient.setQueryData('user', data);
        queryClient.invalidateQueries('user');
        navigate('/dashboard');
      },
      onError: (error) => {
        console.log('error occured: ' + error.message);
      },
    }
  );
}
export function useAutoLoginData() {
  const queryClient = useQueryClient();
  return useMutation(
    async () => {
      try {
        const res = await requestInstance.get('users/account');
        return res;
      } catch (error) {
        console.log(error);
      }
    },
    {
      onSuccess: (data) => {
        queryClient.setQueryData('user', data);
        queryClient.invalidateQueries('user');
      },
      onError: (error) => {
        console.log('error occured: ' + error.message);
      },
    }
  );
}
