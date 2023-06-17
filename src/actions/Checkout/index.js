import { useMutation } from 'react-query';
import { requestInstance } from '../axiosConfig';
import { toast } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

export const useCheckoutMutation = () => {
  return useMutation(
    async (data) => {
      try {
        const res = await requestInstance.post('/subscriptions/subs', data);
        return res;
      } catch (error) {
        toast.error(error.response.data.message);
      }
    },
    {
      onSuccess: (data) => {
        data && toast.success('Redirecting to Payment');
        window.location.replace(`${data.paymentDetails.paymentLink}`);
        // <Navigate to={} />;
        // navigate();
      },
    }
  );
};
