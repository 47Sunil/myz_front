import { useMutation, useQueryClient } from 'react-query';
import { requestInstance } from '../../axiosConfig';

export function useLoginMutation() {
  const queryClient = useQueryClient();

  return useMutation(
    (credentials) =>
      requestInstance
        .post('users/login', credentials)
        .then((response) => response.data)
        .catch((error) => error.message),
    {
      onSuccess: (data) => {
        queryClient.setQueryData('user', data);
      },
      onError: (error) => {
        console.log('error occured: ' + error.message);
      },
    }
  );
}
