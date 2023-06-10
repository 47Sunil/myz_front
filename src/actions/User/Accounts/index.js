import { useNavigate } from 'react-router-dom';
import { requestInstance } from '../../axiosConfig';
import { useQueryClient, useMutation } from 'react-query';
import { toast } from 'react-toastify';

export function useUserUpdateMutation() {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ id, name }) => {
      try {
        console.log(id + name);
        const res = await requestInstance.patch(`users/${id}`, {
          name: name,
        });
        return res;
      } catch (error) {
        console.log(error);
      }
    },
    {
      onSuccess: (data) => {
        queryClient.setQueryData('user', data);
        queryClient.invalidateQueries('user');
        window.location.reload();
      },
      onError: (error) => {
        console.log('error occured: ' + error.message);
      },
    }
  );
}

export function useChangePasswordMutation() {
  const queryClient = useQueryClient();
  return useMutation(async ({ oldPassword, newPassword }) => {
    const res = await requestInstance.patch('users/update-password', {
      oldPassword,
      newPassword,
    });
    return res;
  });
}
