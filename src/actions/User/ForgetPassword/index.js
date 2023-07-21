import { useMutation, useQueryClient } from 'react-query';
import { requestInstance } from '../../axiosConfig';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useForgetPasswordMutation() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation(
    async (email) => {
      try {
        const res = await requestInstance.post('users/forgot-password', {
          email,
        });
        toast.success(res.message);
        return res;
      } catch (error) {
        toast.error(error.response.data.message);
      }
    },
    {
      onSuccess: () => {
        navigate('/accounts/forgetPassword/otp');
      },
    }
  );
}

export function useForgotPasswordResendOTP() {
  return useMutation(async (email) => {
    console.log(email);
    try {
      const res = await requestInstance.post('users/resend/email', { email });
      toast.success(res.message);
      return res;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  });
}

export function useForgotPasswordUpdate() {
  const navigate = useNavigate();
  return useMutation(
    async ({ password, otp, email, setLockFields }) => {
      const formattedOtp = Number(otp);
      try {
        const res = await requestInstance.post(
          `users/forgot/verify?email=${email}`,
          {
            password,
            otp: formattedOtp,
          }
        );
        toast.success(res.message);
        navigate('/accounts/signin');
        return res;
      } catch (error) {
        toast.error(error.response.data.message);
        setLockFields(false);
      }
    },
    {
      onSuccess: () => {},
    }
  );
}
