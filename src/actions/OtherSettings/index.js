import { useMutation, useQueryClient } from 'react-query';
// import { useNavigate } from 'react-router-dom';
import { requestInstance } from '../axiosConfig';
import { toast } from 'react-hot-toast';

export function useIntegrationPhoneMutation() {
  const queryClient = useQueryClient();
  return useMutation(
    async (userData) => {
      // console.log(userData, 'user data integrationd');
      try {
        const res = await requestInstance.patch('/users/order', userData);
        // toast.success('domain added successfully');
        // console.log(res);
        return res;
      } catch (err) {
        toast.error(err.response.data.message);
      }
    },
    {
      onSuccess: (data) => {
        queryClient.setQueryData('user', data);
        queryClient.invalidateQueries('user');
        toast.success('Updated');
      },
      onError: (error) => {
        // console.log('error occured: ' + error.message);
        toast.error(error.response.data.message);
      },
    }
  );
}
export function useIntegrationEmailMutation() {
  const queryClient = useQueryClient();
  return useMutation(
    async (userData) => {
      try {
        const res = await requestInstance.patch('/users/order', {
          email: {
            value: userData,
            enable: true,
          },
        });
        // toast.success('domain added successfully');
        return res;
      } catch (err) {
        // toast.error(err.response.data.message);
      }
    },
    {
      onSuccess: (data) => {
        queryClient.setQueryData('UserData', data);
        data && toast.success('Phone Added');
      },
      onError: (error) => {
        // console.log('error occured: ' + error.message);
        toast.error(error.response.data.message);
      },
    }
  );
}
export function useIntegrationWebhookMutation() {
  const queryClient = useQueryClient();
  return useMutation(
    async (userData) => {
      try {
        const res = await requestInstance.patch('/users/order', {
          webhook: {
            value: userData,
            enable: true,
          },
        });
        // toast.success('domain added successfully');
        return res;
      } catch (err) {
        // toast.error(err.response.data.message);
      }
    },
    {
      onSuccess: (data) => {
        queryClient.setQueryData('UserData', data);
        data && toast.success('Updated');
      },
      onError: (error) => {
        // console.log('error occured: ' + error.message);
        toast.error(error.response.data.message);
      },
    }
  );
}
