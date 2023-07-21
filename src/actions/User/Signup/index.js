import { useMutation } from 'react-query';
import { requestInstance } from '../../axiosConfig';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
let otp;
export const useSignupMutation = () => {
  const navigate = useNavigate();
  // const queryClient = useQueryClient();
  return useMutation(
    async ({ data, setLockFields }) => {
      try {
        const res = await requestInstance.post('/users', data);
        // console.log(res);
        otp = res.user;
        localStorage.setItem('phone', otp.phone);
        localStorage.setItem('email', otp.email);
        toast.success('OTP send');
        const isEmailVerified = res?.user?.emailObj?.isVerified;
        const isPhoneVerified = res?.user?.phoneObj?.isVerified;
        localStorage.setItem('isEmailVerified', isEmailVerified);
        localStorage.setItem('isPhoneVerified', isPhoneVerified);
        navigate('/accounts/verify');
        return res;
      } catch (error) {
        const isEmailVerified = error?.response?.data?.email?.isVerified;
        const isPhoneVerified = error?.response?.data?.phone?.isVerified;
        localStorage.setItem('isEmailVerified', isEmailVerified);
        localStorage.setItem('isPhoneVerified', isPhoneVerified);
        setLockFields(false);
        if (isEmailVerified && isPhoneVerified) {
          navigate('/accounts/signin');
          return toast.error('You are already verified');
        } else {
          navigate('/accounts/verify');
          return toast.error('You are not verified');
        }

        toast.error(error.response.data.message);
      }
    }
    // {
    //   onSuccess: (data) => {
    //     console.log(data);
    //     navigate('/verify');
    //   },
    //   onError: (err) => {
    //     console.log(err, 'on error');
    //     toast.error(err.response.data.message);
    //   },
    // }
  );
};
export const useOtpVerificationPhone = () => {
  return useMutation(
    async ({ phone, setLockFields }) => {
      const mobileOTP = Number(phone);
      console.log(mobileOTP);
      const otpPhone = Number(localStorage.getItem('phone'));
      console.log(otpPhone);
      try {
        const res = await requestInstance.post(
          `/users/mobile/verify?mobile=${otpPhone}`,
          {
            mobileOTP: mobileOTP,
          }
        );
        console.log(res, 'mobileOTP');
        toast.success('Mobile verified');
        return res;
      } catch (error) {
        setLockFields(false);
        console.log(error, 'phone otp verification');
        toast.error(error.response.data.message);
      }
    },
    {
      onSuccess: () => {},
    }
  );
};
export const useOtpVerificationEmail = () => {
  return useMutation(
    async ({ email, setLockFields }) => {
      const otpEmail = localStorage.getItem('email');
      try {
        const res = await requestInstance.post(
          `/users/verify?email=${otpEmail}`,
          {
            emailOtp: email,
          }
        );
        toast.success('Email verified');
        console.log(res);
        return res;
      } catch (error) {
        setLockFields(false);
        toast.error(error.response.data.message);
      }
    },
    {
      onSuccess: () => {
        // toast.success('Email verified');
      },
    }
  );
};

export function useResendMobileMutation() {
  return useMutation(async () => {
    const otpPhone = localStorage.getItem('phone');
    console.log(otpPhone);
    try {
      const res = await requestInstance.post(`/users/resend/otpphone`, {
        phone: otpPhone,
      });
      toast.success(res.message);
      return res;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  });
}
export function useResendEmailMutation() {
  return useMutation(async () => {
    const otpEmail = localStorage.getItem('email');
    console.log(otpEmail);

    try {
      const res = await requestInstance.post(`users/resend/email`, {
        email: otpEmail,
      });
      toast.success(res.message);

      return res;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  });
}
