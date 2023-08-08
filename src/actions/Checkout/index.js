import { useMutation } from 'react-query';
import { requestInstance } from '../axiosConfig';
import { toast } from 'react-hot-toast';
// import { Navigate } from 'react-router-dom';

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
        // console.log('url', data.paymentDetails.paymentLink);
        // const encodedURL = encodeURIComponent(data.paymentDetails.paymentLink);
        // tion.replace(`https://myzer.io/?url=${encodedURL}`);
        // <Navigate to={} />;
        // navigate();
      },
    }
  );
};

export const useCheckoutUpgradeMutation = () => {
  return useMutation(
    async (data) => {
      data.plan_id = Number(data.plan_id);
      try {
        const res = await requestInstance.put('/subscriptions/subs', data);
        return res;
      } catch (error) {
        toast.error(error.response.data.message);
      }
    },
    {
      onSuccess: (data) => {
        data && toast.success('Redirecting to Payment');
      },
    }
  );
};
