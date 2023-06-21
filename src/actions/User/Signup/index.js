import { useMutation } from 'react-query';
import { requestInstance } from '../../axiosConfig';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
let otp;
export const useSignupMutation = () => {
  const navigate = useNavigate();
  // const queryClient = useQueryClient();
  return useMutation(
    async (data) => {
      try {
        const res = await requestInstance.post('/users', data);
        // console.log(res);
        otp = res.user;
        localStorage.setItem('phone', otp.phone);
        localStorage.setItem('email', otp.email);
        return res;
      } catch (error) {
        toast.error(error.response.data.message);
      }
    },
    {
      onSuccess: (data) => {
        data !== undefined && navigate('/verify');
        toast.success('OTP send');
      },
      onError: (err) => {
        toast.error(err.response.data.message);
      },
    }
  );
};
export const useOtpVerificationPhone = () => {
  return useMutation(
    async (phone) => {
      const otpPhone = localStorage.getItem('phone');
      try {
        const res = await requestInstance.post(
          `/users/mobile/verify?phone=${otpPhone}`,
          {
            mobileOTP: phone,
          }
        );
        return res;
      } catch (error) {
        // console.log(error);
        toast.error(error.response.data.message);
      }
    },
    {
      onSuccess: () => {
        toast.success('Mobile verified');
      },
    }
  );
};
export const useOtpVerificationEmail = () => {
  return useMutation(
    async (email) => {
      const otpEmail = localStorage.getItem('email');
      try {
        const res = await requestInstance.post(
          `/users/verify?email=${otpEmail}`,
          {
            emailOtp: email,
          }
        );
        return res;
      } catch (error) {
        toast.error(error.response.data.message);
      }
    },
    {
      onSuccess: () => {
        toast.success('Email verified');
      },
    }
  );
};
