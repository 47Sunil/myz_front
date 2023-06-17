import React, { useState } from 'react';
import logo from '../../../assets/logos/logo.png';
import rocket from '../../../assets/icons/icon_rocket.png';
import FormRight from '../../../components/FormRight/FormRight';
import styled from 'styled-components';
import bgForm from '../../../assets/images/signin_bg.png';
import FormLeft from '../../../components/FormLeft/FormLeft';
import PinkButton from '../../../components/PinkButton/PinkButton';
import { Link, useNavigate } from 'react-router-dom';
import GoToHomeBtn from '../../../components/BackToHome/BackToHome';
import DynamicInputManager from '../../../components/DynamicInputManager/DynamicInputManager';
import OtpInput from 'react-otp-input';
import {
  useOtpVerificationEmail,
  useOtpVerificationPhone,
} from '../../../actions/User/Signup';
import { toast } from 'react-hot-toast';
import { useQueryClient } from 'react-query';
import {
  useAutoLoginData,
  useLoginMutation,
} from '../../../actions/User/Login';
// import { TopError } from './';
// import { motion } from 'framer-motion';
// import { useSelector } from 'react-redux';
const SignUpLeft = styled.div`
  border: 0.5px solid black;
  width: 40%;
  min-width: 600px;
  background-color: #1e1e1e;
  background-image: url(${bgForm});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const Form = () => {
  const [phoneOtp, setPhoneOtp] = useState('');
  const [emailOtp, setEmailOtp] = useState('');
  const { mutateAsync: phoneVerification } = useOtpVerificationPhone();
  const { mutateAsync: emailVerification } = useOtpVerificationEmail();
  const { mutateAsync: login } = useAutoLoginData();
  const navigate = useNavigate();
  const handleSubmit = async (e, phone, email) => {
    e.preventDefault();
    try {
      await phoneVerification(phone);
      await emailVerification(email);
      (await login()) && navigate('/dashboard');
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <form
      className='mb-[1.6rem] flex flex-col'
      onSubmit={(e) => handleSubmit(e, phoneOtp, emailOtp)}
    >
      <div className='flex flex-col gap-8 mb-12'>
        <div className='flex flex-col gap-3'>
          <label className='text-white'>Phone OTP</label>
          <OtpInput
            value={phoneOtp}
            onChange={setPhoneOtp}
            numInputs={6}
            renderSeparator={<span>&nbsp;&nbsp;&nbsp;</span>}
            renderInput={(props) => <input {...props} />}
            containerStyle={{ width: '100%' }}
            inputStyle={'removeSpinBtn'}
            inputType='number'
            shouldAutoFocus={true}
          />
        </div>
        <div className='flex flex-col gap-3'>
          <label className='text-white'>Email OTP</label>

          <OtpInput
            value={emailOtp}
            onChange={setEmailOtp}
            numInputs={6}
            renderSeparator={<span>&nbsp;&nbsp;&nbsp;</span>}
            renderInput={(props) => <input {...props} />}
            containerStyle={{ width: '100%' }}
            inputStyle={'removeSpinBtn'}
          />
        </div>
      </div>

      <PinkButton
        text='Verify'
        disabled={phoneOtp === '' && emailOtp === ''}
      />
      <p className='mt-4 font-normal text-[20px] leading-8 text-[rgba(255,255,255,.82)] px-5 pb-5'>
        Didn't recieved OTP?{' '}
        <Link
          to='/accounts/signin'
          className='text-[#bd61ec] cursor-pointer hover:underline'
        >
          <span>Resend</span>
        </Link>
      </p>
      {/* <div className='px-5 pb-5'>
        <GoToHomeBtn text={'Go Back To Home'} />
      </div> */}
    </form>
  );
};
const SignUp = () => {
  return (
    <>
      <div className='relative flex w-screen h-screen overflow-hidden'>
        <SignUpLeft className='overflow-hidden'>
          <FormLeft
            logo={logo}
            heading={'Verify'}
            headingIcon={rocket}
            form={<Form />}
          />
        </SignUpLeft>
        <FormRight />
      </div>
    </>
  );
};

export default SignUp;
