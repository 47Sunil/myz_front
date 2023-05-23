import { useMutation, useQueryClient } from 'react-query';
import { requestInstance } from '../../axiosConfig';
import { useNavigate } from 'react-router-dom';
export function useLoginMutation() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation(
    (credentials) =>
      requestInstance
        .post('users/login', credentials)
        .then((response) => response.data)
        .catch((error) => error.message),
    {
      onSuccess: (data) => {
        queryClient.setQueryData('user', data);
        navigate('/dashboard');
      },
      onError: (error) => {
        console.log('error occured: ' + error.message);
      },
    }
  );
}
