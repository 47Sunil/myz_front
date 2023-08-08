import { useMutation, useQueryClient } from 'react-query';
import { requestInstance } from '../../axiosConfig';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
// import { useQuery } from '@tanstack/react-query';
export function useLoginMutation() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation(
    async (credentials) => {
      try {
        const res = await requestInstance.post('users/login', credentials);
        console.log(res.user.subscription);
        if (
          res.user.subscription.status !== 'Active' ||
          res.user.subscription === undefined
        ) {
          navigate('/unsubscribed');
        } else {
          navigate('/');
        }
        toast.success('Welcome to myzer');
        return res;
      } catch (error) {
        toast.error(error.response.data.message);
      }
    },
    {
      onSuccess: (data) => {
        queryClient.setQueryData('user', data);
        queryClient.invalidateQueries('user');
        console.log('++++++++++++++++++++');
        console.log(data);
        // window.location.reload();
      },
      onError: (error) => {
        // console.log(error);
        // console.log('error occured: ' + error.message);
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
        // console.log(error);
      }
    },
    {
      onSuccess: (data) => {
        queryClient.setQueryData('user', data);
        queryClient.invalidateQueries('user');
      },
      onError: (error) => {
        // console.log('error occured: ' + error.message);
      },
    }
  );
}
