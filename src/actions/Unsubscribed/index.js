import { useMutation } from 'react-query';
import { requestInstance } from '../axiosConfig';

export const useUnSubsMutation = () => {
  const postData = async (data) => {
    try {
      const res = await requestInstance.post('/subscriptions/subs', data);
      console.log(res);
      window.open(
        `https://myzer.io?url=${encodeURI(res.paymentDetails.paymentLink)}`,
        '_blank'
      );

      return res;
    } catch (error) {
      console.log(error);
    }
  };
  return useMutation(postData);
};

export const usePaymentPendingMutation = () => {
  const postData = async () => {
    try {
      const res = await requestInstance.post('/subscriptions/generate');
      console.log(res);
      // window.open(`https://myzer.io?url=${encodeURI(res.url)}`, '_blank');
      window.open(`https://myzer.io?url=${encodeURI(res.url)}`, '_blank');
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  return useMutation(postData);
};
