import { requestInstance } from '../../axiosConfig';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
export function useLogoutMutation() {
  const navigate = useNavigate();
  return useMutation(
    async () => {
      try {
        const res = await requestInstance.post('users/logout');
        return res;
      } catch (error) {
        console.log(error);
      }
    },
    {
      onSuccess: () => {
        navigate('/accounts/signin');
      },
      onError: (error) => {
        console.log('error occured: ' + error.message);
      },
    }
  );
}
