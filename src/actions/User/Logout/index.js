import { requestInstance } from '../../axiosConfig';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
// import { exact } from 'prop-types';
export function useLogoutMutation() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation(
    async () => {
      try {
        const res = await requestInstance.post('users/logout');
        return res;
      } catch (error) {
        console.log(error);
        // return error;
      }
    },
    {
      onSuccess: () => {
        navigate('/accounts/signin');
        queryClient.removeQueries('user', 'invoice');
      },
      onError: (error) => {
        // console.log('error occured: ' + error.message);
      },
    }
  );
}
